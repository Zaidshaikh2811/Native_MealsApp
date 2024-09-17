import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";


function MealsOverviewScreen({ route, navigation }) {

    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })
    useLayoutEffect(() => {
        navigation.setOptions({
            title: CATEGORIES.find((category) => category.id === catId).title
        })


    }, [catId, navigation])



    return <MealsList items={displayedMeals} />
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})