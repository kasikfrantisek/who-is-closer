import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { QuestionType, RootStackParamList } from "@/types/types";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import data from '@/data/questions.json'
import { Button } from "@/components/Button";
import { Headline } from "@/components/Headline";
import { Section } from "@/components/Section";

type Props = NativeStackScreenProps<RootStackParamList, 'Question'>;

const Question = ({ route, navigation }: Props) => {
  const [guesses, setGuesses] = useState<Record<string, number>>({});
  const [asked, setAsked] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionType | null>();
  const [textInputPlayer, setTextInputPlayer] = useState<string | null>(null);
  const { players } = route.params;
  const [closestPlayer, setClosestPlayer] = useState<string | null>(null);
  const [furthestPlayer, setFurthestPlayer] = useState<string | null>(null);

  const getRandomQuestion = () => {
    return data.questions[Math.floor(Math.random() * data.questions.length)];
  }

  useEffect(() => {
    const newGuesses: Record<string, number> = {};
    players.forEach(name => {
      newGuesses[name] = 0;
    });
    setGuesses(newGuesses);
  }, [players]);

  useEffect(() => {
    let newQuestion = getRandomQuestion();
    while (asked?.includes(newQuestion.id)) {
      newQuestion = getRandomQuestion()
    }
    setQuestion(newQuestion);
    setAsked((prev) => {
      return [...prev, newQuestion.id]
    })
  }, []);

  const handleButtonPress = (player: string) => {
    setTextInputPlayer(player);
  };

  const handleTextInputChange = (text: string) => {
    setGuesses(prevGuesses => ({
      ...prevGuesses,
      [textInputPlayer || ""]: parseFloat(text) || 0
    }));
  };

  const handleCheckButtonPress = () => {
    setTextInputPlayer(null)
    const correctAnswer = question?.answer || 0;

    const differences: Record<string, number> = {};
    players.forEach(player => {
      differences[player] = Math.abs(guesses[player] - correctAnswer);
    });

    const closestPlayer = Object.keys(differences).reduce((a, b) => (differences[a] < differences[b] ? a : b));
    const furthestPlayer = Object.keys(differences).reduce((a, b) => (differences[a] > differences[b] ? a : b));

    setClosestPlayer(closestPlayer);
    setFurthestPlayer(furthestPlayer);
  };

  return (
    <View style={styles.container}>
        <Section>
            <Headline>{question?.question}</Headline>
            <View style={styles.score}>
              <View style={styles.names}>
              {Object.entries(guesses).map(([key, value]) => (
                key === textInputPlayer ? (
                  <TextInput
                  key={key}
                  style={styles.input}
                  value={value.toString()}
                  onChangeText={handleTextInputChange}
                  keyboardType="numeric"
                  />
                  ) : (
                    <Button key={key} onPress={() => handleButtonPress(key)}>
                      {`${key}: ${value}`}
                  </Button>
                  )
                  ))}
                </View>
              <Button primary onPress={handleCheckButtonPress}>Check</Button>
            </View>
        </Section>
      {closestPlayer && furthestPlayer && (
        <Section>
            <Headline>The right answer is: {question?.answer}</Headline>
            <Text style={styles.result}>
                Winner: {closestPlayer}
            </Text>
            <Text style={styles.result}>
            Looser: {furthestPlayer}
            </Text>
            <Button primary onPress={() => {
                    navigation.replace('Question', { players });
                    }}>New question</Button>
        </Section>
      )}
    </View>
  )
};

export default Question;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7fbc8c',
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
        borderWidth: 2
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
    },
    score: {
        display: 'flex',
        flexDirection: 'row',
        gap: 28,
        alignItems: 'center'
    },
    names: {
      gap: 14
    },
    result: {
      fontWeight: "600",
      textTransform: "uppercase",
      paddingBottom: 14,
    }
});