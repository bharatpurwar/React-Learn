import React, {useState} from "react";
import EditableTimer from "../EditableTimer/EditableTimerC";

class TimerList extends React.Component{
    constructor(props){
        super(props);
    }
    handleUpdateFormSubmit = (data) => {
        this.props.handleUpdateFormSubmit(data);
        // this.setState({
        //     editAddTimerFormOpen : false,
        // })
    }

    onDeleteClick = (id) => {
        this.props.onDeleteClick(id);
    }

    // add the code for whether to open timer or form here only, try not to make
    // a different component
    render(){
        const timers = this.props.data.map((data) => {
            //console.log(data);
            return <EditableTimer
                    key={data.id}
                    id = {data.id}
                    title = {data.title}
                    para = {data.para}
                    handleUpdateFormSubmit={this.handleUpdateFormSubmit}
                    onDeleteClick={this.onDeleteClick}
                   />
        }
        )
        return (
            <div>
                {timers}
            </div>
        );
    }
}

export default TimerList;