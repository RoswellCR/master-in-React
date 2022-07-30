import React from 'react'
import TodoFormc from './TodoFormc';
import TodoList from './TodoList';
import {connect} from 'react-redux'
import {addTodo} from '../../redux/actions/todo.Action'
import {updateTodo} from '../../redux/actions/todo.Action'
import {deleteTodo} from '../../redux/actions/todo.Action'
import { getId } from '../../util'


const Todos = ({ todo, addTodo, updateTodo, deleteTodo }) => {
  //
  const handleSubmit = (e) => {
    e.preventDefault()

    const text = e.target[0].value

    addTodo({
      text,
      checked: false,
      id: getId()
    })

    e.target[0].value = ''
  }

  return (
    <div>
      <h1>Todos</h1>
      <TodoFormc onSubmit={handleSubmit} />
      <TodoList
        todos={todo.todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    todo: state.todo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)