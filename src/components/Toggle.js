import React, { useState } from 'react';
import { Collapse } from 'reactstrap';

const Toggle = (props) => {
    const [title, setTitle] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        props.addComment(props.bugId,title);
        setTitle('')
    }



    return (
            <Collapse className='w-100' isOpen={props.isActive}>
                <form onSubmit={handleSubmit}>
                    <input type='text' required placeholder='leave a comment here'
                        value={title} onChange={(e) => setTitle
                            (e.target.value)}
                        className='form-control' />
                </form>
            </Collapse>
    );
}

export default Toggle;