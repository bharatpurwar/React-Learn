import React , {Component} from "react";
import Product from '../Product/ProductF';
//import Product from '../Product/ProductC';
import productsData from '../../data.js';


class ProductList extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            products : [],
        };

        this.handleProductUpVote = this.handleProductUpVote.bind(this);
    }

    componentDidMount(){
        this.setState({ products: productsData });

    }

    handleProductUpVote(productId) {
        // console.log(productId + ' was upvoted.');
        const nextProducts = this.state.products.map((product) => {
            if(product.id == productId)
            {
                return Object.assign({}, product, {
                    votes : product.votes + 1,
                });
            }
            else
            return product;
        });

        this.setState({
            products : nextProducts,
        });
    }
        
    
    render(){
        const sortedProducts = this.state.products.sort((a, b) => (
            b.votes - a.votes
            ));
            

        const allProduct = sortedProducts.map((allproduct) => (
            <Product  
                key={'product-' + allproduct.id} 
                id={allproduct.id} 
                title={allproduct.title} 
                votes={allproduct.votes}
                onVote={this.handleProductUpVote}
            />
        ));
        console.log(this.state.products);
        return (
            <div>
                {allProduct}
            </div>
        );
    }
}

export default ProductList;