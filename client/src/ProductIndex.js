import React, { Component } from 'react';
import { fetchProducts } from '../api/index';
// import Asset from './asset';

class ProductIndex extends Component {
  
  componentWillMount() {
    this.props.fetchProducts();
  }
  
  renderProducts() {
    return this.props.product.map((product, index) => {
      return (
        <section key={product.id} >
          <div >
            <h2>{post.fields.title}</h2>
            
            <br />
            <Link to={`${product.id}`} className="button big wide smooth-scroll-middle">View</Link>
          </div>
        </section>
      );
    });
  }
  
  render() {
    return (
      <div>
        {this.renderProducts()}
      </div>
    );
  }
}
export default (ProductIndex);
