import React from "react";
import { Image } from "react-native";

export default function ProfileImage(props) {
    const { profilePic = "", style, blurRadius = 0 } = props;

    if (blurRadius) {
        return (
            <Image
                style={style}
                source={{ uri: profilePic }}
                blurRadius={blurRadius}
            />
        );
    }

    return <Image source={{ uri: profilePic }} style={props.style} />;
}
