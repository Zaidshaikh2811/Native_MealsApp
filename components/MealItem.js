import { Image, Pressable, Text, View, StyleSheet, Platform } from "react-native"
import MealDetails from "./MealsDetails"
import { useNavigation } from "@react-navigation/native"


function MealItem({ id, title, imageUrl, Duration, Complexity, Affordability }) {

    const navigation = useNavigation();

    const NavigateMeal = () => {
        return navigation.navigate('Meal', {
            id: id
        })
    }


    return <View style={styles.mealItem}>
        <Pressable style={({ pressed }) => [pressed ? styles.pressed : null]} onPress={NavigateMeal}>
            <View>

                <Image style={styles.image} source={{ uri: imageUrl }} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <MealDetails

                Duration={Duration}
                Complexity={Complexity}
                Affordability={Affordability} />
        </Pressable>
    </View>
}

export default MealItem

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    description: {
        fontSize: 15,
        color: 'grey',
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: "semibold"

    },
    pressed: {
        opacity: 0.90
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "white",
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS == 'android' ? 'hidden' : "visible"

    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    }
})