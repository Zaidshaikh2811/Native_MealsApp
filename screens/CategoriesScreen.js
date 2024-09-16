import CategoryGridTitle from "../components/CategoryGridTile"

import { CATEGORIES } from "../data/dummy-data"
import { FlatList } from 'react-native';
function renderCategoryItem(itemData) {
    return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color}></CategoryGridTitle>
}


function CategoriesScreen() {
    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={
        renderCategoryItem
    } numColumns={2}></FlatList>
}

export default CategoriesScreen

