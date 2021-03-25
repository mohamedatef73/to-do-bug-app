import React, { useState } from 'react'
import { Collapse } from 'reactstrap'

const Edit = (props) => {
    const [title, setTitle] = useState(props.editTitle)

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addEditBug(props.editId,title)
    }

    const handleCancel = () =>{
        props.cancelEdit(props.editId);
        setTitle(props.editTitle)
    }

    return (
        <Collapse className='w-100' isOpen={props.editBug}>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='edit ur bug element here'
                    value={title} className='form-control'
                    onChange={(e) => setTitle(e.target.value)} />

                <div className=''>
                    <button type='button' className='btn text-danger'
                     onClick={handleCancel}>Cancel</button>
                     
                    <button type='submit' className='btn text-danger'>Save</button>
                </div>
            </form>


        </Collapse>

    )
}
export default Edit