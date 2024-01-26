import { ReactNode } from "react"
import { StyleSheet, Text } from "react-native"

export const Headline = ({children}:{children:ReactNode}) => {
  return  <Text style={styles.text}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 32,
    },
})