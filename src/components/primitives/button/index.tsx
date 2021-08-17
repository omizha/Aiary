import React, { memo, useEffect, useRef } from "react";

import {
    Button as ButtonNativeBase,
    IButtonProps,
    IBoxProps,
} from "native-base";
import { PixelRatio } from "react-native";
import { ResponsiveValue } from "styled-system";

import Btn_google_dark_normal_ios from "../../../assets/google/btn_google_dark_normal_ios";
import Btn_google_light_normal_ios from "../../../assets/google/btn_google_light_normal_ios";
import { IPressableProps } from "native-base/lib/typescript/components/primitives";

export interface ButtonProps extends IButtonProps {
    google?: ResponsiveValue<"white" | "blue">;
    _pressable?: IPressableProps;
    _box?: IBoxProps;
}

function Button(props: ButtonProps) {
    const refButton = useRef(null);

    useEffect(() => {
        if (refButton) {
            const textBox = refButton.current.firstChild.lastChild;

            if (props.google) {
                refButton.current.style["justifyContent"] = "flex-start";
                textBox.style["flex"] = 1;
                textBox.style["text-align"] = "center";
            }

            if (props._pressable) {
                refButton.current.style = {
                    ...refButton.current.style,
                    ...props._pressable,
                };
            }

            if (props._box) {
                textBox.style = { ...textBox.style, ...props._box };
            }

            console.log(props);
            console.log(props._pressable);
            console.log(refButton);
        }
    }, [refButton]);

    switch (true) {
        case !!props.google:
            return (
                <ButtonNativeBase
                    paddingLeft={0}
                    paddingRight={`${PixelRatio.getPixelSizeForLayoutSize(
                        24 + 8
                    )}px`}
                    height={`${PixelRatio.getPixelSizeForLayoutSize(40)}px`}
                    _stack={{ flex: 1, space: 6 }}
                    shadow={3}
                    backgroundColor={
                        props.google === "blue" ? "#4285F4" : "#FFFFFF"
                    }
                    startIcon={
                        props.google === "blue" ? (
                            <Btn_google_dark_normal_ios />
                        ) : (
                            <Btn_google_light_normal_ios />
                        )
                    }
                    _text={{
                        color: props.google === "blue" ? "#FFFFFF" : "#757370",
                        fontSize: ["14px"],
                    }}
                    minWidth={230}
                    ref={refButton}
                    {...props}
                />
            );

        default:
            return <ButtonNativeBase ref={refButton} {...props} />;
    }
}

export default memo(Button);
