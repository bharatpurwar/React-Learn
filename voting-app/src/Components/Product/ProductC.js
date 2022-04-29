
import React, { Component } from 'react';

class Product extends React.Component {
  constructor(props){
    super(props);

    // this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote() {
    this.props.onVote(this.props.id)
  }
    
  render() {
    return (
        <div className="card" style={{width: "18rem"}} >
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p className="card-text">{this.props.votes}</p>
          <a href="#" className="btn btn-primary" onClick={this.handleUpVote}>Go somewhere</a>
        </div>
      </div>
    );
    }
}
    
export default Product;