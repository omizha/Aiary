import { Flex } from "native-base";
import React, { forwardRef, memo } from "react";
import Button from "../../components/primitives/button/Button";

function AuthMain(props: any, ref: any) {
    return (
        <Flex marginX={10}>
            <Button variant="outline" rounded={100}>
                이메일로 로그인 / 회원가입
            </Button>
        </Flex>
    );
}

export default memo(forwardRef(AuthMain));
