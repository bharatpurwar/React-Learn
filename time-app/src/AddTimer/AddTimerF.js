import React, {setState} from "react";
import EditableAddTimer from "../EditableAddTimer/EditableAddTimerF";


function AddTimer (props){
    // const [editAddTimerFormOpen, setEditAddTimerFormOpen] = setState(false); 

    const handleNewFormSubmit = (data) => {
        props.handleNewFormSubmit(data);
        
            // setEditAddTimerFormOpen(false);
       
    }
    
    

        return (
            <EditableAddTimer
                // editAddTimerFormOpen={false}
                handleNewFormSubmit={handleNewFormSubmit}
            />
            );
      
}

export default AddTimer;