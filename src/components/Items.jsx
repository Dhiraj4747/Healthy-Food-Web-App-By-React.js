import FoodItems from "./FoodItems";

function Items({ array }) {
  return (
    <>
      <ul class="list-group">
        {array.map((arrayitemsss) => (
          <FoodItems
            arrayitem={arrayitemsss}
            bought={false}
            handleEvent={() => console.log(`${arrayitemsss} Being Bought `)}
          ></FoodItems>
        ))}
      </ul>
    </>
  );
}
export default Items;
