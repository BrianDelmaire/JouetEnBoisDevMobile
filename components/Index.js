import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import {Button} from "react-native-web";
import {StatusBar} from "expo-status-bar";

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{marginBottom: "4%", textAlign: 'center', fontWeight: 900}}>Jouet en Bois</Text>
                <Image style={styles.logo} source={{uri: 'https://afa-multimedia.com/wp-content/uploads/2015/10/IMG_0419_20_21_tonemapped.jpg',}}/>
                <Button style={{height:50}} title="Accéder à la Boutique" onPress={() => this.props.navigation.navigate("Products")}/>
                <Text style={{marginTop: "4%", textAlign:'center'}}>Produit par Edgar Jean-Pierre, Mathieu Courouble, Florent Mullet, Brian Delmaire, Grégoire Dujardin</Text>
                <StatusBar style="auto" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        width: "75%",
        height: "75%",
        marginBottom: "4%",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "1%",
    },
})

export default Index
