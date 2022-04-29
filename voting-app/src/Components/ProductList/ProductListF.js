import React , {useState, useEffect, useRef} from "react";
import Product from '../Product/ProductF';
//import Product from '../Product/ProductC';
import productsData from '../../data.js';

function ProductList(props){

    const [products, setProducts] = useState([]);
    let mounted = true;

    // const mounted = useRef(false);

    // useEffect(() => {
    //     // if (!mounted.current) {
    //     //     // do componentDidMount logic
    //     //     console.log('did mount');
    //     //     setProducts(productsData);
    //     //     mounted.current = true;
    //     // } else {
    //     //     // do componentDidUpdate logic
    //     //     console.log('did update');
    //     //     setProducts(products);
    //     // }
    //     setProducts(products);
        
    // },[products]);

    useEffect(() => {
        if (mounted){
            setProducts(productsData);
            mounted = false;
            console.log('componenyt did mount');
        }
        else
        {
            console.log('component did update');
        }
        
    },[]);


    const handleProductUpVote = (productId) => {
        const nextProducts = products.map((product) => {
            if(product.id == productId)
            {
                return Object.assign({}, product, {
                    votes : product.votes + 1,
                });
            }
            else
            return product;
        });

        
        setProducts(nextProducts);
        
    }

    const sortedProducts = products.sort((a, b) => (
        b.votes - a.votes
    ));
        

    const allProduct = sortedProducts.map((allproduct) => (
        <Product  
            key={'product-' + allproduct.id} 
            id={allproduct.id} 
            title={allproduct.title} 
            votes={allproduct.votes}
            onVote={handleProductUpVote}
        />
    ));

    return (
        <div>
            {allProduct}
        </div>
    );

}

export default ProductList;