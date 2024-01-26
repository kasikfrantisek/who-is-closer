import { Ionicons } from "@expo/vector-icons"
import { ReactNode } from "react";
import { Pressable, StyleSheet, Text } from "react-native"

type Props = {
    onPress: () => void;
    children: ReactNode;
    icon?: keyof typeof Ionicons.glyphMap
}

export const Button = ({onPress, children, icon}: Props) => {
   return (
        <Pressable style={styles.btn} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
            {icon && 
                <Ionicons name={icon} size={16} color="#fff" />
            }
        </Pressable>
    )
    
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 16,
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 3
    }
});