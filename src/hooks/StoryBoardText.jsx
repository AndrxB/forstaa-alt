import React from "react";

function StoryBoardText( { caption, text1, text2, text3 } ){
    return (
        <>
            <div className="storyboard-caption">{ caption }</div>

            <div className="storyboard-item" >

                {text1 &&
                <div className="storyboard-section">
                    <div className="sidebar"/>
                    <p><div className="storyboard-text">{ text1 }</div></p>
                </div>}
                
                {text2 && 
                    <div className="storyboard-section">
                        <div className="sidebar"/>
                        <p><div className="storyboard-text">{ text2 }</div></p>
                </div>}

                {text3 && 
                <div className="storyboard-section">
                    <div className="sidebar"/>
                    <p><div className="storyboard-text">{ text3 }</div></p>
                </div>
                }
            </div>
            
        </>
    )

}

export default StoryBoardText