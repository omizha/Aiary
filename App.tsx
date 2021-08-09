import "react-native-gesture-handler";
import React from "react";
import Routes from "./src/navigation";

import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { NativeBaseProvider } from "native-base";

import { StatusBar } from "expo-status-bar";

export default function App() {
    return (
        <>
            <NativeBaseProvider>
                <IconRegistry icons={EvaIconsPack} />

                <ApplicationProvider {...eva} theme={eva.light}>
                    <ActionSheetProvider>
                        <Routes />
                    </ActionSheetProvider>
                </ApplicationProvider>

                <StatusBar style="light" />
            </NativeBaseProvider>
        </>
    );
}
