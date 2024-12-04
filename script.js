document.addEventListener('DOMContentLoaded', () => {
  const startScreen = document.querySelector('.start-screen');
  const game = document.getElementById('game');
  const game2p = document.getElementById('game-2p');
  const startButton = document.getElementById('one-player-button');
  const twoPlayerButton = document.getElementById('two-player-button');
  const closeOnePlayer = document.getElementById('close-one-player');
  const closeTwoPlayer = document.getElementById('close-two-player');

  // Single-player mode elements
  const questionSingle = document.getElementById('question');
  const answerInputSingle = document.getElementById('answer');
  const submitButtonSingle = document.getElementById('submit');
  const messageSingle = document.getElementById('message');
  const scoreDisplaySingle = document.getElementById('score');
  const resetButtonSingle = document.getElementById('reset');

  // Two-player mode elements
  const question1 = document.getElementById('question-1');
  const question2 = document.getElementById('question-2');
  const answerInput1 = document.getElementById('answer-1');
  const answerInput2 = document.getElementById('answer-2');
  const submitButton1 = document.getElementById('submit-1');
  const submitButton2 = document.getElementById('submit-2');
  const message1 = document.getElementById('message-1');
  const message2 = document.getElementById('message-2');
  const scoreDisplay1 = document.getElementById('score-1');
  const scoreDisplay2 = document.getElementById('score-2');
  const reset2pButton = document.getElementById('reset-2p');

  let scoreSingle = 0;
  let score1 = 0;
  let score2 = 0;

  startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    game.style.display = 'block';
    resetGameSinglePlayer();
  });

  twoPlayerButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    game2p.style.display = 'block';
    resetGameTwoPlayers();
  });

  function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operation = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
    return `${num1} ${operation} ${num2}`;
  }

  function checkAnswerSingle() {
    const question = questionSingle.textContent;
    const correctAnswer = eval(question);
    const userAnswer = parseFloat(answerInputSingle.value);

    if (userAnswer === correctAnswer) {
      messageSingle.textContent = 'Correct!';
      scoreSingle++;
    } else {
      messageSingle.textContent = 'Incorrect!';
    }

    setTimeout(() => {
      questionSingle.textContent = generateQuestion();
      answerInputSingle.value = '';
      scoreDisplaySingle.textContent = scoreSingle;
      messageSingle.textContent = '';
    }, 1000);
  }

  function checkAnswer(player) {
    const question = player === 1 ? question1.textContent : question2.textContent;
    const correctAnswer = eval(question);
    const userAnswer = parseFloat(
      player === 1 ? answerInput1.value : answerInput2.value
    );
    const message = player === 1 ? message1 : message2;
    const scoreDisplay = player === 1 ? scoreDisplay1 : scoreDisplay2;

    if (userAnswer === correctAnswer) {
      message.textContent = 'Correct!';
      if (player === 1) score1++;
      else score2++;
    } else {
      message.textContent = 'Incorrect!';
    }

    setTimeout(() => {
      if (player === 1) {
        question1.textContent = generateQuestion();
        answerInput1.value = '';
        scoreDisplay1.textContent = score1;
      } else {
        question2.textContent = generateQuestion();
        answerInput2.value = '';
        scoreDisplay2.textContent = score2;
      }
      message.textContent = '';
    }, 1000);
  }

  function resetGameSinglePlayer() {
    scoreSingle = 0;
    scoreDisplaySingle.textContent = scoreSingle;
    questionSingle.textContent = generateQuestion();
    answerInputSingle.value = '';
    messageSingle.textContent = '';
  }

  function resetGameTwoPlayers() {
    score1 = 0;
    score2 = 0;
    scoreDisplay1.textContent = score1;
    scoreDisplay2.textContent = score2;
    question1.textContent = generateQuestion();
    question2.textContent = generateQuestion();
    answerInput1.value = '';
    answerInput2.value = '';
    message1.textContent = '';
    message2.textContent = '';
  }

  submitButtonSingle.addEventListener('click', checkAnswerSingle);
  submitButton1.addEventListener('click', () => checkAnswer(1));
  submitButton2.addEventListener('click', () => checkAnswer(2));
  resetButtonSingle.addEventListener('click', resetGameSinglePlayer);
  reset2pButton.addEventListener('click', resetGameTwoPlayers);

  closeOnePlayer.addEventListener('click', () => {
    game.style.display = 'none';
    startScreen.style.display = 'block';
  });

  closeTwoPlayer.addEventListener('click', () => {
    game2p.style.display = 'none';
    startScreen.style.display = 'block';
  });
});

