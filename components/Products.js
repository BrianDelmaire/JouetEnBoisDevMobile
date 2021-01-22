import React from 'react'
import {
    AppRegistry,
    StyleSheet,
    Button,
    Text,
    View,
    FlatList,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    TextInput
} from 'react-native';
import ProductDetail from "./ProductDetail";
import Panier from "./Panier";

class Products extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource: [],
            isLoading: true,
            isgo: true
        }
        this.numbro = require("numbro");
        // this._getProducts();
        this.img = {
            1: "https://www.cdiscount.com/pdt2/1/7/7/1/300x300/auc0001103941177/rw/poupon-cassq-sammy-train-a-vapeur-jouet-en-bois-c.jpg",
            2: "https://i.pinimg.com/736x/81/06/a0/8106a06c31bcdbf7a5337c971719b2c0.jpg",
            3: "https://i.pinimg.com/originals/4f/f5/11/4ff5117b3b4b4a9643f4dca822ee900c.jpg",
            4: "https://i.pinimg.com/736x/a9/1e/1d/a91e1dc56c008131691ec2cf5737d4ed.jpg",
            5: "https://i.pinimg.com/originals/ed/66/c5/ed66c5fda71a5ff3f7c7dd4ab0e7eb97.jpg",
            6: "https://i.etsystatic.com/6290316/r/il/28d430/1265043464/il_570xN.1265043464_2i99.jpg",
            7: "https://i.etsystatic.com/22724950/d/il/683cab/2803194699/il_340x270.2803194699_6idx.jpg?version=0",
            8: "https://img.kibodio.com/large/07/070cd05b09a9cba0afae836751a98570.jpeg"
        }
        this.panier = [];

    }
//
    renderItem = ({item}) => {
        return(
            <React.Fragment>
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3}}
                              onPress={() => this._displayDetailForProduct(this.img[item.id], item.name, item.price, item.description)}>

                <Image style={{width:100, height: 100, margin: 5}}
                       source={{uri: this.img[item.id]}}/>
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
            </React.Fragment>
        )
    }

    renderSeparator = () => {
        return (
            <View style={{height: 1, width: '100%', backgroundColor: 'gray'}}>
            </View>
        )
    }

    componentDidMount(){
        this._getProducts();

    }

    render () {
        return (
            this.state.isLoading
                ?
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size="large" color="#330066" animating/>
                </View>
                :
                <View>
                <View style={{flexDirection: 'row'}}>
                    <TextInput style={styles.TextInput} placeholder="Rechercher un article..."/>
                    <Button style={{height:20}} title="🔎"/>
                    <Button title="Panier" onPress={() => this._displayPanier()}/>
                    <Button title="LogIn" onPress={() => this.props.navigation.navigate("Login")}/>

                </View>
                <View style={styles.container}>


                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        keyExtractor = { (item, index) => index.toString() }
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
                </View>
        );
    }

    _getDataProduct = async (response) => {
        let headers = new Headers();
        headers.append("Authorization", "Basic R0NFUjNIRjdJOE1HUFJSRk5WVDRBTENVUFRGR1pUWTQ6");
        headers.append("Cookie", "PrestaShop-4bc70bc50aed6ee68deba88c9e5ad373=def50200c03bc8eae97ea04b74ed6a9c4978ff1bf2f7256b0d7c1ca5fa5878265d2d3d1f435a97dd434c16747623df57c109ebde4ce26243953ebe6f3cd95e771d95ff4c89880dc7440fc5d724716866091bffcfc66017400913e84698305b253d0e74dd256d2bb83d5663f8cd3fb1751319c3d89b78687c401d849928e198a20ea86fc131d37846d89c527304d5b420dfe032f31ac6df3e02f9f06ebe20c150b6fde3ea7eeba042ef826b9339fdb57de16ee550a7f14a0c557b922ebacb854fd8819fa69e739ced836cc3fdc9f78e1599794393da22a304ce");

        let requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };
        let res = []
        response.products.forEach((p) => {
            fetch(`http://localhost:80/prestashopV2/api/products/${p.id}&output_format=JSON`, requestOptions)
                .then((response) => response.json())
                .then((responseJson) => {
                    res.push(responseJson.product)
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally((responseJson) => {
                    this.setState({
                        dataSource: res,
                        isLoading: false

                    });
                })
        });
    }
    _getProducts = async () => {
        let headers = new Headers();
        headers.append("Authorization", "Basic R0NFUjNIRjdJOE1HUFJSRk5WVDRBTENVUFRGR1pUWTQ6");
        headers.append("Cookie", "PrestaShop-4bc70bc50aed6ee68deba88c9e5ad373=def50200c03bc8eae97ea04b74ed6a9c4978ff1bf2f7256b0d7c1ca5fa5878265d2d3d1f435a97dd434c16747623df57c109ebde4ce26243953ebe6f3cd95e771d95ff4c89880dc7440fc5d724716866091bffcfc66017400913e84698305b253d0e74dd256d2bb83d5663f8cd3fb1751319c3d89b78687c401d849928e198a20ea86fc131d37846d89c527304d5b420dfe032f31ac6df3e02f9f06ebe20c150b6fde3ea7eeba042ef826b9339fdb57de16ee550a7f14a0c557b922ebacb854fd8819fa69e739ced836cc3fdc9f78e1599794393da22a304ce");

        let requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        fetch("http://localhost:80/prestashopV2/api/products&output_format=JSON", requestOptions)
            .then((response) => response.json())
            .then((responseJson) => {
                this._getDataProduct(responseJson);
                console.log(responseJson)
            }).catch((error) => {
            console.error(error);
        });
    }// this.img[item.id], item.name, item.price, item.description
    _displayDetailForProduct = (img, name, price, description) => {
        // console.log("Display Product with id " + name);
        this.props.navigation.navigate("ProductDetail", {img: img, nameP: name, price: price, description: description, monPanier: this.panier});
    }

    _displayPanier = () => {
        console.log("test")
        this.props.navigation.navigate("Panier", {monPanier: this.panier});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    TextInput: {
        height: 30,
        borderWidth: 1,
        paddingLeft: 5,
    },
});


export default Products
