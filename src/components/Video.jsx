import React, { useContext } from 'react';
import './Video.css';
import { ThemeContext } from '../App';





const Video = ({id,title,channel='Chirag Nankani',time,views,verified,children,dispatch,editVideo}) => {

 const mode=useContext(ThemeContext)    
   

  return (
 <>
 <div className={`container ${mode}`}>
   
    <button  className='delbutton' onClick={()=>dispatch({type:'DELETE',payload:id})}>X</button> 
     <button className='editbutton' onClick={()=>editVideo(id)}>Edit</button>
    <div className='imgclass'>
     <img src={`https://picsum.photos/id/${id}/220/140`}></img>
    </div>
    <div className='title'>{title}</div>
    <div className='channel'>{channel}&nbsp;{verified ? '✔️':<s>verified</s>}</div>
    <div className='views'>
        {views} views&nbsp;<span>.&nbsp;</span>{time}
    
    </div>
    <div className='views'>
    {children}
    
    </div>
    

 </div>
 </>
  )
}

export default Video
