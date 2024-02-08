var buttonsSource = document.getElementById("button-template").innerHTML;
            var buttonsTemplate = Handlebars.compile(buttonsSource);

            // Define data for buttons
            var buttonsData = [
                { label: "NOT WHAT YOU'RE LOOKING FOR?", buttonText: "Click here for more" },
                { label: "RATE YOUR FAVORITE", buttonText: "Rate here" },
                { label: "FEELING LUCKY?", buttonText: "Let us pick for you" }
            ];

            // Render the buttons template with data
            var buttonsHtml = buttonsTemplate({ buttons: buttonsData });

            // Insert the rendered buttons HTML into the document
            document.querySelector(".link-boxes").innerHTML = buttonsHtml;
            