import React from "react";
import TimerForm from "../TimerForm/TimerFormF";
import Timer from "../Timer/TimerF";

class EditableTimer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            editFormOpen : false,
        }
    }

    handleUndoClick = () => {
        this.setState({editFormOpen : false}); 
    }

    onUpdateClick = () => {
        this.setState({
            editFormOpen: true,
        })
    } 

    handleUpdateFormSubmit = (data) => {
        this.props.handleUpdateFormSubmit(data);
        this.setState({
            editFormOpen : false,
        })
    }

    onDeleteClick = (id) => {
        this.props.onDeleteClick(id);
    }

    render(){
            if(this.state.editFormOpen){
                return <TimerForm
                        id={this.props.id}
                        title={this.props.title}
                        para={this.props.para}
                        handleSubmit = {this.handleUpdateFormSubmit}
                        handleUndoClick = {this.handleUndoClick}
                       />
            }else{
                return <Timer
                        id={this.props.id}
                        title={this.props.title}
                        para={this.props.para}
                        onUpdateClick={this.onUpdateClick}
                        onDeleteClick={this.onDeleteClick}
                        />
            }
            
        }
}

export default EditableTimer;