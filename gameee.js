
  

  document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', () => {
        const question = document.querySelector('#question');
        const choices = Array.from(document.querySelectorAll('.choice'));
        const questionElement = document.querySelector('#question');
        // const nextButton = document.querySelector('#nextButton');
        const quiz = document.querySelector('#quiz');
        const progressText = document.querySelector('#progressText');
        // const progressBarFull = document.querySelector('#progressBarFull');
      
        let currentQuestion ={}
        let acceptingAnswers = false
        let score = 0
        let questionCounter = 0
        let availableQuestions = []
      
        let questions = [
           {
            question:'What is the average annual sales growth of residential properties in China from 2010 to 2020?',
            choice1:'10.1%',
            choice2:'4.4%',
            choice3:'1.2%',
            choice4:'3.3%',
            answer: 1,
           }
        ]
      
        const SCORE_POINTS = 100
        const MAX_QUESTIONS = 1
      
        let startGame = () => {
            questionCounter = 0
            score = 0
            availableQuestions = [...questions]
            getNewQuestion()
        }
      
        let getNewQuestion = () => {
            if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
                endGame();
                return;
            }
            questionCounter++;
      
            // progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
            // progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;
      
            const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
            currentQuestion = availableQuestions[questionsIndex];
            // questionElement.innerText = currentQuestion.question;
      
            choices.forEach(choice => {
                const number = choice.dataset['number'];
                choice.innerText = currentQuestion['choice'+ number];
            });
      
            availableQuestions.splice(questionsIndex, 1);
            acceptingAnswers = true;
        };
      
        let select = (choice) => {
            acceptingAnswers = false;
            const selectedChoice = choice;
            const selectedAnswer = selectedChoice.dataset['number'];
      
            let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
      
            if (classToApply === 'correct') {
                incrementScore(SCORE_POINTS);
            } 
      
            selectedChoice.classList.add(classToApply);
      
            if (classToApply === 'incorrect') {
                const correctChoice = document.querySelector(`.choice[data-number="${currentQuestion.answer}"]`);
                correctChoice.classList.add('correct', 'correct-answer');
            }
      
            // nextButton.style.display = 'block';
            //document.getElementById("explaination").scrollIntoView({ behavior: 'smooth' });
        }
      
        let incrementScore = num =>{
            score +=num
        }
      
        let endGame = () => {
            
            //document.getElementById("explaination").scrollIntoView({ behavior: 'smooth' });
            document.getElementById("after-quiz").style.display = 'block'; // show the HTML content after the quiz game
        }
      
      
        startGame();
      
        choices.forEach(choice => {
            choice.addEventListener('click', e => {
                if (!acceptingAnswers) return;
                select(e.target);
            });
        });
      
        // nextButton.addEventListener('click', () => {
        //     if (!acceptingAnswers) return;
      
        //     nextButton.style.display = 'none';
      
        //     choices.forEach(choice => {
        //         choice.classList.remove('correct', 'incorrect','correct-answer');
        //     });
      
        //     getNewQuestion();
        // });
      });
   



  });
  