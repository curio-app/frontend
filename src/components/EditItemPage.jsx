import React from 'react';

const EditItemPage = () => {
    return (
        <div>
            <form>
                <p>edit image</p>
                <input 
                    type='text'
                    value='current title'
                />
                 <input 
                    type='text'
                    value='current story'
                />
                 <input 
                    type='text'
                    value='current description'
                />
                 <input 
                    type='text'
                    value='current tags'
                />
            </form>
        </div>
    )
}

export default EditItemPage;