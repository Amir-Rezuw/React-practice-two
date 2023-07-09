import { Fragment } from "react";
import Card from "../Shared/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealITem/MealItem";
import { IMeals } from "@/Types/Shared/Meals";
import Lottie from "react-lottie";
import animationData from "@/assets/Loading_Lottie.json";
import { lottieDefaultOptions } from "@/Configs/Lottie";
const AvailableMeals = ({
  meals,
  isLoading,
}: {
  meals: IMeals[];
  isLoading: boolean;
}) => {
  return (
    <section className={styles.meals}>
      <Card>
        {isLoading ? (
          <Lottie
            options={lottieDefaultOptions(animationData)}
            width={200}
            height={200}
          />
        ) : (
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
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
