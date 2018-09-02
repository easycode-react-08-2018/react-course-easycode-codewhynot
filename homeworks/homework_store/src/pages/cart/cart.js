import React, {Component} from 'react';
import './cart.sass'

export class CartPage extends Component {
    constructor (props) {
        super (props)
    }
    render () {
        const {setPage,active} = this.props;
        const visibility = active === 'cart' ? "title visible" : 'title'
        return (
            <h1 className={visibility}>

            </h1>
        )
    }
}