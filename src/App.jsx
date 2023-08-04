
import React, {useReducer,useContext, createContext } from 'react'
import data from './components/Data' 
import { useState } from 'react'
import VideoList from './components/VideoList'
import AddVideo from './components/AddVideo'
import './App.css';
import '../src/index.css'





export const ThemeContext=createContext();


const App = () => {
 
  
  
  const [editableVideo,setEditableVideo]=useState(null);
  
  const [videos, dispatch] = useReducer(videoReducer,data)
  
  

  const[mode,setMode]=useState('darkMode');
  
  

  function videoReducer(videos,action)
  {
    switch (action.type) {
      case 'ADD':
        return[
          ...videos,{...action.payload,id:videos.length +1}
        ]

       case 'DELETE':
        return videos.filter((v)=>v.id!==action.payload)

        case 'UPDATE':
        const index=videos.findIndex((v)=>v.id==action.payload.id)
        const newVideos=[...videos]
        newVideos.splice(index,1,action.payload);
        setEditableVideo(null)
       return newVideos;
    
      default:
        return videos;
      
    }
  }


     
  function editVideo(video)
  {
    setEditableVideo(videos.find((v)=>v.id===video))
  }  

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'darkMode' ? 'lightMode' : 'darkMode'));
  };
  return ( 
    <>
    <ThemeContext.Provider value={mode}>
    <div className={`app ${mode}`}>
      <label className="switch">
            <input type="checkbox" onChange={toggleMode}/>
            <span className="slider round"></span>
            </label>
      <h2 className={`h1 ${mode}`}>CRUD OPERATIONS </h2>
    <AddVideo videos={videos} dispatch={dispatch} editableVideo={editableVideo} ></AddVideo>
     <VideoList editVideo={editVideo} dispatch={dispatch} videos={videos} ></VideoList>
          
     </div>
     </ThemeContext.Provider>


    
    </>

  )
}


export default App
