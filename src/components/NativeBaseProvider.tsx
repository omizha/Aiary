import React from "react";
import {
    extendTheme,
    NativeBaseProvider as Provider,
    NativeBaseProviderProps,
} from "native-base";
import ButtonTheme from "./primitives/button/Button.theme";
import { InputTheme } from "./primitives/textInput/TextInput.theme";

export const NativeBaseProvider = (props: NativeBaseProviderProps) => {
    const theme = extendTheme({
        components: {
            Button: ButtonTheme,
            Input: InputTheme,
        },
    });

    return <Provider theme={theme} {...props} />;
};
