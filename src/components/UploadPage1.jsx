import React from 'react'

const UploadOne = () => {
    return (
        <div>
            <form>

            <div className="upload">
                <div className="upload-img"> Upload Image Div </div>
                <div classNAme="upload-btn"><button>Upload Image</button></div>
            </div>
            
                
            <div className="form">
                <input name="item_name" placeholder="Name of Collectible"/> 
                <button style={{color: "red"}}>Continue</button>
            </div>
           </form>
            
        </div>
    )
}

export default UploadOne;