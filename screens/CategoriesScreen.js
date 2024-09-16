import CategoryGridTitle from "../components/CategoryGridTile"

import { CATEGORIES } from "../data/dummy-data"
import { FlatList } from 'react-native';



function CategoriesScreen({ navigation }) {


    function renderCategoryItem(itemData) {

        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            })
        }

        return <CategoryGridTitle onPress={pressHandler} title={itemData.item.title} color={itemData.item.color}></CategoryGridTitle>
    }

    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={
        renderCategoryItem
    } numColumns={2}></FlatList>
}

export default CategoriesScreen

