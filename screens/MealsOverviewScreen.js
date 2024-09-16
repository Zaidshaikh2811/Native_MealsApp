import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";


function MealsOverviewScreen({ route }) {

    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catId) >= 0;

    })

    function renderMealItem(itemData) {
        const item = itemData.item
        const MealItemProps = {
            Duration: item.duration,
            Complexity: item.complexity,
            Affordability: item.affordability,
            imageUrl: item.imageUrl,
            title: item.title
        }

        return <MealItem {...MealItemProps} />
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