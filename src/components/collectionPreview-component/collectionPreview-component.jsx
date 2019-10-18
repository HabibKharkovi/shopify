import React from 'react';
import CollectionItem from '../collectionItem-component/collectionItem-component';
import './collectionPreview-component.scss'

const CollectionPreview = ({title, items}) => {
    return ( 
        <div class="collection-row">
            <h2>{title}</h2>
            <div className="item-list">
                {items.filter((item, index) => index < 4 ).map(item => <CollectionItem key={item.id} {...item}/>)}
            </div>
        </div>
     );
}
 
export default CollectionPreview;