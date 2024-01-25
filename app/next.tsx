import { Tag } from "@/components/tag";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Next = () => {
    const [players, setPlayers] = useState<string[] | []>([]);
    const [value, setValue] = useState('');

    const onChange = (text:string, submit?:boolean) => {
        if(submit && text) {
            setPlayers((prev) => {
                return [...prev, text]
            })
            setValue('');
        };
        
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

    const removeName = (label: string) => {
        setPlayers((prev: string[]) => {
            prev.splice(prev.indexOf(label), 1)
            return [...prev]
        })
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Text style={styles.text}>Good to see ya!</Text>
                <View>
                    <TextInput autoCorrect={false} value={value} onChangeText={(newValue) => setValue(newValue)} style={styles.input} placeholder="Who is gonna play?" inputMode="text" placeholderTextColor="#000" onSubmitEditing={() => onChange(value, true)} />
                    <Pressable style={styles.addBtn} onPress={() => onChange(value, true)}>
                        <Text style={styles.text}>Add</Text>
                        <Ionicons name="add" size={32} color="#fff" />
                    </Pressable>
                </View>
                <View style={styles.tagContainer}>
                    {players.map((item) => (
                        <Tag key={item} label={item} onPress={removeName} />
                    ))}
                </View>
                <StatusBar style="dark" />
            </View>
        </TouchableWithoutFeedback>

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
    },
    addBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6
    }
});