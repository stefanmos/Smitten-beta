import React, { PropTypes } from 'react';
import Map from '../components/Map';

export default class Preview extends React.Component {
  render() {

    var styles = {
    fontPrimary: {
      fontSize: this.props.primary_font_size,
      letterSpacing: this.props.primary_font_letterspacing,
      fontFamily: this.props.primary_font,
    },
    fontSecondary: {
      fontSize: this.props.secondary_font_size,
      letterSpacing: this.props.secondary_font_letterspacing,
      fontFamily: this.props.secondary_font,
      textTransform: "uppercase",
    },
    fontParagraph: {
      fontFamily: this.props.secondary_font,
    },
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
      color: this.props.secondary_color,
      backgroundColor: this.props.primary_background_color,
    },
    bridesmaidsGroomsmen: {
      backgroundColor: this.props.secondary_background_color,
      padding: "10vh 5%",
      textAlign: "center",
      color: this.props.primary_color,
    },
    bride_profile: {
      display: "block",
      width: 150,
      height: 150,
      borderRadius: 150,
      backgroundSize: "cover",
      backgroundImage: "url(" + this.props.bride_image_url + ")",
      margin: "auto",
    },
    groom_profile: {
      display: "block",
      width: 150,
      height: 150,
      borderRadius: 150,
      backgroundSize: "cover",
      backgroundImage: "url(" + this.props.groom_image_url + ")",
      margin: "auto",
    },
    bridesmaidsgroomsmen_profile: {
      display: "block",
      width: 120,
      height: 120,
      borderRadius: 120,
      backgroundSize: "cover",
      backgroundColor: "gray",
      margin: "auto",
    },
    venue: {
      backgroundColor: this.props.primary_background_color,
      padding: "10vh 5%",
      textAlign: "center",
      color: this.props.secondary_color,
    },
    rsvp: {
      backgroundColor: this.props.secondary_background_color,
      padding: "10vh 20%",
      textAlign: "center",
      color: this.props.primary_color,
    }
}
    return (

      <div id="preview">

        <div id="invite">

        <div style={styles.header}>
          <h1 style={{fontFamily: this.props.header_font, letterSpacing: this.props.header_font_letterspacing, fontSize: this.props.header_font_size}} >{this.props.header_title}</h1>
          <hr style={{borderColor: this.props.primary_color}}></hr>
          <h4 style={styles.fontSecondary}>will be getting married {this.props.wedding_date}</h4>
        </div>

        <div style={styles.intro}>
          <div className="grid">
            <div className="column-6-12">
              <div style={styles.bride_profile}></div>
              <h3 style={styles.fontSecondary}>{this.props.bride_name}</h3>
              <p style={styles.fontParagraph}>{this.props.bride_description}</p>
            </div>
            <div className="column-6-12">
              <div style={styles.groom_profile}></div>
              <h3 style={styles.fontSecondary}>{this.props.groom_name}</h3>
              <p style={styles.fontParagraph}>{this.props.groom_description}</p>
            </div>
            <div className="column-12-12">
              <h3 style={styles.fontSecondary}>{this.props.story_title}</h3>
              <p style={styles.fontParagraph}>{this.props.story_description}</p>
            </div>
          </div>
        </div>

        <div style={styles.bridesmaidsGroomsmen}>

          <h1 style={styles.fontPrimary}>BRIDESMAIDS & GROOMSMEN</h1>
            <div className="column-2-12">
              <div style={styles.bridesmaidsgroomsmen_profile}></div>
            </div>
            <div className="column-2-12">
              <div style={styles.bridesmaidsgroomsmen_profile}></div>
            </div>
            <div className="column-2-12">
              <div style={styles.bridesmaidsgroomsmen_profile}></div>
            </div>
            <div className="column-2-12">
              <div style={styles.bridesmaidsgroomsmen_profile}></div>
            </div>
            <div className="column-2-12">
              <div style={styles.bridesmaidsgroomsmen_profile}></div>
            </div>
            <div className="column-2-12">
              <div style={styles.bridesmaidsgroomsmen_profile}></div>
            </div>

            <div className="clearfix"></div>

        </div>

        <div style={styles.venue}>
          <h1 style={styles.fontPrimary}>VENUE</h1>

          <h3 style={styles.fontSecondary}>{this.props.venue_name}</h3>
          <p style={styles.fontParagraph}>{this.props.venue_description}</p>
          <p style={styles.fontParagraph}>{this.props.venue_coordinates}</p>

        </div>

        <Map
          venue_name={this.props.venue_name}
          zoom={12}
        />

        <div style={styles.rsvp} className="RSVP">
          <h1 style={styles.fontPrimary}>RSVP</h1>

          <label>Name</label>
          <input disabled type="text" placeholder="Name"/>

          <label>Email</label>
          <input disabled type="text" placeholder="Email"/>

          <label>Tel</label>
          <input disabled type="text" placeholder="Tel"/>

          <label>Attending?</label>
          <input disabled type="text" placeholder="Yes"/>

          <a className="button-md">RSVP</a>

        </div>

        <div>
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

        </div>

      </div>

    )
  }
}
