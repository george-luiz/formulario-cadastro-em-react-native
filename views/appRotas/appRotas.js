import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cadastro from "../cadastro/cadastro";

const Stack = createStackNavigator();

export default function AppRotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: "center",
                    headerTitleStyle: {color: "white"},
                    headerStyle: {backgroundColor: "#4169E1"}
                }}
            >
                <Stack.Screen name="Cadastro" component={Cadastro}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}