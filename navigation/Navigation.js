// Navigation/Navigation.js
import {createAppContainer} from 'react-navigation'
import {createStackNavigator } from 'react-navigation-stack'
import Products from '../components/Products'
import ProductDetail from "../components/ProductDetail";
import Panier from "../components/Panier";
import Navbar from "../components/Navbar";
import Index from "../components";
import Login from "../components/Login";

const ProductsStackNavigator = createStackNavigator({
    Index: {
        screen: Index,
        navigationOptions: {
            header: null,
        }
    },
    Products: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Products,
        navigationOptions: {
            tabBarLabel: 'Produits',

        }
    },
    ProductDetail: {
        screen: ProductDetail,
        navigationOptions: {
            title: 'ProductDetail'
        }
    },
    Panier: {
        screen: Panier,
        navigationOptions: {
            title: 'Panier'
        }
    },
    Login: {
        screen: Login,
    }
})

export default createAppContainer(ProductsStackNavigator)
