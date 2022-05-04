import React, {useState} from "react";
import EditableAddTimer from "../EditableAddTimer/EditableAddTimerC";


class AddTimer extends React.Component{
    handleNewFormSubmit = (data) => {
        this.props.handleNewFormSubmit(data);
        this.setState({
            editAddTimerFormOpen : false,
        })
    }
    
    render(){

        return (
            <EditableAddTimer
                editAddTimerFormOpen={false}
                handleNewFormSubmit={this.handleNewFormSubmit}
            />
            );
        }
}

export default AddTimer;