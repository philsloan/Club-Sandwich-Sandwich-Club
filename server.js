const express = require("express");
const routes = require("./controllers"); 
const path = require("path")
const exhbs = require("express-handlebars")
// import sequelize connection
const sequelize = require("./config/connection");



const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exhbs.create({}); // add helper functions if needed, dont forget to add the top
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes); 

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
