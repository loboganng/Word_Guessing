import styles from "./styles.module.css"

import { Letter } from "../Letter"

export function LettersUsed(){
  return (
  <div className={styles.lettersUsed}>
    <h5>Letters used</h5>

    <div>
      <Letter value="r" size="small" color="correct"/>
      <Letter value="x" size="small" color="wrong"/>
    </div>
  </div>)
}