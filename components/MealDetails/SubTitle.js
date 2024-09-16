import { Text, View, StyleSheet } from "react-native"

function SubTitle({ children }) {
    return <View style={styles.subtitleContainer}>

        <Text style={styles.subTitle} >{children}</Text>
    </View>
}


export default SubTitle

const styles = StyleSheet.create({
    subTitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },


    subtitleContainer: {
        width: "90%",
        marginVertical: 4,
        padding: 6,
        borderBlockColor: "#e2b497",
        borderBottomWidth: 2,
        marginHorizontal: "auto"


    }
})