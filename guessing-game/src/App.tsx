import styles from "./app.module.css"
import { useEffect, useState } from "react"

import { WORDS, Challenge } from "./utils/words"


import { LettersUsed } from "./components/LettersUsed"
import { Header } from "./components/Header"
import { Letter } from "./components/Letter"
import { Button } from "./components/Button"
import { Input } from "./components/Input"
import { Tip } from "./components/Tip"

export default function App(){
  //Creating initial useStates
  const [attempts, setAttempts] = useState(0)
  const[letter, setLetter] = useState("")
  const [challenge, setChallenge] = useState<Challenge | null>(null)

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
        
        <Tip tip="Dynamic programming language"/>

        <div className={styles.word}>
          {
            challenge.word.split("").map(() => (
              <Letter value=""/>
            ))}
        </div>

        <h4>Guesses</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?"/>
          <Button title="Confirm"/>
        </div>
        <LettersUsed />
      </main>
    </div>
  )
}