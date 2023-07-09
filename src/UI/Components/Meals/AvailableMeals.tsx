import { Fragment } from "react";
import Card from "../Shared/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealITem/MealItem";
import { IMeals } from "@/Types/Shared/Meals";

const AvailableMeals = ({ meals }: { meals: IMeals[] }) => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
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
