import { Headline } from "@/components/Headline";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "@/types/types";



type Props = NativeStackScreenProps<RootStackParamList, 'Hello'>;


const Hello = ({navigation}:Props) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
        setIsPressed(true);
        navigation.navigate('Next')
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    return (
        <View style={styles.container}>
            <Headline>Hey what's up?</Headline>
            <Pressable
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
            >
                <Text style={[styles.textBtn, isPressed ? styles.textBtnPressed : null]}>
                    Let's play something
                </Text>
            </Pressable>
            <StatusBar style="dark" />
        </View>
    );
};

export default Hello;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#25292e',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 12,
    },
    buttonPressed: {
        backgroundColor: '#fff',
    },
    textBtn: {
        color: '#fff',
    },
    textBtnPressed: {
        color: '#25292e',
    },
    link: {
        marginTop: 24,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 12,
    }
});
