import React from 'react'
// import { render } from '@testing-library/react'
import ListItems from './listItem'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)



class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
            items: [],
            currentState: {
                text: '',
                key: ''
            }
        }
        this.handleInput = this.handleInput.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.setUpdate = this.setUpdate.bind(this)
    }
    handleInput(e) {
        this.setState({
            currentState: {
                text: e.target.value,
                key: Date.now()
            }

        })
    }

    addItem(e) {
        e.preventDefault()
        const newItem = this.state.currentState
        if (newItem.text !== '') {
            const addItems = [...this.state.items, newItem]
            this.setState({
                items: addItems,
                currentState: {
                    text: '',
                    key: ''
                }

            })
        }
    }
    deleteItem(key) {
        const removeItem = this.state.items.filter(item =>
            item.key !== key)
        this.setState({
            items: removeItem
        })
    }
    setUpdate(text, key) {
        const items = this.state.items
        items.map(item => {
            if (item.key === key) {
                item.text = text
            }
        })
        this.setState({
            items
        })
    }

    render() {
        return (
            <div className='App'>
                <header>
                    <form id='to-do-form' onSubmit={this.addItem}>
                        <input type='text' 
                            required placeholder='enter text'
                            value={this.state.currentState.text}
                            onChange={this.handleInput} />
                        <button type='submit'>add item</button>
                    </form>
                </header>
                <ListItems setUpdate={this.setUpdate} deleteItem={this.deleteItem}
                    items={this.state.items} />
            </div>
        )
    }
}

export default TodoList