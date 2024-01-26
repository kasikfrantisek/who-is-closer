import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text} from "react-native";
import { RootStackParamList } from "@/types/types";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';


type Props = NativeStackScreenProps<RootStackParamList, 'Question'>;

const Question = ({route}: Props) => {
    const [guesses, setGuesses] = useState<Record<string, number>>({});

    useEffect(() => {
        const newGuesses: Record<string, number> = {};
        route.params.forEach(name => {
            newGuesses[name] = 0;
        });
        setGuesses(newGuesses);
    }, [route.params]);

    return (
        <View style={styles.container}>
            {Object.entries(guesses).map(([key, value]) => (
                <Text key={key}>
                    {`${key}: ${value}`}
                </Text>
            ))}
        </View>
    )
};

export default Question;

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