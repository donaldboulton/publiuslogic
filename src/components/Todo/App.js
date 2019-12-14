import React, { Component } from 'react'
import { Router } from '@reach/router'

import TodoFooter from './Footer'
import TodoItem from './TodoItem'
import Login from '../Login'
// import ListChooser from './ListChooser';
import { ALL_LISTS, ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from './utils'

const ENTER_KEY = 13

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nowShowing: ALL_LISTS,
      editing: null,
      newTodo: '',
      faunadb_token: null,
    }
  }

  componentDidMount () {
    var setState = this.setState
    var router = Router({
      '/': setState.bind(this, { nowShowing: ALL_LISTS }),
      '/list/:listId/': (listId) => {
        this.props.model.getList(listId)
        this.setState({ nowShowing: ALL_TODOS })
      },
      '/list/:listId/active': (listId) => {
        this.props.model.getList(listId)
        this.setState({ nowShowing: ACTIVE_TODOS })
      },
      '/list/:listId/completed': (listId) => {
        this.props.model.getList(listId)
        this.setState({ nowShowing: COMPLETED_TODOS })
      },
    })
    router.init('/')
  }

  // componentWillReceiveProps() {
  //   console.log(this, arguments)
  // }
  handleChange (event) {
    this.setState({ newTodo: event.target.value })
  }

  handleNewTodoKeyDown (event) {
    if (event.keyCode !== ENTER_KEY) {
      return
    }

    event.preventDefault()

    var val = this.state.newTodo.trim()

    if (val) {
      if (this.state.nowShowing === ALL_LISTS) {
        this.props.model.addList(val)
      } else {
        this.props.model.addTodo(val, this.props.model.list())
      }
      this.setState({ newTodo: '' })
    }
  }

  toggleAll (event) {
    var checked = event.target.checked
    this.props.model.toggleAll(checked, this.props.model.list())
  }

  toggle (todoToToggle) {
    this.props.model.toggle(todoToToggle)
  }

  destroy (todo) {
    this.props.model.destroy(todo)
  }

  edit (todo) {
    this.setState({ editing: todo.ref })
  }

  save (todoToSave, text) {
    this.props.model.save(todoToSave, text)
    this.setState({ editing: null })
  }

  cancel () {
    this.setState({ editing: null })
  }

  clearCompleted () {
    this.props.model.clearCompleted(this.props.model.list())
  }

  onAuthChange (faunadb_token) {
    console.log('app.js onAuthChange', faunadb_token)
    this.setState({ faunadb_token })
    this.props.model.onAuthChange(faunadb_token)
  }

  onError (error) {
    this.setState({ error })
  }

  go (link) {
    window.location.hash = link
  }

  render () {
    console.log('model', this.props.model)
    var footer, listNavigator
    var main
    var inputArea
    if (this.state.nowShowing === ALL_LISTS) {
      var lists = this.props.model.lists
      main = (
        <section className='main'>
          <ul className='todo-list'>
            {lists.map(
              ({ data, ref }) => {
                console.log('list', data, ref)
                return <li key={ref.value.id}>
                  <label onClick={this.go.bind(this, '/list/' + ref.value.id)}>
                    {data.title}
                  </label>
                </li>
              },

            )}
          </ul>
        </section>
      )
      inputArea = <input
        className='new-todo'
        placeholder='Create a new list or choose from below.'
        value={this.state.newTodo}
        onKeyDown={this.handleNewTodoKeyDown.bind(this)}
        onChange={this.handleChange.bind(this)}
        autoFocus
      />
      listNavigator = <div className='listNav'>
        <label>Choose a list.</label>
      </div>
    } else {
      var todos = this.props.model.todos()

      listNavigator = <div className='listNav'>
        <label>{this.props.model.list() && this.props.model.list().data.title}</label>
        <button onClick={this.go.bind(this, '/')}>back to all lists</button>
      </div>

      var shownTodos = todos.filter(function (todo) {
        switch (this.state.nowShowing) {
          case ACTIVE_TODOS:
            return !todo.data.completed
          case COMPLETED_TODOS:
            return todo.data.completed
          default:
            return true
        }
      }, this)

      var todoItems = shownTodos.map(function (todo) {
        return (
          <TodoItem
            key={todo.ref.value.id}
            todo={todo.data}
            onToggle={this.toggle.bind(this, todo)}
            onDestroy={this.destroy.bind(this, todo)}
            onEdit={this.edit.bind(this, todo)}
            editing={this.state.editing === todo.ref}
            onSave={this.save.bind(this, todo)}
            onCancel={this.cancel.bind(this)}
          />
        )
      }, this)

      var activeTodoCount = todos.reduce(function (accum, todo) {
        return (todo.data && todo.data.completed) ? accum : accum + 1
      }, 0)

      var completedCount = todos.length - activeTodoCount

      if (activeTodoCount || completedCount) {
        footer =
          <TodoFooter
            count={activeTodoCount}
            completedCount={completedCount}
            nowShowing={this.state.nowShowing}
            onClearCompleted={this.clearCompleted.bind(this)}
          />
      }

      if (todos.length) {
        main = (
          <section className='main'>
            <input
              className='toggle-all'
              type='checkbox'
              onChange={this.toggleAll.bind(this)}
              checked={activeTodoCount === 0}
            />
            <ul className='todo-list'>
              {todoItems}
            </ul>
          </section>
        )
      }
      inputArea = <input
        className='new-todo'
        placeholder='What needs to be done?'
        value={this.state.newTodo}
        onKeyDown={this.handleNewTodoKeyDown.bind(this)}
        onChange={this.handleChange.bind(this)}
        autoFocus
      />
    }
    return (
      <div>
        <header className='header'>
          <h1>todos</h1>
          <Login model={this.props.model} onError={this.onError.bind(this)} onAuthChange={this.onAuthChange.bind(this)} />
          {this.state.faunadb_token ? listNavigator : ''}
          {this.state.faunadb_token ? inputArea : ''}
        </header>
        {main}
        {footer}
      </div>
    )
  }
}

export default App
