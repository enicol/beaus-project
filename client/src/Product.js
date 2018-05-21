import React, { Component } from 'react';

class Product extends Component {

    renderStoreList() {
        let stores = ['store1', 'store2', 'store3'];
        return (
            <div>
                <h3 className="sectionTitle">Available Locations</h3>
                <ul className="storeList">
                    { stores.map((store, index) => {
                        return <li key={index}>{store}</li>
                    })}
                </ul>
            </div>
        )
    }

    render() {
        return(
            <div className="container">
                <h1 className="prodTitle">{ this.props.title }</h1>
                <div className="content">
                    <img className="prodImg" src={this.props.imgLink} alt={`${this.props.title}bottle`} />
                    <div className="prodDesc">{ this.props.description }</div>
                    <div className="col">
                        <h3 className="sectionTitle">{'Style'}</h3>
                        <div className="sectionText">{ this.props.flavourStyle }</div>
                        { this.renderStoreList() }
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;