import React, { Component } from 'react';
import './App.css';
import Product from './Product.js';
import logo from './logo.svg';
import buenosImg from './buenos.jpeg';
import greenImg from './tom_green.jpeg';
// import { fetchItems } from './api.js';

const products = [
    {
        name: "Beau's Three Knocks",
        imgLink: logo,
        flavourStyle: "",
        description: "",
    },
    {   
        name: "Beau's New Lang Syne",
        imgLink: logo,
        flavourStyle: "Sour",
        description: "",
    },
    {   
     
        name: "Beau's Full Time Ipa",
        imgLink: greenImg,
        flavourStyle: "Medium & Hoppy",
        description: "",
    },
    {
        name: "Beau's The Tom Green Beer",
        imgLink: greenImg,
        flavourStyle: "Medium & Hoppy",
        description: "",
    },
    {
        name: "Beau's Buenos Dias Gruit",
        imgLink: buenosImg,
        flavourStyle: "Medium & Hoppy",
        description: "",
    },
]
class App extends Component {
    state = {
        currentItem: null
    };

    handleItemClick = (item) => {
        this.setState({
            currentItem: item
        })
    }

    onClose = () => {
        this.setState({
            currentItem: null
        })
    }
    

    renderProduct() {
        let current = this.state.currentItem;
        if (!this.state.currentItem) return;
        return (
        <div>
            <span
                className="close"
                onClick={() => this.onClose()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.22 197.22">
                    <polygon points="164.11 40.59 156.63 33.11 98.61 91.13 40.6 33.11 33.11 40.59 91.13 98.61 33.11 156.63 40.6 164.11 98.61 106.1 156.63 164.11 164.11 156.63 106.1 98.61 164.11 40.59"></polygon>
                </svg>
            </span>
        <Product 
            title={current.name}
            imgLink={current.imgLink}
            flavourStyle={'Medium & Hoppy'}
            description={'Gold medal winner at the 2015 and 2017 Ontario Brewing Awards.'} />
            </div>
        )
    }

    renderProductList() {
        return (
            <div className="prodList">
            {
                products.map((item, index) => {
                    return (
                        <div key={index} onClick={()=> this.handleItemClick(item)}>
                            <img src={item.imgLink} className="prodThumb" alt={`${item.imgLink} beer`} />
                            <h4>{item.name}</h4>
                        </div>
                    )
                })
            }
            </div>
        )
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div>
                    { this.state.currentItem ? this.renderProduct() : this.renderProductList() }
                </div>
            </div>
        );
    }
}

export default App;

// callApi = async () => {
//     const response = await fetch('/api/hello');
//     const body = await response.json();

//     if (response.status !== 200) throw Error(body.message);

//     return body;
// };


// renderProduct() {
    //     return <Product 
    //       title={'Hopsta La Vista'}
    //       imgLink={prodImg}
    //       flavourStyle={'Medium & Hoppy'}
    //       description={'Gold medal winner at the 2015 and 2017 Ontario Brewing Awards.'} />
    // }

    // fetchItems() {
    //     const url = `${API_BASE_URL}products/538892`;
    //     return fetch(url, {
    //         method: 'get',
    //         headers: BASIC_HEADERS,
    //         mode: 'no-cors',
    //         credentials: 'include'
    //     })
    //     .then(response => {
    //         if (response.status !== 200) throw (response);
    //         return response;
    //     })
    //     .then(response => response.json())
    // };