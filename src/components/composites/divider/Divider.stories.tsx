import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Center } from "native-base";
import DividerText from "./DividerText";

import { NativeBaseProvider } from "../../NativeBaseProvider";
import { PixelRatio } from "react-native";
import { number, text } from "@storybook/addon-knobs";
import Text from "../../primitives/text/Text";
import Button from "../../primitives/button/Button";

console.log(PixelRatio.getPixelSizeForLayoutSize(18));

storiesOf("Divider", module).add("Divider Text", () => {
    return (
        <>
            <NativeBaseProvider>
                <Center flex={1}>
                    <Button google={"blue"}>
                        {text("button Text", "Google로 시작하기")}
                    </Button>
                    <DividerText
                        size={number("size", 1)}
                        text={text("text", "OR")}
                        _text={{ mx: number("textMargin", 4) }}
                    />
                    <Text>
                        {text("bottom Text", "서비스 약관에 동의해주세요.")}
                    </Text>
                </Center>
            </NativeBaseProvider>
        </>
    );
});
