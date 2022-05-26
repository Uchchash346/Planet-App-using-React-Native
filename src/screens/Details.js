import { View, SafeAreaView, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Text from '../components/text/text';
import PlanetHeader from '../components/planet-header';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg';


export default function Details({ navigation, route }) {
    const planet = route.params.planet;
    const { name, description } = planet;
    console.log("planet -->", planet);

    const renderImage = (name) => {
        switch (name) {
            case 'mercury':
                return <MercurySvg />
            case 'earth':
                return <EarthSvg />
            case 'jupiter':
                return <JupiterSvg />
            case 'mars':
                return <MarsSvg />
            case 'neptune':
                return <NeptuneSvg />
            case 'saturn':
                return <SaturnSvg />
            case 'uranus':
                return <UranusSvg />
            case 'venus':
                return <VenusSvg />
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={true} />
            <ScrollView>
                <View style={styles.imageView}>
                    {renderImage(name)}
                </View>
                <View style={styles.detailsView}>
                    <Text preset="h1" style={styles.name}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Pressable style={styles.source}>
                        <Text>Source: </Text>
                        <Text preset="h4" style={styles.wikipedia}>Wikipedia</Text>
                    </Pressable>
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
        marginTop: spacing[8],
        padding: spacing[5],
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailsView: {
        marginTop: spacing[10],
        marginHorizontal: spacing[6],
        alignItems: 'center',
    },
    name: {
        textTransform: "uppercase",
        textAlign: "center",
    },
    description: {
        textAlign: "center",
        marginTop: spacing[5],
        lineHeight: 21,
    },
    source: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: spacing[5],
    },
    wikipedia: {
        textDecorationLine: "underline",
        fontWeight: "bold",
    }
})