import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
    createStackNavigator,
    StackNavigationOptions,
    TransitionPresets,
} from "@react-navigation/stack";

import MainIndex from "../screens/main/MainIndex";
import DiaryIndex from "../screens/diary";

function Routes() {
    const Stack = createStackNavigator();

    const TransitionScreenOptions = {
        ...TransitionPresets.SlideFromRightIOS,
    };

    const screenOption: StackNavigationOptions = {
        headerShown: false,
    };

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={TransitionScreenOptions}>
                    <Stack.Screen
                        name="main"
                        component={MainIndex}
                        options={screenOption}
                    />
                    <Stack.Screen
                        name="diary"
                        component={DiaryIndex}
                        options={screenOption}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default React.memo(Routes);
