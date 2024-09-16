import { StyleSheet, Text, View } from "react-native"

function MealDetails({
    Duration,
    Complexity,
    Affordability, style, textStyle }) {
    return <View style={[styles.details, style]}>
        <Text style={[styles.description, textStyle]}>{Duration} Min</Text>
        <Text style={[styles.description, textStyle]}>{Complexity.toUpperCase()}</Text>
        <Text style={[styles.description, textStyle]}>{Affordability.toUpperCase()}</Text>
    </View>
}

export default MealDetails


const styles = StyleSheet.create({
    description: {
        fontSize: 15,
        color: 'grey',
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: "semibold"

    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    }
})