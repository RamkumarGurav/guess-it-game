import React, { useState } from "react";

const Middle = () => {
  const numberTag = document.querySelector(".number");
  const messageTag = document.querySelector(".message");
  const scoreTag = document.querySelector(".score");
  const highscoreTag = document.querySelector(".highscore");
  const [guess, setGuess] = useState("");
  const [score, setScore] = useState(20);
  const [highscore, setHighScore] = useState(0);
  const [message, setMessage] = useState("Start guessing...");
  const [number, setNumber] = useState("?");
  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * 20) + 1
  );

  function handleChange(event) {
    setGuess(Number(event.target.value));
  }
  function check() {
    console.log("clicked");
    if (guess === 0 || guess > 20 || guess < 1) {
      setMessage("⛔ Give an appropriate number");
    } else if (guess === secretNumber) {
      setMessage("🎉 Correct guess");
      document.querySelector("body").style.backgroundColor = "#60b347";
      setNumber(secretNumber);
      numberTag.style.width = "30rem";
      if (score > highscore) {
        setHighScore(score);
      }
    } else if (guess !== secretNumber) {
      setScore(score - 1);

      if (score > 0) {
        setMessage(guess > secretNumber ? "📈Too High!" : "📉Too Low!");

        setScore((prev) => {
          return prev;
        });
      } else {
        setMessage("💥 You lost the game!");
        document.querySelector("body").style.backgroundColor = "#FF1E00";
      }
    }
  }

  function again() {
    setSecretNumber(Math.floor(Math.random() * 20) + 1);
    setMessage("Start Guessing....");
    document.querySelector("body").style.backgroundColor = "#222";
    setNumber("?");
    numberTag.style.width = "15rem";
    setGuess("");
    setScore(20);
    setHighScore((prev) => {
      return prev;
    });
  }

  return (
    <div className="maincontainer">
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again" onClick={again}>
          Again!
        </button>
        <div className="number">{number}</div>
      </header>
      <div className="line-break"></div>
      <br></br> <br></br>
      <section className="middle">
        <main>
          <section className="left">
            <p className="message">{message}</p>
            <p className="label-score">
              💯 Score: <span className="score">{score}</span>
            </p>
            <p className="label-highscore">
              🥇 Highscore: <span className="highscore">{highscore}</span>
            </p>
          </section>
          <section className="right">
            <input
              type="number"
              className="guess"
              min="1"
              max="20"
              onChange={handleChange}
              value={guess}
            />
            <button className="btn check" onClick={check}>
              Check!
            </button>
          </section>
        </main>
      </section>
    </div>
  );
};

export default Middle;
