import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";


function FavoritePage() {

    const favoriteMealsCtx = useContext(FavoriteContext)
    const favoriteMeals = MEALS.filter(meal => {
        return favoriteMealsCtx.ids.includes(meal.id)

    })

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.container}>

                <Text style={styles.text}>No favorite meals yet. Start adding some!</Text>
            </View>

        )
    }
    return <MealsList items={favoriteMeals} />
}

export default FavoritePage


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'white'
    }
})