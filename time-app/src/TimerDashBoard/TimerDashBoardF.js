import React, {useEffect, useState} from "react";
import TimerList from "../TimerList/TimerListF";
import AddTimer from "../AddTimer/AddTimerC";
import {getTimers, createTimer, updateTimer, deleteTimer} from "../client";

function TimerDashBoard (props){
    // constructor(props){
    //     //console.log('b');
    //     super(props);
    //     this.state = {
    //         // allData:[
    //         //     {
    //         //         "id": "1",
    //         //         "title": "Yellow Pail",
    //         //         "para": "On-demand sand castle construction expertise."
    //         //     },
    //         //     {
    //         //         "id": "2",
    //         //         "title": "Yellow Pail2",
    //         //         "para": "On-demand sand castle construction expertise."
    //         //     }
    //         // ],
    //         allData:[],
    //     };
    // }
    const [allData, setAllData] = useState([{
        "title": "Mow the lawn",
        "para": "House Chores",
        "elapsed": 5456099,
        "id": "0a4a79cb-b06d-4cb1-883d-549a1e3b66d7"
    }]);

    // componentDidMount() {
    //     this.loadTimersFromServer();
    //     //setInterval(this.loadTimersFromServer, 5000);
    // }
      
    useEffect(() => {
        console.log("a");
        

        loadTimersFromServer();
        
    },[]);

    const loadTimersFromServer = () => {
        getTimers((serverTimers) =>{ 
        //console.log('servertimers' + serverTimers );
        setAllData(serverTimers );
        }
        );
    };
    
        

    const onDeleteClick = (id1) => {
        console.log("delete clicked" + id1);
        //this.props.onDeleteClick();

        setAllData(allData.filter(function(data) { 
            return data.id !== id1 
        }));

        deleteTimer({id:id1});
    }

    const handleNewFormSubmit = (data) => {
        console.log(data);
        setAllData(allData.concat(data));
        
        createTimer(data);
    }

    const handleUpdateFormSubmit = (data) => {
        //console.log(data);

        let updatedData = allData.map((currentData) => {
            if(data.id === currentData.id){
                let newData = Object.assign({}, data);
                    
                return newData;
            }else{
                return currentData;
            };
        });
        
        
        setAllData(updatedData);
        

        updateTimer(data);
    };

   
        return (
            <div>
                <TimerList
                    data={allData}
                    handleUpdateFormSubmit={handleUpdateFormSubmit}
                    onDeleteClick={onDeleteClick}
                />
                <AddTimer 
                    isOpen={true}
                    handleNewFormSubmit={handleNewFormSubmit}

                />
            </div>
            );
     
}

export default TimerDashBoard;