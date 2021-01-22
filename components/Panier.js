import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native'
import {Button} from "react-native-web";

class Panier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: this.props.navigation.state.params.monPanier,
            isLoading: false
        }
        this.numbro = require("numbro");
        // console.log(this.state.dataSource)
        // this.total = this.state.dataSource.forEach(p => p.price);
        this.total = 0;
        this.state.dataSource.forEach(p => {
            this.total += parseInt(p.price);
        });
        console.log(this.total);
    }
    renderItem = ({item}) => {
        return(
            <React.Fragment>
                <View>
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3}}>

                    <Image style={{width:50, height: 50, margin: 5}}
                           source={{uri: item.img}}/>
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 5}}>

                        <Text style={{fontSize: 18, marginBottom: 15}}>
                            {item.name}
                        </Text>
                        <Text style={{ fontSize: 16, color: 'gray'}}>
                            {this.numbro(item.price).format({
                                mantissa: 2
                            })
                            } €
                        </Text>
                    </View>

                </TouchableOpacity>
                </View>

            </React.Fragment>

        )
    }

    renderSeparator = () => {
        return (
            <View style={{height: 1, width: '100%', backgroundColor: 'gray'}}>
            </View>
        )
    }

    render () {

        return (
            this.state.isLoading
                ?
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size="large" color="#330066" animating/>
                </View>
                :
                <View style={styles.container}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        keyExtractor = { (item, index) => index.toString() }
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                    <View>
                        <Text style={{fontSize: 21, padding: 15, textAlign: 'right' }}> Total : {this.total} €</Text>
                    </View>
                </View>

        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    }
})

export default Panier
