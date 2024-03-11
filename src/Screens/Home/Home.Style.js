import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: 'red'
        backgroundColor: 'white'
    },
    Title: {
        marginTop: 25,
        // backgroundColor: "green",
        fontSize: 20,
        fontWeight: "500"
    },
    IntOrgs: {
        flex: 1,
        // backgroundColor: "yellow",
        // justifyContent: 'center'
    },
    IntOrgsTitle: {
        textAlign: "center",
        marginVertical: 10,
        fontSize: 20,
        fontWeight:  "400"
    },
    IntOrgsList: {
        flex: 1
    }
})