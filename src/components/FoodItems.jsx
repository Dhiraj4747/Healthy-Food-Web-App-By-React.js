import styles from "./FoodItems.module.css";

function FoodItems({ arrayitem,bought, handleEvent }) {
  return (
    <>
      <li key={arrayitem} className={`list-group-item ${bought && 'active'}`}>
        <span>{arrayitem}</span>

        <button
          className={`${styles.button} btn btn-info`}
          onClick={handleEvent}
        >
          Buy
        </button>
      </li>

      {/* <h1 className={styles["boss"]}>Hii Boss</h1> */}
    </>
  );
}
export default FoodItems;
