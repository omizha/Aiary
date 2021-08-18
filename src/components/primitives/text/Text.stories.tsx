import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Center, Link } from "native-base";
import { text } from "@storybook/addon-knobs";
import Text from "./Text";

import { NativeBaseProvider } from "../../NativeBaseProvider";
import { PixelRatio } from "react-native";

console.log(PixelRatio.getPixelSizeForLayoutSize(18));

storiesOf("Text", module)
    .add("Default Text", () => {
        return (
            <>
                <NativeBaseProvider>
                    <Center flex={1}>
                        <Text>
                            {text("Text", "서비스 약관에 동의해주세요.")}
                        </Text>
                    </Center>
                </NativeBaseProvider>
            </>
        );
    })
    .add("Underline Text", () => {
        return (
            <>
                <NativeBaseProvider>
                    <Center flex={1}>
                        <Text underline>
                            {text("Text", "아이디나 비밀번호를 잊으셨나요?")}
                        </Text>
                    </Center>
                </NativeBaseProvider>
            </>
        );
    })
    .add("Nested Text", () => {
        return (
            <>
                <NativeBaseProvider>
                    <Center flex={1}>
                        <Text>
                            간편로그인시{" "}
                            <Link>
                                <Text underline>서비스이용약관</Text>
                            </Link>
                            과{" "}
                            <Link>
                                <Text underline>개인정보보호정책</Text>
                            </Link>
                            에 동의하게 됩니다.
                        </Text>
                    </Center>
                </NativeBaseProvider>
            </>
        );
    });
