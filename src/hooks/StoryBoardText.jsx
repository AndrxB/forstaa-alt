import React from "react";

function StoryBoardText( { caption, text1, text2, text3 } ){
    return (
        <>
            <div className="storyboard-caption">{ caption }</div>

            <div className="storyboard-item" >

                <div className="storyboard-section">
                    <div className="sidebar">André</div>
                    {text1 && <p><div className="storyboard-text">{ text1 }</div></p>}
                </div>

                
            </div>
            
        </>
    )

}

export default StoryBoardText