import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";


function MealsOverviewScreen({ route, navigation }) {

    const catId = route.params.categoryId;
    useLayoutEffect(() => {
        navigation.setOptions({
            title: CATEGORIES.find((category) => category.id === catId).title
        })


    }, [catId, navigation])
    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catId) >= 0;

    })

    function renderMealItem(itemData) {
        const item = itemData.item
        const MealItemProps = {
            Duration: item.duration,
            id: item.id,
            Complexity: item.complexity,
            Affordability: item.affordability,
            imageUrl: item.imageUrl,
            title: item.title
        }

        return <MealItem {...MealItemProps} navigation={navigation} />
    }


    return <View style={styles.container}>

        <FlatList data={displayedMeals} keyExtractor={(item) => item.id}
            renderItem={renderMealItem} />
    </View>
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})