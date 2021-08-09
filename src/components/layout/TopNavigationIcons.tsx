import React from "react";
import { Text, View } from "react-native";
import { Icon } from "@ui-kitten/components";
import ProfileImage from "../layout/ProfileImage";

export default function TopNavigationIcon({ icon, color }) {
    switch (icon) {
        case "complete":
            return <Complete color={color} />;
        case "profile":
            return <Profile color={color} />;
        case "profileFront":
            return <ProfileFront color={color} />;
        default:
            return <Icons name={icon} color={color} />;
    }
}

const UIKitten = {
    close: "close-outline",
    back: "chevron-left-outline",
    more: "more-horizontal-outline",
    message: "message-circle-outline",
    save: "download-outline",
};

const Icons = (props) => {
    const { name, color } = props;

    return (
        <Icon
            {...props}
            name={UIKitten[name]}
            fill={color}
            style={{
                width: 32,
                height: 32,
            }}
        />
    );
};

const Complete = ({ color }) => {
    return (
        <Text
            style={{
                fontSize: 16,
                marginRight: 10,
                fontWeight: "500",
                color,
            }}
        >
            완료
        </Text>
    );
};

const Profile = ({ color }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
            }}
        >
            <ProfileImage
                blurRadius={0}
                profilePic={"https://picsum.photos/200"}
                style={{ width: 40, height: 40, borderRadius: 20 }}
            />
            <Text
                style={{
                    color: color,
                    fontSize: 18,
                    fontWeight: "500",
                    marginLeft: 7,
                }}
            >
                오리너구리
            </Text>
        </View>
    );
};

const ProfileFront = ({ color }) => {
    return (
        <View
            style={{
                alignItems: "baseline",
                flexDirection: "row",
                marginStart: 10,
            }}
        >
            <View>
                <Text
                    style={{
                        color: color,
                        fontSize: 15,
                        marginBottom: 2,
                    }}
                >
                    안녕하세요
                </Text>
                <Text
                    style={{
                        color: color,
                        fontSize: 20,
                        fontWeight: "bold",
                    }}
                >
                    오리너구리님
                </Text>
            </View>
        </View>
    );
};
