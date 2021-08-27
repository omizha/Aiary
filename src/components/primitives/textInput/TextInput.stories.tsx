import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Center, Input } from "native-base";
import { text } from "@storybook/addon-knobs";

import { NativeBaseProvider } from "../../NativeBaseProvider";
import { PixelRatio } from "react-native";

console.log(PixelRatio.getPixelSizeForLayoutSize(18));

storiesOf("TextInput", module)
    .add("Default TextInput", () => {
        return (
            <>
                <NativeBaseProvider>
                    <Center flex={1}>
                        <Input placeholder={text("text", "아이디")} />
                    </Center>
                </NativeBaseProvider>
            </>
        );
    })
    .add("Underline TextInput", () => {
        return (
            <>
                <NativeBaseProvider>
                    <Center flex={1}>
                        <Input
                            placeholder={text("text", "아이디")}
                            variant={"underlined"}
                        />
                    </Center>
                </NativeBaseProvider>
            </>
        );
    });
