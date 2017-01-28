'use strict'

import React from 'react'
import { SketchPicker } from 'react-color'

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: this.props.color,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  render() {

    const styles = ({
      'default': {
        color: {
          width: '20px',
          height: '20px',
          borderRadius: '1.5px',
          background: this.props.color,
        },
        swatch: {
          borderRadius: '1.5px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <SketchPicker disableAlpha color={ this.props.color } onChange={this.props.update} presetColors={['#FFB9B9', '#FFD5B8', '#ABF6C7', '#B9EEFF']}/>
        </div> : null }

      </div>
    )
  }
}

export default ColorPicker
