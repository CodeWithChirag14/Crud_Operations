import React from "react";
import Video from "./Video";
import "./VideoList.css";
import PlayButton from "./PlayButton";


const VideoList = ({ videos,dispatch,editVideo }) => {
  return (
    <div className="listofvideos">
      {videos.map((v) => {
        return (
          <Video key={v.id}
            title={v.title}
            views={v.views}
            time={v.time}
            verified={v.verified}
            id={v.id}
            // deleteVideo={deleteVideo}
            dispatch={dispatch}
            editVideo={editVideo} 
            >
              <PlayButton onPlay={()=>console.log('Playing....',v.title)} onPause={()=>console.log('Paused ',v.title)}>{v.title}</PlayButton>
          </Video>
        );
    }
    
    )
    
    
}
    </div>
  );
};

export default VideoList;
