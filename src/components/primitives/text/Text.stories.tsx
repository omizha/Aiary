import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Center, Input, Text } from "native-base";
import { text } from "@storybook/addon-knobs";

import { NativeBaseProvider } from "../../NativeBaseProvider";
import { PixelRatio } from "react-native";

console.log(PixelRatio.getPixelSizeForLayoutSize(18));

storiesOf("Text", module)
    .add("Default Text", () => {
        return (
            <>
                <NativeBaseProvider>
                    <Center flex={1}>
                        <Text>서비스 약관에 동의해주세요.</Text>
                    </Center>
                </NativeBaseProvider>
            </>
        );
    })
    /**
     * @TODO: underline이 text 밑에 위치하도록 해야합니다.
     */
    .add("Underline Text", () => {
        return (
            <>
                <NativeBaseProvider>
                    <Center flex={1}>
                        <Text underline>아이디나 비밀번호를 잊으셨나요?</Text>
                    </Center>
                </NativeBaseProvider>
            </>
        );
    });
