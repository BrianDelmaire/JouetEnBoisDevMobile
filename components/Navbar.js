import React from 'react'
import {StyleSheet, View, Button, Text, TextInput, TouchableOpacity} from 'react-native'

import * as FaIcons from 'react-icons/fa';
import {BrowserRouter, Link} from "react-router-dom";
import * as AiIcons from "react-icons/ai";

class Search extends React.Component {
    _displayDetailForFilm = (idFilm) => {
        console.log("Display film with id " + idFilm)
    }
    _displayPanier = () => {
        console.log("test")
        this.props.navigation.navigate("Panier", {monPanier: this.panier});
    }
    // onClick={() => this._displayPanier()}>

    render() {
        return (
            <View style={{marginTop: 2}}>
                <View style={{flexDirection: 'row'}}>
                    <TextInput style={styles.TextInput} placeholder="Rechercher un article..."/>
                    <Button style={{height:20}} title="🔎"/>
                    <View style={{flexDirection: 'row', paddingRight: 10}}>
                        <BrowserRouter>
                            <Link to='#' >
                                <FaIcons.FaShoppingCart onClick={() => this._displayPanier()}/>
                            </Link>
                            <Link to='#'>
                                <AiIcons.AiOutlineImport/>
                            </Link>
                        </BrowserRouter>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    TextCenter: {
        textAlign: 'center',
    },
    TextInput: {
        height: 30,
        borderWidth: 1,
        paddingLeft: 5,
    },
})

export default Search
