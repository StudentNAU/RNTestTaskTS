import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    statContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        width: '100%',
        marginBottom: 5,
    },
    statName: {
        fontWeight: 'bold',
    },
    name: {
        margin: 10,
    },
    image: {
        borderColor: "black",
        width: 200,
        height: 200
    },
    activity: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});