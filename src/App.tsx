import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import DashBoardScreen from "./screenComponents/DashBoardScreen/DashBoardScreen";
import DetailScreen from "./screenComponents/DetailScreen/DetailScreen";

const Stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer children={
            <Stack.Navigator initialRouteName={"Home"}>
                <Stack.Screen name={"Home"} component={DashBoardScreen}/>
                <Stack.Screen name={"About"} component={DetailScreen}/>
            </Stack.Navigator>
        }
        />
    )
}