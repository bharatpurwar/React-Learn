import React, {useState} from "react";

function Timer(props){
    const onUpdateClick = () => {
        props.onUpdateClick();
    }

    const onDeleteClick = () => {
        props.onDeleteClick(props.id);
    }

    return (
    <div className="card" style={{width : "18rem"}}>
    <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.para}</p>
        <a href="#" className="btn btn-primary" onClick={onUpdateClick}>Change</a>
        <a href="#" className="btn btn-primary" onClick={onDeleteClick}>Delete</a>
    </div>
    </div>
    );
}

export default Timer;