import styles from "./styles.module.css"
import tipIcon from "../../assets/tip.svg"

type Props = {
  tip: string
}

export function Tip({ tip }: Props){
  return(
    <div className={styles.tip}>
      <img src={tipIcon} alt="Tip icon" />

      <div>
        <h3>Tip</h3>
        <p>{tip}</p>
      </div>
    </div>
  )
}