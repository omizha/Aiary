import React from "react";
import {
    extendTheme,
    NativeBaseProvider as Provider,
    NativeBaseProviderProps,
} from "native-base";
import ButtonTheme from "./button/Button.theme";

export const NativeBaseProvider = (props: NativeBaseProviderProps) => {
    const theme = extendTheme({
        components: {
            Button: ButtonTheme,
        },
    });

    return <Provider theme={theme} {...props} />;
};
