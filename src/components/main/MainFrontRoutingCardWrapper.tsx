import React from "react";
import { Dimensions, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MainFrontRoutingCardWrapper(props) {
    const { onPress = null, text = null } = props;

    return (
        <View
            style={{
                marginHorizontal: Dimensions.get("screen").width * 0.05,
                marginVertical: Dimensions.get("screen").height * 0.01,
            }}
        >
            {text && (
                <Text style={{ marginLeft: 5, fontSize: 18 }}>{text}</Text>
            )}
            <TouchableOpacity
                onPress={onPress}
                style={{
                    elevation: 3,
                    shadowOpacity: 0.15,
                    shadowColor: "#000000",
                    shadowOffset: { width: 2, height: 3 },
                    ...(onPress === null && {
                        marginVertical: 5,
                    }),

                    backgroundColor: "#ffffff",
                    borderRadius: 16,
                    padding: 32,
                }}
            >
                {props.children}
            </TouchableOpacity>
        </View>
    );
}
