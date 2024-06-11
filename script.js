//get to DOM elements
const gameContainer = document.querySelector(".container"),
 userResult = document.querySelector(".user_result img"),
 cpuResult = document.querySelector(".cpu_result img"),
 result = document.querySelector(".result"),
 optionImages = document.querySelectorAll(".option_image")

console.log(gameContainer, userResult, cpuResult, result, optionImages)

//Loop through each option image element
optionImages.forEach((image, index) =>{
    image.addEventListener("click", (e) => {
        image.classList.add("active")
        userResult.src = cpuResult.src = "images/rock.png"
        result.textContent = "Wait..."
        

        //Loop through each option image again
        optionImages.forEach((image2, index2) =>{
            //If the current index doens't match the clicked index
            //Remove the "active" class form the other option images
            index !== index2 && image2.classList.remove("active")
        });

        gameContainer.classList.add("start")

        //set a timeout to delay the result calculation
      let time = setTimeout (( ) =>{
        gameContainer.classList.remove("start")

                  //Get the source of the clicked option image
            // let imageSrc =
            let imageSrc = e.target.querySelector("img").src
            //Set the user image to the clicked option image
            userResult.src = imageSrc;

            //generate a random number between 0 and 2
            let randomNumber = Math.floor(Math.random() * 3)

            //create an array of CPU image option
            let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"]
            //set the cpu image as the random number 
            cpuResult.src = cpuImages[randomNumber]

            //assign a letter value to the cpu option (R for rock, P for paper, S for scissors)
            let cpuValue = ["R", "P", "S"][randomNumber]
            //assign a letter value to the clicked option (based on index)
            let userValue = ["R", "P", "S"][index]

            //create an object with all possible outocmes
            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            }
            //look up the outcome value basefd on user and cpu options
            let outcomeValue = outcomes[userValue + cpuValue]
            //display the result
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won !!`

      }, 600)
  
            


    });
});
