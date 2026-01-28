import logo from "../../assets/logo.png"
import restart from "../../assets/restart.svg"

import styles from "./styles.module.css"

type Props = {    //Properties
  current: number   //Current guess number
  max: number   //Max guess number
  //Method as property
  onRestart: () => void    //Function onRestart
}

//Reestructuring props 
export function Header({ current, max, onRestart }: Props){
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" />

      <header>
        <span>
          <strong>{current}</strong> out of {max} guesses
        </span>

        <button type="button" onClick={onRestart}>
          <img src={restart} alt="Restart icon" />
        </button>
      </header>
    </div>
  )
}