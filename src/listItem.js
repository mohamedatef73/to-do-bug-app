import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)



function ListItems(props){
    const listItem = props.items.map(item=>{
        return<div className='list' key={item.key}>
            <p>
                <input type='text' key={item.key} value={item.text}
                onChange={(e)=>props.setUpdate(e.target.value,item.key)}/>
                <span>
                    <FontAwesomeIcon className='faicon' icon='trash'
                    onClick={()=>props.deleteItem(item.key)}/>
                </span>
            </p>
        </div>
    })
    return(
        <div>
            <FlipMove duration={500} easing='ease-in-out'>
            {listItem}
            </FlipMove>
        </div>
    )
}

export default ListItems