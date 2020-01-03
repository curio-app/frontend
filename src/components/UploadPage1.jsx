import React, { useEffect } from 'react'

const UploadOne = ({ newCollectable, setCollectable, ...props }) => {

    useEffect(() => {
        props.setPageBars({
            ...props.pageBars,
            isPageOne: true
        })
    }, [])

    const handleChange = e => {
        // console.log(newCollectable)
        setCollectable({
            ...newCollectable,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.history.push('/upload-page/2')
    }

    return (
        <div>
            <form>

                <div className="upload">
                    <div className="upload-img"> Upload Image Div </div>
                    <div classNAme="upload-btn"><button>Upload Image</button></div>
                </div>


                <div className="form">
                    <input 
                        name="name" 
                        placeholder="Name of Collectible" 
                        value={newCollectable.name}
                        onChange={handleChange}
                    />
                    <button style={{ color: "red" }} onClick={handleSubmit}>Continue</button>
                </div>
            </form>

        </div>
    )
}

export default UploadOne;