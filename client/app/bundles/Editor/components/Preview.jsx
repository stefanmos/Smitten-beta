import React, { PropTypes } from 'react';

export default class Preview extends React.Component {
  render() {
    return (

      <div id="preview">
        <h1 style={{color: this.props.header_color, fontFamily: this.props.header_font, LetterSpacing: this.props.header_font_letterspacing}}>{this.props.header_title}</h1>
        <h2>{this.props.header_title}</h2>


        {this.props.header_title}<br></br>
        {this.props.wedding_date}<br></br>
        {this.props.primary_color}<br></br>
        {this.props.secondary_color}<br></br>
        {this.props.header_color}<br></br>
        {this.props.primary_background_color}<br></br>
        {this.props.secondary_background_color}<br></br>
        {this.props.header_font}<br></br>
        {this.props.primary_font}<br></br>
        {this.props.secondary_font}<br></br>
        {this.props.header_font_size}<br></br>
        {this.props.primary_font_size}<br></br>
        {this.props.secondary_font_size}<br></br>
        {this.props.primary_font_letterspacing}<br></br>
        {this.props.secondary_font_letterspacing}<br></br>
        {this.props.header_font_letterspacing}


      </div>

    )
  }
}
