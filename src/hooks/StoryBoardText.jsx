import React from "react";

function StoryBoardText( { caption, text1, text2, text3 } ){
    return (
        <>
            <div className="storyboard-caption">{ caption }</div>

            <div className="storyboard-item" >
                {text1 && <p><div className="storyboard-text">{ text1 }</div></p>}
                {text2 && <p><div className="storyboard-text">{ text2 }</div></p>}
                {text3 && <p><div className="storyboard-text">{ text3 }</div></p>}
            </div>
            
        </>
    )

}

export default StoryBoardText