import React from 'react';
import { Link } from 'react-router-dom'

const Hats = (props) => {
    console.log(props)
    return ( 
        <div>
            <div>HATS PAGE</div>
            <Link to={`${props.match.url}/red`}>red hats</Link><br/>
            <Link to={`${props.match.url}/green`}>green hats</Link><br/>
            <Link to={`${props.match.url}/blue`}>blue hats</Link>
            <div>
                <button onClick={() => props.history.push('/jackets')}>jackets</button>
            </div>
        </div>
     );
}
 
export default Hats;