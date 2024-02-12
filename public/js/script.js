var buttonsSource = document.getElementById("button-template").innerHTML;
            var buttonsTemplate = Handlebars.compile(buttonsSource);

        
            var buttonsData = [
                { label: "NOT WHAT YOU'RE LOOKING FOR?", buttonText: "Click here for more" },
                { label: "FEELING LUCKY?", buttonText: "Let us pick for you" }
            ];

            
            var buttonsHtml = buttonsTemplate({ buttons: buttonsData });

            
            document.querySelector(".link-boxes").innerHTML = buttonsHtml;

