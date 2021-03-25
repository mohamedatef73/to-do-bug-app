import React, { useState } from 'react'

const NewBugForm = ({ addBug }) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addBug(title);
        setTitle('')
    }

    return (
        <div className='container'>
            {/* <div className='d-flex offset-2'> */}
                <h1 className='text-center mr-5' style={{ color: '#FE840E' }}> let's find the bugs and kill it</h1><br/>
                {/* <img src="https://i.pinimg.com/564x/50/fd/81/50fd81c6ebb1d676a18edfd1512f47b1.jpg" class="img-circle"  width="300" height="50" alt="insect" /> */}
            {/* </div> */}
            <form className='d-flex pt-5' onSubmit={handleSubmit}>
                <input type='text' required placeholder='type the bug ...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='form-control' />&nbsp;
                    <button type='submit' className='btn btn-danger'> Add </button>
            </form>

        </div>
    )
}
export default NewBugForm