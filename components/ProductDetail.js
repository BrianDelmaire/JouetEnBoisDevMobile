import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import {Button} from "react-native-web";

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.numbro = require("numbro");
    }
    render() {
        return (
            <View style={styles.main_container}>
                <Text style={{fontSize: '24px'}}>{this.props.navigation.state.params.nameP} </Text>
                <Image style={{width:250, height: 250, margin: 5, marginTop: 10}}
                       source={{uri: this.props.navigation.state.params.img}}/>
                <Text style={{ fontSize: 16, color: 'gray'}}>
                    {this.numbro(this.props.navigation.state.params.price).format({
                        mantissa: 2
                    })
                    } €
                </Text>
                <Text>Description: </Text>
                <Text style={{marginTop: 5}}>{this.props.navigation.state.params.description}</Text>

                <Button title="Ajouter au panier" color="#5c5c8a" onPress={() => this._addToCart(this.props.navigation.state.params.nameP, this.props.navigation.state.params.price, this.props.navigation.state.params.img, this.props.navigation.state.params.monPanier)}/>

            </View>
        )
    }

    _addToCart(name, price, img, panier) {
        let tab = {name: name, price: price, img: img};
        panier.push(tab);
        console.log(panier);

    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default ProductDetail
