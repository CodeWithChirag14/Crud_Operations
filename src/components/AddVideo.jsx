import React, { useEffect, useRef, useState } from 'react'

import './AddVideo.css';

const AddVideo = ({dispatch,editableVideo}) => {
    const initialState={
                        title:"",
                        time:'1 year ago',
                        channel:'Chirag Nankani',
                        verified:'true',
                        views:"",
                        
                         
                     
}
const [newvideo,setNewVideo]=useState(initialState);
const inputRef=useRef(null);


function handleAdd(e)
{

   if(editableVideo)
   {
   

       dispatch({type:'UPDATE',payload:newvideo})
       setNewVideo(initialState)
   }
   else{
 
       if(newvideo.title!=""&&newvideo.views!=""){
        dispatch({type:'ADD',payload:newvideo})
        setNewVideo(initialState);
       }
       else{
        alert("Enter details completely!")
       }
     

   }
    
}   


useEffect(()=>{
    inputRef.current.focus();
    const placeholderText = 'Enter title';
    let index = 0;

    const interval = setInterval(() => {
      if (index < placeholderText.length) {
        inputRef.current.placeholder = placeholderText.slice(0, index + 1);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);



    if(editableVideo)
    {
        setNewVideo(editableVideo)
    }
},[editableVideo])


function handleChange(e){
 setNewVideo({...newvideo,[e.target.name]:e.target.value})

}

  return (
    <>
    <div className='formcontainer'>
    <form className='form1'>
        <input type='text' name='title' value={newvideo.title} placeholder='Enter title'  onChange={handleChange} ref={inputRef}></input>
        
        <input type='text' name='views' value={newvideo.views} placeholder='Enter views' onChange={handleChange} ></input>
        
        <button type='button' style={{borderRadius:'5px'}} onClick={handleAdd}>{editableVideo?'EDIT':'ADD'}</button>
    </form>
    </div>
    </>
  )
}

export default AddVideo
