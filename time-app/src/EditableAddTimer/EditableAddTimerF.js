import React, {useState} from "react";
import TimerForm from "../TimerForm/TimerFormF";

function EditableAddTimer (props){
    
    const [editAddTimerFormOpen, setEditAddTimerFormOpen] = useState(false);
      
    const handleFormOpen = () => {
        setEditAddTimerFormOpen(true);
    }

    const handleUndoClick = () => {
        setEditAddTimerFormOpen(false);
    }

    const handleSubmit = (data) => {
        console.log('in editable add timer with data ' , data);
        props.handleNewFormSubmit(data);
        setEditAddTimerFormOpen(false);
    }

    
            if(editAddTimerFormOpen){
                return <TimerForm
                        id={props.id}
                        title={props.title}
                        para={props.para}
                        handleUndoClick = {handleUndoClick}
                        handleSubmit = {handleSubmit}
                       />
            }else{
                return <div>
                        <a href="#" className="btn btn-primary" onClick={handleFormOpen}>AddTimer</a>
                       </div>
            }
            
        
}

export default EditableAddTimer;