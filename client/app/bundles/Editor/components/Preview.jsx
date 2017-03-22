import React, { PropTypes } from 'react';
import Map from '../components/Map';

export default class Preview extends React.Component {
  render() {

    var styles = {
    fontPrimary: {
      fontSize: this.props.primary_font_size,
      letterSpacing: this.props.primary_font_letterspacing,
      fontFamily: this.props.primary_font,
      textTransform: "uppercase",
    },
    fontSecondary: {
      fontSize: this.props.secondary_font_size,
      letterSpacing: this.props.secondary_font_letterspacing,
      fontFamily: this.props.secondary_font,
      textTransform: "uppercase",
    },
    fontParagraph: {
      fontFamily: this.props.secondary_font,
      fontSize: "14px",
      lineHeight: "18px",
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
      webkitBoxShadow: "0px 5px 15px -6px rgba(0,0,0,0.2)",
      mozBoxShadow: "0px 5px 15px -6px rgba(0,0,0,0.2)",
      boxShadow: "0px 5px 15px -6px rgba(0,0,0,0.2)",
    },
    groom_profile: {
      display: "block",
      width: 150,
      height: 150,
      borderRadius: 150,
      backgroundSize: "cover",
      backgroundImage: "url(" + this.props.groom_image_url + ")",
      margin: "auto",
      webkitBoxShadow: "0px 5px 15px -6px rgba(0,0,0,0.2)",
      mozBoxShadow: "0px 5px 15px -6px rgba(0,0,0,0.2)",
      boxShadow: "0px 5px 15px -6px rgba(0,0,0,0.2)",
    },
    bridesmaidsgroomsmen_profile: {
      display: "block",
      width: 90,
      height: 90,
      borderRadius: 90,
      backgroundSize: "cover",
      backgroundColor: "gray",
      backgroundImage: "url(" + this.props.bride_image_url + ")",
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
          <h4 style={styles.fontPrimary}>will be getting married {this.props.wedding_date}</h4>
        </div>

        <div style={styles.intro}>
          <div className="grid">
            <div className="column-6-12">
              <div style={styles.bride_profile}></div>
              <h3 style={styles.fontPrimary}>{this.props.bride_name}</h3>
              <p style={styles.fontParagraph}>{this.props.bride_description}</p>
              <hr style={{borderColor: this.props.primary_color}}></hr>
            </div>
            <div className="column-6-12">
              <div style={styles.groom_profile}></div>
              <h3 style={styles.fontPrimary}>{this.props.groom_name}</h3>
              <p style={styles.fontParagraph}>{this.props.groom_description}</p>
              <hr style={{borderColor: this.props.primary_color}}></hr>
            </div>
            <div className="column-12-12">
              <h3 style={styles.fontPrimary}>{this.props.story_title}</h3>
              <p style={styles.fontParagraph}>{this.props.story_description}</p>
            </div>
          </div>
        </div>

        <div style={styles.bridesmaidsGroomsmen}>
          <div className="grid">

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

        </div>

        <div style={styles.venue}>
          <div className="grid">
            <h1 style={styles.fontPrimary}>SCEDULE</h1>
              <div className="column-6-12">
                Welcome Drinks
              </div>
              <div className="column-6-12">
                13:00
              </div>
              <div className="column-6-12">
                Serimony
              </div>
              <div className="column-6-12">
                14:00
              </div>
              <div className="column-6-12">
                Photoshoot
              </div>
              <div className="column-6-12">
                13:00
              </div>
              <div className="column-6-12">
                Reception
              </div>
              <div className="column-6-12">
                14:00
              </div>

          </div>
        </div>

        <div style={styles.bridesmaidsGroomsmen}>
          <div className="grid">
            <h1 style={styles.fontPrimary}>FOOD</h1>
              <div className="column-4-12">
                <p>Starter</p>
                <ul>
                  <li>Lorem</li>
                  <li>Ipsum</li>
                </ul>
              </div>
              <div className="column-4-12">
                <p>Main</p>
                  <ul>
                    <li>Lorem</li>
                    <li>Ipsum</li>
                  </ul>
              </div>
              <div className="column-4-12">
                <p>Deserts</p>
                  <ul>
                    <li>Lorem</li>
                    <li>Ipsum</li>
                  </ul>
              </div>
          </div>
        </div>





        <div style={styles.venue}>
          <h1 style={styles.fontPrimary}>VENUE</h1>

          <h3 style={styles.fontSecondary}>{this.props.venue_name}</h3>
          <p style={styles.fontParagraph}>{this.props.venue_description}</p>
          <p style={styles.fontParagraph}>Open in Google Maps</p>
          <a className="button-md" href="https://www.google.co.za/maps/place/Somerset+West,+Cape+Town/@,13z/data=!3m1!4b1!4m5!3m4!1s0x1dcdb565fbc4f737:0x42f889f307a16bb9!8m2!3d-34.0756899!4d18.8432656?hl=en">Open</a>



        </div>

        <Map
          venue_name={this.props.venue_name}
          coordinates={this.props.venue_coordinates}
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

        <div style={styles.bridesmaidsGroomsmen}>
          <h1 style={styles.fontPrimary}>REGISTRY</h1>
          <p style={styles.fontParagraph}>You can donate to the following registries</p>
          <a className="button-md">@Home</a>
          <a className="button-md">Woolworths</a>
          <a className="button-md">Mr Price Home</a>

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
