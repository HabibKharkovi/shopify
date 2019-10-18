import React, { Component } from 'react';
import sections from './data';
import "./homePage-component.scss"

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: sections
        }
    }
    render(){
        const  data  = this.state.data;

        return (
            <div className="home-page">
                <div className="container">
                    <div className="directory-list">
                        { data.map(item => 
                            <div className={`item ${item.large ? 'item-lg': null }`} key={item.id}>
                                <a href={item.linkUrl} className="link">
                                    <img src={item.imageUrl} className="img"/>
                                </a>
                                <div className="content">
                                    <h2 className="title">{item.title}</h2>
                                    <span className="text">shop now</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;