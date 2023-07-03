import { Fragment } from "react";
import Card from "../Shared/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealITem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <Fragment key={meal.id}>
              <MealItem
                description={meal.description}
                name={meal.name}
                price={meal.price}
                id={meal.id}
              />
            </Fragment>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
