document.addEventListener("DOMContentLoaded", function() {
  var questions = [
    {
      question: "What is the average annual sales growth of residential properties in China from 2010 to 2020?",
      choices: ["10.1%", "4.4%", "1.2%", "3.3%"],
      answer: 0
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: 2
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Claude Monet"],
      answer: 1
    },
    {
      question: "What is the largest animal on Earth?",
      choices: ["Elephant", "Giraffe", "Hippopotamus", "Blue whale"],
      answer: 3
    }
  ];

  // Get DOM elements
  const questionText = document.getElementById("question");
  const choicesContainer = document.getElementById("choice");
  const checkBtn = document.getElementById("check-answer");
  

  // Set initial state
  let currentQuestion = 0;
  let chosenAnswer = null;
  let chosenAnswerIndex = null; // added this variable to keep track of the index of the chosen answer

  function showQuestion() {
    // Find the questionText element
    var questionText = document.getElementById("question-text");
  
    // Check if the element exists and has a value
    if (questionText && questionText.textContent != null) {
      // Set the textContent property of the questionText element to the current question
      questionText.textContent = question;
    }
    else {
      // Log an error message to the console if the element is not found or has a null value
      console.error("Question text element not found or has a null value.");
    }

    
  
    // Check if there are any more questions left
    if (currentQuestion >= questions.length) {
      // If not, display a message and hide the check button
      var questionText = document.getElementById("question-text");
      if (questionText) {
        questionText.textContent = "You have completed the quiz!";
      }
      var choicesContainer = document.getElementById("choices-container");
      if (choicesContainer) {
        choicesContainer.innerHTML = "";
      }
      var checkBtn = document.getElementById("check-btn");
      if (checkBtn) {
        checkBtn.style.display = "none";
      }
      return;
    }
  
    // Display the question number
    var questionNumber = document.getElementById("question-number");
    if (questionNumber) {
      questionNumber.textContent = "Question " + (currentQuestion + 1);
    } else {
      console.log("Error: question-number element not found.");
    }
  
    // Display the question text
    var questionText = document.getElementById("question-text");
    if (questionText) {
      questionText.textContent = questions[currentQuestion].question;
    }
  
    // Display the answer choices
    choicesContainer.innerHTML = "";
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
      const choice = questions[currentQuestion].choices[i];
  
      const choiceContainer = document.createElement("div");
      choiceContainer.classList.add("choice-container");
      choiceContainer.textContent = choice;
  
      choiceContainer.addEventListener("click", () => {
        // Record the chosen answer and turn the choice container pink
        chosenAnswer = choice;
        chosenAnswerIndex = i;

        // Remove the "correct" and "incorrect" classes from all choice containers

        const allChoices = choicesContainer.querySelectorAll(".choice-container");
        allChoices.forEach((choice) => {
          choice.classList.remove("correct", "incorrect");
        });

        // Add the "chosen" class to the chosen answer's container
        choiceContainer.classList.add("chosen");

        // Enable the check button
        checkBtn.disabled = false;
      });

      choicesContainer.appendChild(choiceContainer);
    }
  }

  function checkAnswer() {
    // Disable the check button
    checkBtn.disabled = false;

    // Get the correct answer index
    const correctAnswerIndex = questions[currentQuestion].answer;

    // Get the choice container for the chosen answer
    const chosenChoiceContainer = choicesContainer.querySelectorAll(".choice-container")[chosenAnswerIndex];

    if (chosenAnswerIndex === correctAnswerIndex) {
      // If the chosen answer is correct, turn the choice container green and display a message
      chosenChoiceContainer.classList.add("correct");
      questionText.textContent = "Correct!";
    } else {
      // If the chosen answer is incorrect, turn the choice container red and display a message
      chosenChoiceContainer.classList.add("incorrect");
      questionText.textContent = "Incorrect!";
    }

    // Increment the question counter
    currentQuestion++;

    // Wait 1 second before showing the next question
    setTimeout(() => {
      showQuestion();
    }, 1000);
  }

  // Start the quiz by showing the first question
  showQuestion();

  // Add event listener to the check button
  checkBtn.addEventListener("click", checkAnswer);
});

