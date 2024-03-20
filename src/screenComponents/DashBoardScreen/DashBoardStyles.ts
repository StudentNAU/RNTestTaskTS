import {StyleSheet, StatusBar} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight,
    },
    listItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    },
    text: {
        marginBottom: 20,
        padding: 6,
    },
    image: {
        width: "60%",
        height: 200,
        marginVertical: 20,
    },
    activity: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});
