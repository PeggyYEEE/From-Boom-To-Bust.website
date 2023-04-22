window.addEventListener('load', () => {
    const question = document.querySelector('#question3');
    const choices = Array.from(document.querySelectorAll('.choice3'));
    const questionElement = document.querySelector('#question3');
    // const nextButton = document.querySelector('#nextButton2');
    const quiz = document.querySelector('#quiz3');
    // const progressText = document.querySelector('#progressText2');
    // const progressBarFull = document.querySelector('#progressBarFull2');
  
    window.currentQuestion3 ={}
    window.acceptingAnswers3 = false
    window.score3 = 0
    window.questionCounter3 = 0
    window.availableQuestions3 = []
  
    window.questions3 = [
           {
            question:'What is LGFV?',
            choice1:'Large Government Funding Vehicle',
            choice2:'Land Guarantee Financing Vehicle',
            choice3:'Local Government Financial Vehicle',
            choice4:'Legal Government Finance Verification',
            
            answer: 3,
           }
        ]
  
    const SCORE_POINTS = 100
    const MAX_QUESTIONS = 1
  
    
  
    let getNewQuestion = () => {
        if(window.availableQuestions3.length === 0 || window.questionCounter3 >= MAX_QUESTIONS) {
            endGame();
            return;
        }
        window.questionCounter3++;
  
        // progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
        // progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;
  
        const questionsIndex = Math.floor(Math.random() * window.availableQuestions3.length);
        window.currentQuestion3 = window.availableQuestions3[questionsIndex];
        console.log(window.currentQuestion3)
        // questionElement.innerText = currentQuestion.question;
  
        choices.forEach(choice => {
            console.log(choice.dataset['number'])
            const num = choice.dataset['number'];
            choice.innerText = window.currentQuestion3['choice'+ num];
        });
  
        window.availableQuestions3.splice(questionsIndex, 1);
        window.acceptingAnswers3 = true;
    };
    let startGame = () => {
        window.questionCounter3 = 0
        window.score3 = 0
        window.availableQuestions3 = [...window.questions3]
        getNewQuestion()
    }
    let select = (choice) => {
        window.acceptingAnswers3 = false;
        const selectedChoice = choice;
        const selectedAnswer = selectedChoice.dataset['number'];
  
        let classToApply = selectedAnswer == window.currentQuestion3.answer ? 'correct' : 'incorrect';
        console.log(classToApply)
  
        //if (classToApply === 'correct') {
            //incrementScore(SCORE_POINTS);
        //} 
  
        selectedChoice.classList.add(classToApply);
  
        if (classToApply === 'incorrect') {
            const correctChoice = document.querySelector(`.choice3[data-number="${window.currentQuestion3.answer}"]`);
            correctChoice.classList.add('correct', 'correct-answer');
        }
  
        // nextButton.style.display = 'block';
        document.getElementById("explana").scrollIntoView({ behavior: 'smooth' });
    }
  
    let incrementScore = num =>{
        score +=num
    }
  
    let endGame = () => {
        
        document.getElementById("explanation3").scrollIntoView({ behavior: 'smooth' });
        document.getElementById("after-quiz3").style.display = 'block'; // show the HTML content after the quiz game
    }
  
  
    startGame();
  
    choices.forEach(choice => {
        
        choice.addEventListener('click', e => {
            // console.log('click')
            if (!window.acceptingAnswers3) return;
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