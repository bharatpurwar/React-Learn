import React, {useState} from "react";

class Timer extends React.Component{
    constructor(props)
    {
        super(props);
    }

    onUpdateClick = () => {
        this.props.onUpdateClick();
    }

    onDeleteClick = () => {
        this.props.onDeleteClick(this.props.id);
    }

    render(){
        return (
            <div className="card" style={{width : "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.para}</p>
                    <a href="#" className="btn btn-primary" onClick={this.onUpdateClick}>Change</a>
                    <a href="#" className="btn btn-primary" onClick={this.onDeleteClick}>Delete</a>
                </div>
            </div>
        );
    }
}

export default Timer;