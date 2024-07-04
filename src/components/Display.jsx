import styles from "./Display.module.css";
const Display = ({ displayval }) => {
  return (
    <input type="text" className={styles.display} value={displayval} readOnly />
  )
}

export default Display;