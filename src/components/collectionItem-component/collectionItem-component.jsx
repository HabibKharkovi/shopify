import React from 'react';

const CollectionItem = ({name, price, imageUrl}) => {
    return ( 
        <div className="item">
            <div className="img-wrapper">
                <img src={imageUrl} alt={name} className="image"/>
            </div>
            <div className="content">
                <span className="item-name">{name}</span>
                <span className="item-price">${price}</span>
            </div>
        </div>
     );
}
 
export default CollectionItem;