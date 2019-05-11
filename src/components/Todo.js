import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClickCAllback, completed, text }) => (
    <li
        onClick={onClickCAllback}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo