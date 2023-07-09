import { Fragment, useEffect, useState } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import useGetMeals from "@/UI/Hooks/useGetMeals";
import { IMeals } from "@/Types/Shared/Meals";

const Meals = () => {
  const [arrayMeals, setArrayMeals] = useState<IMeals[]>([]);
  const { data: serverData, isLoading, isError } = useGetMeals();
  useEffect(() => {
    if (!isLoading) {
      const arrayData: IMeals[] = [];
      const { data } = serverData!;
      console.log(data.description);
      for (const key in data) {
        arrayData.push({
          id: key,
          description: data[key].description,
          name: data[key].name,
          price: data[key].price,
        });
      }
      setArrayMeals(arrayData);
    }
  }, [serverData, isLoading]);

  return (
    <Fragment>
      <MealsSummary />
      {isError ? (
        <h2>
          An error occurred loading the data, Please try again in a few minutes
        </h2>
      ) : (
        <AvailableMeals
          meals={arrayMeals}
          isLoading={isLoading}
        />
      )}
    </Fragment>
  );
};

export default Meals;
