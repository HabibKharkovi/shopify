import React, { Component } from 'react';
import CollectionPreview from '../../components/collectionPreview-component/collectionPreview-component';
import SHOP_DATA from '../../data/shop.data';

class Shop extends Component {
    constructor(props){
        super(props);
        this.state = {
            shop_Date: SHOP_DATA
        }
    }
    render() { 
        return ( 
            <div className="shop-page">
                <div className="container">
                    {this.state.shop_Date.map(collection => 
                        <CollectionPreview key={collection.id} {...collection} />    
                    )}
                </div>
            </div>
         );
    }
}
 
export default Shop;