import React, { useState } from 'react'
import uuid from 'uuid/v1'
import NewBugForm from './NewBugForm'
import Toggle from './Toggle'
import Edit from './Edit'


/***
 * READ
 * 1. facebook account => login => successful 
 * 2. hit => api => fetch your posts
 * 3. show || render || view || display || read
 * 
 */

/***
* CREATE
* 1. request => api => send => data e.g. title = "test"
* 2. response => the new created entity => e.g. {id: xxx, title: "test", solved: false, comments: [], isOpen: false, , edit: false}
* 3. show || render || view || display || read
* 
*/

/***
 * UPDATE
 * 1. request => api => send => data e.g. title = "test"
 * 2. response => the new created entity => e.g. {id: xxx, title: "test", solved: false, comments: [], isOpen: false, , edit: false}
 * 3. show || render || view || display || read
 * 
 */

/***
 * DELETE
 * 1. request => api => send => data e.g. title = "test"
 * 2. response => the new created entity => e.g. {id: xxx, title: "test", solved: false, comments: [], isOpen: false, , edit: false}
 * 3. show || render || view || display || read
 * 
 */


const BugsList = (props) => {
    const [bugs, setBugs] = useState([
        // {
        //     id: 1,
        //     tite: "moahmmed",
        //     comments: []
        // }
    ])

    const addBug = (title) => {

        setBugs( [...bugs, {
            id: uuid(),
            title,
            isOpen: false,
            solved: false,
            comments: []
        }])
    }

    const editBugTitle = (id, newValue) => {


        // let bugToEdit = bugs.find(bug => bug.id === id)

        // bugToEdit = {
        //     id: bugToEdit.id, 
        //     title: newValue, 
        //     isOpen: bugToEdit.isOpen,
        //     solved: bugToEdit.solved,
        //     comments: bugToEdit.comments
        // }

        // let arr = bugs.filter(bug => bug.id !== id)

        // arr = [...arr, bugToEdit]

        let x = bugs.map(bug => {
            if (bug.id === id) {
                bug.title = newValue
            }
            return bug
        })

        setBugs(x)

    }

    const addComment = (id, title) => {
        setBugs(bugs.map(bug => {
            if (bug.id === id) {
                bug.comments = [...bug.comments, { title: title, id: uuid() }]
            }
            return bug

        }))
    }


    const removeBug = (id) => {
        
        // let arr = bugs.filter(bug => {
        //     if(bug.id !== id){
        //         return bug
        //     }
        // })

        let arr = bugs.filter(bug => bug.id !== id)

        setBugs(arr)
        
       // setBugs(bugs.filter(bug => bug.id !== id))
    }

    const solveBug = (id) => {
        setBugs(bugs.map(bug => {
            if (bug.id === id) {
                bug.solved = !bug.solved
            }
            return bug
        }))
    }

    const toggle = (id) => {
        setBugs(bugs.map(bug => {
            if (bug.id === id) {
                bug.isOpen = !bug.isOpen
            }
            return bug
        }))
    }

    const EditBug = (id) => {
        setBugs(bugs.map(bug => {
            if (bug.id === id) {
                bug.edit = !bug.edit
            }
            return bug
        }))
    }

    const cancelEdit = (id) => {
        setBugs(bugs.map(bug => {
            if (bug.id === id) {
                bug.edit = false
            }
            return bug
        }))

    }


    return (
        <div className='row justify-content-center'>
            <div className='mid col-12 col-md-6 col-sm-12'>
                <NewBugForm addBug={addBug} />
                <ul className='bg mt-3 mr-5'>
                    {bugs.map(bug => {
                        return (
                            <li className='text' key={bug.id}>
                                <span className={bug.solved ? 'bugSolved' : null} > {bug.title}</span>
                                <div>
                                    <button className='btn text-danger'
                                        onClick={() => removeBug(bug.id)} >
                                        Delete </button>

                                    <button className='btn text-danger'
                                        onClick={() => solveBug(bug.id)}>Solved</button>

                                    <button className='btn text-danger'
                                        onClick={() => toggle(bug.id)}>Comment</button>

                                    <button className='btn text-danger'
                                        onClick={() => EditBug(bug.id)}>Edit</button>
                                </div>


                                <Edit className='text-success' addEditBug={editBugTitle}
                                    cancelEdit={cancelEdit} editId={bug.id}
                                    editTitle={bug.title} editBug={bug.edit} />


                                <Toggle className='text-success' addComment={addComment}
                                    bugId={bug.id} isActive={bug.isOpen} />

                                {bug.comments.map(comment => {
                                    return (
                                        <li className='comment' key={comment.id}>
                                            {comment.title}
                                        </li>
                                    )
                                })
                                }
                                <div className='pt-3'>
                                    <hr className='hr' />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div >
        </div >


    )
}
export default BugsList