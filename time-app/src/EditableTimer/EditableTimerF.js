import React, { useState } from "react";
import TimerForm from "../TimerForm/TimerFormF";
import Timer from "../Timer/TimerF";

function EditableTimer(props) {

    
    const [editFormOpen, setEditFormOpen] =useState(false);
        

    const handleUndoClick = () => {
        //this.setState({editFormOpen : false}); 
        setEditFormOpen(false);
    }

    const onUpdateClick = () => {
        // this.setState({
        //     editFormOpen: true,
        // })
        setEditFormOpen(true);
    } 

    const handleUpdateFormSubmit = (data) => {
        props.handleUpdateFormSubmit(data);
        // this.setState({
        //     editFormOpen : false,
        // })
        setEditFormOpen(false);
    }

    const onDeleteClick = (id) => {
        props.onDeleteClick(id);
    }

    
            if(editFormOpen){
                return <TimerForm
                        id={props.id}
                        title={props.title}
                        para={props.para}
                        handleSubmit = {handleUpdateFormSubmit}
                        handleUndoClick = {handleUndoClick}
                       />
            }else{
                return <Timer
                        id={props.id}
                        title={props.title}
                        para={props.para}
                        onUpdateClick={onUpdateClick}
                        onDeleteClick={onDeleteClick}
                        />
            }
            
        
}

export default EditableTimer;