import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Text from '../components/text/text';
import PlanetHeader from '../components/planet-header';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';


export default function Details({ navigation, route }) {
    const planet = route.params.planet;
    console.log("planet -->", planet)
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={true} />
            <ScrollView>
                <View style={styles.imageView}>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    imageView: {
        padding: spacing[5],
        alignItems: 'center',
        justifyContent: 'center',
    }
})