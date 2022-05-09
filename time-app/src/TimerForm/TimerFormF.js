import React, {useState, useEffect} from "react";

function TimerForm(props){
    
            // id : this.props.id || '',
            // title : this.props.title || '',
            // para : this.props.para || '',
    const [id, setId] = useState(props.id || '');  
    const [title, setTitle] = useState(props.title || '');    
    const [para, setPara] = useState(props.para || '');      

    const handleTitleChange = (e) => {
        
        setTitle(e.target.value);
        
        //console.log(e);
    }

    const handleParaChange = (e) => {
     
        setPara(e.target.value);
       
    }

    const handleIdChange = (e) => {
        
        setId(e.target.value);
        
    }

    const handleUndoClick = () => {
        props.handleUndoClick();
    }

    const handleSubmit = () => {
        console.log("clicked handle submit");
        props.handleSubmit({
            id : id,
            title : title,
            para : para
        })
    }
    const [submittext, setSubmittext] = useState(props.id ? 'Update' : 'Create'); 
    return (
        
        <div className="card" style={{width : "18rem"}}>
            <div className="card-body">
            <input type="text" className="form-control" placeholder="id" aria-label="id" aria-describedby="basic-addon1" value={id} onChange={handleIdChange}></input>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={title} onChange={handleTitleChange}></input>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={para} onChange={handleParaChange}></input>

                <a href="#" className="btn btn-primary" onClick={handleSubmit} >{submittext}</a>
                <a href="#" className="btn btn-primary" onClick={handleUndoClick}>Undo</a>
            </div>
        </div>
    );
}

export default TimerForm;