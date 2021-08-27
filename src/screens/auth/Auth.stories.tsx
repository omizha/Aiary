import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Center } from "native-base";

import { PixelRatio } from "react-native";
import { number, text } from "@storybook/addon-knobs";
import { NativeBaseProvider } from "../../components/NativeBaseProvider";
import Button from "../../components/primitives/button/Button";
import DividerText from "../../components/composites/divider/DividerText";
import Text from "../../components/primitives/text/Text";
import AuthMain from "./AuthMain";

console.log(PixelRatio.getPixelSizeForLayoutSize(18));

storiesOf("Auth Screen", module).add("Main", () => {
    return (
        <>
            <NativeBaseProvider>
                <AuthMain />
            </NativeBaseProvider>
        </>
    );
});
