import React, { PropTypes } from 'react';

export default class Preview extends React.Component {
  render() {

    var styles = {
    header: {
      backgroundColor: this.props.header_color,
      backgroundImage: "url(" + this.props.header_image_url + ")",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      color: this.props.primary_color,
      padding: "20vh 5%",
      textAlign: "center",
    },
    intro: {
      padding: "10vh 5%",
      textAlign: "center",
      fontFamily: this.props.primary_font,
      color: this.props.secondary_color,
      backgroundColor: this.props.primary_background_color,
    },
    bridesmaidsGroomsmen: {
      backgroundColor: this.props.secondary_background_color,
      padding: "10vh 5%",
      textAlign: "center",
      fontFamily: this.props.secondary_font,
      color: this.props.primary_color,
    },
    bride_profile: {
      display: "block",
      width: 200,
      height: 200,
      borderRadius: 200,
      backgroundSize: "cover",
      backgroundImage: "url(" + this.props.bride_image_url + ")",
      margin: "auto",
    },
    groom_profile: {
      display: "block",
      width: 200,
      height: 200,
      borderRadius: 200,
      backgroundSize: "cover",
      backgroundImage: "url(" + this.props.groom_image_url + ")",
      margin: "auto",
    }
}
    return (

      <div id="preview">

        <div style={styles.header}>
          <h1 style={{fontFamily: this.props.header_font, lineHeight: this.props.header_font_size, letterSpacing: this.props.header_font_letterspacing, fontSize: this.props.header_font_size}} >{this.props.header_title}</h1>
          <hr style={{borderColor: this.props.primary_color}}></hr>
          <h4 style={{textTransform: "uppercase", fontWeight: "500"}}>will be getting married {this.props.wedding_date}</h4>

            {this.props.wedding_date} |
            {this.props.primary_color} |
            {this.props.secondary_color} |
            {this.props.header_color} |
            {this.props.primary_background_color} |
            {this.props.secondary_background_color} |
            {this.props.header_font} |
            {this.props.primary_font} |
            {this.props.secondary_font} |
            {this.props.header_font_size} |
            {this.props.primary_font_size} |
            {this.props.secondary_font_size} |
            {this.props.primary_font_letterspacing} |
            {this.props.secondary_font_letterspacing} |
            {this.props.header_font_letterspacing} |
            {this.props.bride_name} |
            {this.props.bride_description} |
            {this.props.groom_name} |
            {this.props.groom_description} |
            {this.props.story_title} |
            {this.props.story_description}
            {this.props.venue_name} |
            {this.props.venue_description} |
            {this.props.venue_coordinates}
        </div>

        <div style={styles.intro}>
          <div className="grid brideandgroom">
            <div className="column-6-12">
              <div style={styles.bride_profile}></div>
              <h3>{this.props.bride_name}</h3>
              <p>{this.props.bride_description}</p>
            </div>
            <div className="column-6-12">
              <div style={styles.groom_profile}></div>
              <h3>{this.props.groom_name}</h3>
              <p>{this.props.groom_description}</p>
            </div>
            <div className="column-12-12">
              <h3>{this.props.story_title}</h3>
              <p>{this.props.story_description}</p>
            </div>
          </div>
        </div>

        <div style={styles.bridesmaidsGroomsmen}>
          <h1>BRIDESMAIDS & GROOMSMEN</h1>
        </div>

      </div>

    )
  }
}
