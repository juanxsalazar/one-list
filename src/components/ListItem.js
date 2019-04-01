import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    return (
      <li
        onClick={() => this.props.deleteItem(this.props.list)}
        className={this.props.list.completed ? 'completed-item' : ''}
      >
        {this.props.list.task}
      </li>
    )
  }
}

export default ListItem