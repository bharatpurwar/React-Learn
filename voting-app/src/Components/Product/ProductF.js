import React, { useEffect, useState } from 'react';



function Product (props){
    
    // works

    // function handleUpVote(){
    //     console.log(props.id + 'was clicked');
    // }

    // this also works
    // const handleUpVote = function(){
    //     console.log(props.id + 'was clicked'); 
    // }

    const handleUpVote = () => {
        console.log(props.id + 'was clicked'); 
        props.onVote(props.id);
        return;
    }
    
    
        
    return (
        <div className="card" style={{width: "18rem"}} >
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p className="card-text">{props.votes}</p>
          <a href="#" className="btn btn-primary" onClick={handleUpVote}>Go somewhere</a>
        </div>
      </div>
    );
}
    
export default Product;