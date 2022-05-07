import React, {useState} from "react";
import TimerList from "../TimerList/TimerListC";
import AddTimer from "../AddTimer/AddTimerC";
import {getTimers, createTimer, updateTimer, deleteTimer} from "../client";

class TimerDashBoard extends React.Component{
    constructor(props){
        //console.log('b');
        super(props);
        this.state = {
            // allData:[
            //     {
            //         "id": "1",
            //         "title": "Yellow Pail",
            //         "para": "On-demand sand castle construction expertise."
            //     },
            //     {
            //         "id": "2",
            //         "title": "Yellow Pail2",
            //         "para": "On-demand sand castle construction expertise."
            //     }
            // ],
            allData:[],
        };
    }
    componentDidMount() {
        this.loadTimersFromServer();
        //setInterval(this.loadTimersFromServer, 5000);
    }
      
    loadTimersFromServer = () => {
        getTimers((serverTimers) => {
        //console.log('servertimers' + serverTimers );
        this.setState({ allData: serverTimers })
        }
        );
    };

        
            
        

    onDeleteClick = (id1) => {
        console.log("delete clicked" + id1);
        //this.props.onDeleteClick();

        this.setState({allData: this.state.allData.filter(function(data) { 
            return data.id !== id1 
        })});

        deleteTimer({id:id1});
    }

    handleNewFormSubmit = (data) => {
        console.log(data);
        this.setState({
            allData : this.state.allData.concat(data),
        })
        createTimer(data);
    }

    handleUpdateFormSubmit = (data) => {
        //console.log(data);

        let updatedData = this.state.allData.map((currentData) => {
            if(data.id === currentData.id){
                let newData = Object.assign({}, data);
                    
                return newData;
            }else{
                return currentData;
            };
        });
        
        this.setState({
            allData : updatedData,
        });

        updateTimer(data);
    };

    render(){
        return (
            <div>
                <TimerList
                    data={this.state.allData}
                    handleUpdateFormSubmit={this.handleUpdateFormSubmit}
                    onDeleteClick={this.onDeleteClick}
                />
                <AddTimer 
                    isOpen={true}
                    handleNewFormSubmit={this.handleNewFormSubmit}

                />
            </div>
            );
        }
}

export default TimerDashBoard;