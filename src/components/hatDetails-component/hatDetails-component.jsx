import React from 'react';

const HatDetails = (props) => {
    console.log(props)
    return ( 
        <div>
            hat details page {props.match.params.hatId}
            <button onClick={props.history.goBack}>back</button>
        </div>
     );
}
 
export default HatDetails;