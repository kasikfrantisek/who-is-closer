import { ReactNode } from "react"
import { StyleSheet, View } from "react-native"

type Props = {
    children: ReactNode
}

export const Section = ({children}: Props) => {
    return(
        <View style={styles.textContainer}>
            {children}
        </View>
    )
}


const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {width: 3, height: 4},
        shadowOpacity: 100,
        shadowRadius: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginHorizontal: 20,
        padding: 20
    },
})