import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useRef } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const Next = () => {
    const [players, setPlayers] = useState<string[] | []>([]);
    const [value, setValue] = useState('');

    const onChange = (text:string) => {
        if(text.includes(',') || text.includes(' ')){
            setPlayers((prev) => {
                return [...prev, text.slice(0, -1)]
            })
            setValue('');
        }
    }

    useEffect(() => {
        onChange(value);
    }, [value])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Good to see ya!</Text>
            <View>
                <TextInput autoCorrect={false} value={value} onChangeText={(newValue) => setValue(newValue)} style={styles.input} placeholder="Who is gonna play?" inputMode="text" placeholderTextColor="#000"/>
            </View>
            <View style={styles.tagContainer}>
                {players.map((item) => (
                    <Text key={item} style={styles.tag}>{item}</Text>
                ))}
            </View>
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
    input: {
        marginTop: 24,
        backgroundColor: '#fff',
        width: 200,
        height: 30,
        borderRadius: 12,
        paddingHorizontal: 5,
    },
    tag: {
        color: '#fff'
    },
    tagContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 10,
        marginTop: 24,
    }
});