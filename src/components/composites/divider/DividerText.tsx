import React, { forwardRef, memo, useRef } from "react";
import {
    Divider,
    HStack,
    IDividerProps,
    ITextProps,
    Text,
    theme,
} from "native-base";

export interface IDividerTextProps extends IDividerProps {
    text: string;
    _text?: ITextProps;
}

function DividerText(props: IDividerTextProps, ref: any) {
    const refDivider = useRef(ref);
    // useEffect(() => {}, [refDivider]);

    return (
        <HStack alignItems="center" justifyContent="center">
            <Divider ref={refDivider} {...props} />
            <Text
                userSelect={"none"}
                fontSize="xs"
                color={theme.colors.dark[400]}
                {...props._text}
            >
                {props.text}
            </Text>
            <Divider ref={refDivider} {...props} />
        </HStack>
    );
}

export default memo(forwardRef(DividerText));
