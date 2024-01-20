import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";

const Next = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Good to see ya!</Text>
            <StatusBar style="dark" />
        </View>
    );
};

export default Next;

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
});
