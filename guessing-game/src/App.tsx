import styles from "./app.module.css"
import { useEffect, useState } from "react"

import { WORDS, Challenge } from "./utils/words"


import { LettersUsed, LettersUsedProps } from "./components/LettersUsed"
import { Header } from "./components/Header"
import { Letter } from "./components/Letter"
import { Button } from "./components/Button"
import { Input } from "./components/Input"
import { Tip } from "./components/Tip"

export default function App(){
  //Creating initial useStates
  const [score, setScore] = useState(0) //Amount of correct guesses
  const[letter, setLetter] = useState("") //Initial letter display
  const [attempts, setAttempts] = useState(0) //Initial number of attempts
  const [challenge, setChallenge] = useState<Challenge | null>(null)  //Initial challenge word
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([])  //Initial array of letters already guessed

  function handleRestartGame(){
    alert("Restart game!")
  }

  function startGame(){
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]

    setChallenge(randomWord)
    setAttempts(0)
    setLetter("")
  }

  function handleConfirm(){
    if (!challenge) {
      return
    }

    //If user input no value
    if (!letter.trim()) {
      return alert("Type a letter!")
    }

    //To check if letter is already in the used letter list
    const value = letter.toUpperCase()
    const exists = lettersUsed.find((used) => used.value.toUpperCase() === value)

    //If the letter was already inputed
    if (exists) {
      return alert("You already tried the letter " + value + ". Try another letter!")
    }

    //Splitting the word into an array of letter
    //Filtering letter by letter
    //Returni the lenght
    const hits = challenge.word.toUpperCase().split("").filter((char) => char === value).length

    //Checking if the amount is greater than 0
    //Letter exists and is correct
    const correct = hits > 0
    const currentScore = score + hits //Updating user score

    //We get the previous state + the additional wrog letter
    setLettersUsed((prevState) => [ ...prevState, {value, correct}])
    //Updating the score
    setScore(currentScore)
    //Clearing the input
    setLetter("")
  }

  useEffect(() => {
    startGame()
  }, [])

  if (!challenge) {
    return
  }

  return(
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame}/>
        
        <Tip tip={challenge.tip}/>

        <div className={styles.word}>
          {
            challenge.word.split("").map(() => (
              <Letter value=""/>
            ))}
        </div>

        <h4>Guesses</h4>

        <div className={styles.guess}>
          <Input 
          autoFocus 
          maxLength={1} 
          placeholder="?" 
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          />
          <Button title="Confirm" onClick={handleConfirm}/>
        </div>
        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  )
}