import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../theme/colors'

export default function MusicPlayer() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.eyebrown}>Tocando agora..</Text>
            <Text style={styles.title}>EKmusic</Text>
            <Text style={styles.description}>Nosso player começa aqui</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    eyebrown: {
        color: colors.primary,
        fontSize: 11,
        fontWeight: '800',
        letterSpacing: 1.8
    },
    title: {
        marginTop: 8,
        color: colors.text,
        fontSize: 32,

    }
})