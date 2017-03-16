import React, { PropTypes } from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e.target.value);
  }

  render() {

    return (
      <div>
        <label>{this.props.label}</label>
        <input name={this.props.name}
               type="text"
               data-style-property={this.props.data}
               defaultValue={this.props.defaultValue}
               onChange={this.handleChange}/>
      </div>
    )

  }
}

<Input label="Header Title" name="invite[header_title]" data="header_title" defaultValue={this.state.header_title} handleChange={this._handleChange}/>
