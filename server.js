const express = require("express");
const sandwichRoutes = require("./controllers/sandwich-routes");
const routes = require("./controllers");
const path = require("path");
const exhbs = require("express-handlebars");
const sequelize = require("./config/connection");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};



const app = express();
const PORT = process.env.PORT || 3001;

app.use(session(sess));

const hbs = exhbs.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", sandwichRoutes);

app.use(routes);



sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});

