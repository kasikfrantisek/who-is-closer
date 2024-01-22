import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const App = () => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hey what's up?</Text>
            <Link href='/next' style={styles.link} asChild>
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
            </Link>
            <StatusBar style="dark" />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#25292e',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 32,
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
