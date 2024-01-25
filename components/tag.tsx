import { Pressable, StyleSheet, Text, View } from "react-native"

type Props = {
    onPress: (label: string) => void;
    label: string;
}

export const Tag = ({onPress, label}: Props) => {
    return (
        <View>
            <Pressable style={styles.btn} onPress={() => onPress(label)}>
                <Text style={styles.tag}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    tag: {
        color: '#fff'
    },
    btn: {
       borderColor: '#fff',
       paddingHorizontal: 12,
       paddingVertical: 6,
       borderWidth: 2,
       borderRadius: 24,
    }
});