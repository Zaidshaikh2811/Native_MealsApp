import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealsDetails";
import SubTitle from "../components/MealDetails/SubTitle";
import List from "../components/MealDetails/List";

function MealSpecific({ route }) {
    const navigation = useNavigation();


    const catId = route.params.id;
    const selectedMeal = MEALS.find((meal) => meal.id == catId)
    useLayoutEffect(() => {
        navigation.setOptions({
            title: catId
        })


    }, [catId])

    return <ScrollView style={styles.rootContainer}>

        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />

            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                textStyle={styles.detailText}
                Duration={selectedMeal.duration}
                Complexity={selectedMeal.complexity}
                Affordability={selectedMeal.affordability} />


            <View style={styles.listContainer}>

                <SubTitle>Ingredients</SubTitle>
                <List data={selectedMeal.ingredients} />

                <SubTitle>Steps</SubTitle>

                <List data={selectedMeal.steps} />
            </View>


        </View>
    </ScrollView>


}

export default MealSpecific;

const styles = StyleSheet.create({
    rootContainer: {

        marginBottom: 32
    },
    listContainer: {
        width: '80%',
        marginVertical: 10,

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: "100%",
        height: 350,

    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
        color: "white"
    },
    detailText: {
        color: 'white'
    },


})