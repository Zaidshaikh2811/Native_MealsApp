
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../MealItem"


function MealsList({ items }) {

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

        return <MealItem {...MealItemProps} />
    }


    return <View style={styles.container}>

        <FlatList data={items} keyExtractor={(item) => item.id}
            renderItem={renderMealItem} />
    </View>
}

export default MealsList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})