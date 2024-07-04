import styles from "./Buttoncontainer.module.css";
const buttoncontainer = ({ onButtonClick }) => {
  let buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '.', '9', '0', 'Del', '='];
  return (
    <div className={styles["buttonContainers"]}>

      {
        buttonNames.map((name, ind) => (

          <button className={styles.btn} key={ind} onClick={() => onButtonClick(name)}>{name}</button>
        ))
      }


    </div>
  );
}
export default buttoncontainer;