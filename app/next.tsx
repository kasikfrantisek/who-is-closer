import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableWithoutFeedback, Keyboard, Pressable } from "react-native";
import { Headline } from "@/components/Headline";
import { Button } from "@/components/Button";
import { RootStackParamList } from "@/types/types";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';


type Props = NativeStackScreenProps<RootStackParamList, 'Next'>;

const Next = ({navigation}: Props) => {
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
                <Headline>Good to see ya!</Headline>
                <View style={styles.form}>
                    <TextInput autoCorrect={false} value={value} onChangeText={(newValue) => setValue(newValue)} style={styles.input} placeholder="Who is gonna play?" inputMode="text" placeholderTextColor="#000" onSubmitEditing={() => onChange(value, true)} />
                    <View style={styles.btnsContainer}>
                        <Button onPress={() => onChange(value, true)} icon="add">Add</Button>
                        {players.length > 0 && 
                            <Button onPress={() => {
                                navigation.navigate('Question', players)
                            }}>Lets do it</Button>
                        }
                    </View>
                </View>
                <View style={styles.tagContainer}>
                    {players.map((item) => (
                        <Button key={item} onPress={() => removeName(item)} icon="close">{item}</Button>
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
    input: {
        backgroundColor: '#fff',
        width: 200,
        height: 30,
        borderRadius: 12,
        paddingHorizontal: 5,
    },
    tagContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 10,
        marginTop: 24,
    },
    btnsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,

    },
    form: {
        marginTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
    }
});