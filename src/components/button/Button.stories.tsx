import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Center } from "native-base";
import { number, radios, text } from "@storybook/addon-knobs";

import { NativeBaseProvider } from "../NativeBaseProvider";
import { PixelRatio } from "react-native";
import Button, { ButtonProps } from ".";

const btnGoogleName = "Theme";
const btnGoogleOptions = {
    Blue: "blue",
    White: "white",
};
const btnGoogleDefaultValue = "white";

console.log(PixelRatio.getPixelSizeForLayoutSize(18));

storiesOf("Button", module)
    .add("Default Button", () => {
        return (
            <>
                <NativeBaseProvider>
                    <Center flex={1}>
                        <Button>{text("text", "Button")}</Button>
                    </Center>
                </NativeBaseProvider>
            </>
        );
    })
    .add("Outline Button", () => {
        return (
            <>
                <NativeBaseProvider>
                    <Center flex={1}>
                        <Button
                            variant="outline"
                            rounded={number("rounded", 100)}
                        >
                            {text("text", "이메일로 로그인 / 시작하기")}
                        </Button>
                    </Center>
                </NativeBaseProvider>
            </>
        );
    })
    .add("Google Login Button", () => {
        return (
            <>
                <NativeBaseProvider>
                    <Center flex={1}>
                        <Button
                            google={
                                radios(
                                    btnGoogleName,
                                    btnGoogleOptions,
                                    btnGoogleDefaultValue
                                ) as ButtonProps["google"]
                            }
                            width={number("width", 230)}
                        >
                            {text("text", "Google로 시작하기")}
                        </Button>
                    </Center>
                </NativeBaseProvider>
            </>
        );
    });
