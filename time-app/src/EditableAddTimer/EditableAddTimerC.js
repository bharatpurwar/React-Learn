import React, {useState} from "react";
import TimerForm from "../TimerForm/TimerFormF";

class EditableAddTimer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        editAddTimerFormOpen : false,
        }

        this.handleFormOpen = this.handleFormOpen.bind(this);
    }

    // state = {
    //     editAddTimerFormOpen : false,
    // }

    handleFormOpen(){
        this.setState({editAddTimerFormOpen : true});
    }

    handleUndoClick = () => {
        this.setState({editAddTimerFormOpen : false}); 
    }

    handleSubmit = (data) => {
        console.log('in editable add timer with data ' , data);
        this.props.handleNewFormSubmit(data);
        this.setState({
            editAddTimerFormOpen : false,
        })
    }

    render(){
            if(this.state.editAddTimerFormOpen){
                return <TimerForm
                        id={this.props.id}
                        title={this.props.title}
                        para={this.props.para}
                        handleUndoClick = {this.handleUndoClick}
                        handleSubmit = {this.handleSubmit}
                       />
            }else{
                return <div>
                        <a href="#" className="btn btn-primary" onClick={this.handleFormOpen}>AddTimer</a>
                       </div>
            }
            
        }
}

export default EditableAddTimer;