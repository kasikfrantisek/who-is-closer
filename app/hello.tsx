import { Headline } from "@/components/Headline";
import { View, StyleSheet, Text } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "@/types/types";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

type Props = NativeStackScreenProps<RootStackParamList, 'Hello'>;

const Hello = ({navigation}:Props) => {
    return (
        <View style={styles.container}>
            <Section>
                <Headline>Who is closer?</Headline>
                <Text style={styles.text}>This game is pretty simple...
                    You will be presented a question, like "How far is the moon?" and each player will guess some number.
                    Player with closest guess is the winner.
                </Text>
                <Button onPress={() => {navigation.navigate('Next')}} primary>
                Let's play something
                </Button>
            </Section>
        </View>
    );
};

export default Hello;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#a388ee',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        paddingBottom: 30,
        textAlign: 'center'
    }
});
