
  
window.addEventListener('load', () => {
    const question = document.querySelector('#question2');
    const choices = Array.from(document.querySelectorAll('.choice2'));
    const questionElement = document.querySelector('#question2');
    // const nextButton = document.querySelector('#nextButton2');
    const quiz = document.querySelector('#quiz2');
    // const progressText = document.querySelector('#progressText2');
    // const progressBarFull = document.querySelector('#progressBarFull2');
  
    let currentQuestion ={}
    let acceptingAnswers = false
    let score = 0
    let questionCounter = 0
    let availableQuestions = []
  
    let questions = [
       {
        question:'In 2022, how many Chinese developers have declared bankruptcy',
        choice1:'200+',
        choice2:'500+',
        choice3:'800+',
        choice4:'1000+',
        
        answer: 4,
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
        console.log(classToApply)
  
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        } 
  
        selectedChoice.classList.add(classToApply);
  
        if (classToApply === 'incorrect') {
            const correctChoice = document.querySelector(`.choice2[data-number="${currentQuestion.answer}"]`);
            correctChoice.classList.add('correct', 'correct-answer');
        }
  
        // nextButton.style.display = 'block';
        //document.getElementById("explanation2").scrollIntoView({ behavior: 'smooth' });
    }
  
    let incrementScore = num =>{
        score +=num
    }
  
    let endGame = () => {
        
        document.getElementById("explanation2").scrollIntoView({ behavior: 'smooth' });
        document.getElementById("after-quiz2").style.display = 'block'; // show the HTML content after the quiz game
    }
  
  
    startGame();
  
    choices.forEach(choice => {
        
        choice.addEventListener('click', e => {
            // console.log('click')
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