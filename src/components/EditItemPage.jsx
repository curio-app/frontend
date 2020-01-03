import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditItemPage = props => {
    let { id } = useParams();
    const [editItem, setEditITem] = useState({
        name: '',
        story: '',
        sellable: false,
        description: ''
    })

    const handleChange = e => {
        setEditITem({
            ...editItem,
            [e.target.name]: e.target.value
        })
        console.log(editItem)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(editItem)
        props.history.push('/profile')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>edit image</p>
                <input
                    type='text'
                    value={editItem.name}
                    name='name'
                    onChange={handleChange}
                />
                <input
                    type='text'
                    value={editItem.story}
                    name='story'
                    onChange={handleChange}
                />
                <input
                    type='text'
                    value={editItem.description}
                    name='description'
                    onChange={handleChange}
                />
                <p>Sellable?</p>
                <button onClick={e => {
                    e.preventDefault();
                    setEditITem({ ...editItem, sellable: true })
                }}>Yes</button>
                <button onClick={e => {
                    e.preventDefault();
                    setEditITem({ ...editItem, sellable: false })
                }}>No</button>
                <br />
                <input
                    type='text'
                    value='current tags'
                />
                <button>Finish</button>
            </form>
        </div>
    )
}

export default EditItemPage;