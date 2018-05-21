import React, { Component } from 'react';
import './App.css';
import Product from './Product.js';
import logo from './logo.svg';
import prodImg from './beaus.jpeg';
// import { fetchItems } from './api.js';
import axios from 'axios';

const API_BASE_URL = 'http://lcboapi.com/';
const API_TOKEN = 'MDplNTFmZWRiNC01N2Q1LTExZTgtYjkzMC1jZjY3MTk3YTU1OTI6N3hVRTJyTXFCUFd0NW9yOEtMa2ZnZkhRWUdubFl5dXUzdTNO';
const AUTH_TOKEN = `Token token=${API_TOKEN}`;

const BASIC_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Authorization': AUTH_TOKEN
};

const products = [
    {   
        id: "538892",
        title: "Beau's Three Knocks",
        imgLink: "",
        flavourStyle: "",
        description: "",
    }
]
class App extends Component {
    state = {
        response: '',
        coinList: {}
    };

    componentDidMount() {
        axios.get(`${API_BASE_URL}products?access_key=${API_TOKEN}`,{
            method: 'get',
            headers: BASIC_HEADERS,
            // mode: 'no-cors',
            credentials: 'include'
        })
          .then(res => {
            const posts = res.data.data.children.map(obj => obj.data);
            this.setState({ posts });
          });
    }
    // .then(data => {
    //     let items = data.result.map((item) =>{
    //         return <div key={item.result}>
    //             <Product 
    //             title={item.name}
    //             imgLink={prodImg}
    //             flavourStyle={item.style}
    //             description={'Gold medal winner at the 2015 and 2017 Ontario Brewing Awards.'} />
    //         </div>
    //     })
    // })
    
    // $.ajax({
    //     url: 'http://lcboapi.com/products/346197',
    //     headers: {
    //       Authorization: AUTH_TOKEN
    //     }
    //   }).then((data) => {
    //     console.log(data);
    //   });

    fetchItems() {
        const url = `${API_BASE_URL}products/538892`;
        return fetch(url, {
            method: 'get',
            headers: BASIC_HEADERS,
            mode: 'no-cors',
            credentials: 'include'
        })
        .then(response => {
            if (response.status !== 200) throw (response);
            return response;
        })
        .then(response => response.json())
    };

    initialReformat = () => {
        this.fetchItems()
        .then(res => {
            const obj = res.data;
            console.log(obj);
            this.setState({ coinList: obj});
        })
        .catch(err => console.log(err));
    }



    renderProduct() {
        return <Product 
        title={'Hopsta La Vista'}
        imgLink={prodImg}
        flavourStyle={'Medium & Hoppy'}
        description={'Gold medal winner at the 2015 and 2017 Ontario Brewing Awards.'} />
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div>
                    { this.renderProduct() }
                    { this.initialReformat() }
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