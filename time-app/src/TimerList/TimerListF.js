import React, {useState} from "react";
import EditableTimer from "../EditableTimer/EditableTimerF";

function TimerList (props){
   
    const handleUpdateFormSubmit = (data) => {
        props.handleUpdateFormSubmit(data);
        // this.setState({
        //     editAddTimerFormOpen : false,
        // })
    }

    const onDeleteClick = (id) => {
        props.onDeleteClick(id);
    }

    // add the code for whether to open timer or form here only, try not to make
    // a different component
    
        const timers = props.data.map((data) => {
            //console.log(data);
            return <EditableTimer
                    key={data.id}
                    id = {data.id}
                    title = {data.title}
                    para = {data.para}
                    handleUpdateFormSubmit={handleUpdateFormSubmit}
                    onDeleteClick={onDeleteClick}
                   />
        }
        )

        const allTimers = () => {
            const timers = props.data.map((data) => {
                //console.log(data);
                return <EditableTimer
                        key={data.id}
                        id = {data.id}
                        title = {data.title}
                        para = {data.para}
                        handleUpdateFormSubmit={handleUpdateFormSubmit}
                        onDeleteClick={onDeleteClick}
                       />
            }
            )
            return timers;   
        }
        return (
            
            <div>
                {
                allTimers()
                }
                
            </div>
        );
    
}

export default TimerList;