import React, { PropTypes } from 'react';

export default class MenuEdit extends React.Component {
  render() {

    return (
      <div className={this.props.menuEditState}>
        <label className="label-header">Edit</label>
        {this.props.props.primary_color}

        <label>Primary Font Size</label>
        <span className="input-slider">
          <label>{this.props.props.primary_font_size}<i> px</i></label>
          <input name="invite[primary_font_size]" type="range" data-style-property="primary_font_size" min="30" max="150" defaultValue={this.props.props.primary_font_size} onChange={this.props.handleChange.bind(this)}/>
        </span>

      </div>

    )
  }
}
