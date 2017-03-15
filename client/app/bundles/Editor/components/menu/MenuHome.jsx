import React, { PropTypes } from 'react';

export default class MenuHome extends React.Component {
  render() {

    return (
      <div className={this.props.menuHomeState}>
        <label className="label-header">Home</label>
      </div>

    )
  }
}
