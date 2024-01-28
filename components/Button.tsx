import { ReactNode } from "react";
import { Pressable, StyleSheet, Text } from "react-native"

type Props = {
    onPress: () => void;
    children: ReactNode;
    primary?: boolean;
    tag?: boolean;
}

export const Button = ({onPress, children, primary, tag}: Props) => {
    if(tag){
        return (
            <Pressable style={styles.tag} onPress={onPress}>
                <Text style={styles.text}>{children}</Text>
                <Text style={styles.close}>X</Text>
            </Pressable>
        )
    }
   return (
        <Pressable style={primary ? styles.primary : styles.btn} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    )
    
}

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontWeight: "600",
        textTransform: "uppercase"
    },
    close: {
        color: '#000',
        fontWeight: "600",
        textTransform: "uppercase"
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {width: 3, height: 4},
        shadowOpacity: 100,
        shadowRadius: 0
    },
    primary: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#90ee90',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {width: 3, height: 4},
        shadowOpacity: 100,
        shadowRadius: 0
    },
    tag: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#ffd858',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {width: 3, height: 4},
        shadowOpacity: 100,
        shadowRadius: 0
    },
});