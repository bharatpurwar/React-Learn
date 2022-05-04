import React, {useState} from "react";

class TimerForm extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            id : this.props.id || '',
            title : this.props.title || '',
            para : this.props.para || '',
        }
    }

    handleTitleChange = (e) => {
        this.setState({
            title : e.target.value,
        })
        //console.log(e);
    }

    handleParaChange = (e) => {
        this.setState({
            para : e.target.value,
        })
    }

    handleIdChange = (e) => {
        this.setState({
            id : e.target.value,
        })
    }

    handleUndoClick = () => {
        this.props.handleUndoClick();
    }

    handleSubmit = () => {
        console.log("clicked handle submit");
        this.props.handleSubmit({
            id : this.state.id,
            title : this.state.title,
            para : this.state.para
        })
    }
    
    render(){

        const submittext = this.props.id ? 'Update' : 'Create'; 
        return (
            <div className="card" style={{width : "18rem"}}>
                <div className="card-body">
                <input type="text" className="form-control" placeholder="id" aria-label="id" aria-describedby="basic-addon1" value={this.state.id} onChange={this.handleIdChange}></input>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={this.state.title} onChange={this.handleTitleChange}></input>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={this.state.para} onChange={this.handleParaChange}></input>
                    <a href="#" className="btn btn-primary" onClick={this.handleSubmit} >{submittext}</a>
                    <a href="#" className="btn btn-primary" onClick={this.handleUndoClick}>Undo</a>
                </div>
            </div>
        );
    }
}

export default TimerForm;