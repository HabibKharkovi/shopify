import React from 'react';
import { withRouter } from 'react-router'

const MenuItem = ({ large, id, imageUrl, history, title, linkUrl, match}) => {
    console.log(match)
    return ( 
        <div className={`item ${large ? 'item-lg': null }`} key={id} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <img src={imageUrl} className="img"/>
            <div className="content">
                <h2 className="title">{title}</h2>
                <span className="text">shop now</span>
            </div>
        </div>
     );
}
 
export default withRouter(MenuItem);