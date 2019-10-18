import React, { Component } from 'react';
import sections from '../../data/data';
import MenuItem from '../../components/menuItem-component/menuItem-component';
import "./homePage-component.scss"

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: sections,
            props
        }
    }
    render(){
        const  data  = this.state.data;
        console.log(this.props)
        return (
            <div className="home-page">
                <div className="container">
                    <div className="directory-list">
                        { data.map(item => 
                            <MenuItem key={item.id} {...item} />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;