import React, { PropTypes } from 'react';
import Preview from '../components/Preview';
import ColorPicker from '../components/ColorPicker';

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: this.props.invite,
      header_title: this.props.invite.header_title,
      wedding_date: this.props.invite.wedding_date,
      primary_color: this.props.invite.primary_color,
      secondary_color: this.props.invite.secondary_color,
      header_color: this.props.invite.header_color,
      primary_background_color: this.props.invite.primary_background_color,
      secondary_background_color: this.props.invite.secondary_background_color,
      header_font: this.props.invite.header_font,
      primary_font: this.props.invite.primary_font,
      secondary_font: this.props.invite.secondary_font,
      header_font_size: this.props.invite.header_font_size + "px",
      primary_font_size: this.props.invite.primary_font_size + "px",
      secondary_font_size: this.props.invite.secondary_font_size + "px",
      primary_font_letterspacing: this.props.invite.primary_font_letterspacing + "px",
      secondary_font_letterspacing: this.props.invite.secondary_font_letterspacing + "px",
      header_font_letterspacing: this.props.invite.header_font_letterspacing + "px",
      bride_name: this.props.invite.bride_name,
      bride_description: this.props.invite.bride_description,
      groom_name: this.props.invite.groom_name,
      groom_description: this.props.invite.groom_description,
      story_title: this.props.invite.story_title,
      story_description: this.props.invite.story_description,
      venue_name: this.props.invite.venue_name,
      venue_description: this.props.invite.venue_description,
      venue_coordinates: this.props.invite.venue_coordinates,
      header_image: this.props.invite.header_image,
      header_image_file: '',
      header_image_url: this.props.header_image_url,
      bride_image: this.props.invite.bride_image,
      bride_image_file: '',
      bride_image_url: this.props.bride_image_url,
      groom_image: this.props.invite.groom_image,
      groom_image_file: '',
      groom_image_url: this.props.groom_image_url,
      menuToggle: 'hide',
      menuHome: '',
      menuEdit: 'hide',
      menuHeader: 'hide',
      menuStory: 'hide',
      menuGallery: 'hide',
      menuBrGr: 'hide',
      menuMenu: 'hide',
      menuScedule: 'hide',
      menuVenue: 'hide',
      menuRSVP: 'hide',
      menuGiftReg: 'hide',
    };
  }

  _handleSubmit(e) {
    e.preventDefault();

    var fd = $(this.refs.myForm).context;
    var formData = new FormData(fd);

    $.ajax({
       url: ("/invites/" + this.props.invite.id),
       type: 'PUT',
       data: formData,
       dataType: 'json',
       cache: false,
       contentType: false,
       processData: false,
       success: function (post, xhr) {
           alert("Successfully updated invite.");
       }.bind(this),
       error: function () {
          console.log("Error in ajax submission");
       }.bind(this),
    });
  }

  _handleChange(e) {
    var styleProperty = e.target.getAttribute('data-style-property')
    var styleValue = e.target.value

    if(styleProperty === 'header_title') this.setState({ header_title: styleValue })
    if(styleProperty === 'wedding_date') this.setState({ wedding_date: styleValue })
    if(styleProperty === 'header_font') this.setState({ header_font: styleValue })
    if(styleProperty === 'primary_font') this.setState({ primary_font: styleValue })
    if(styleProperty === 'secondary_font') this.setState({ secondary_font: styleValue })
    if(styleProperty === 'header_font_size') this.setState({ header_font_size: styleValue + "px" })
    if(styleProperty === 'primary_font_size') this.setState({ primary_font_size: styleValue + "px" })
    if(styleProperty === 'secondary_font_size') this.setState({ secondary_font_size: styleValue })
    if(styleProperty === 'primary_font_letterspacing') this.setState({ primary_font_letterspacing: styleValue + "px" })
    if(styleProperty === 'secondary_font_letterspacing') this.setState({ secondary_font_letterspacing: styleValue + "px" })
    if(styleProperty === 'header_font_letterspacing') this.setState({ header_font_letterspacing: styleValue + "px" })
    if(styleProperty === 'bride_name') this.setState({ bride_name: styleValue })
    if(styleProperty === 'bride_description') this.setState({ bride_description: styleValue })
    if(styleProperty === 'groom_name') this.setState({ groom_name: styleValue})
    if(styleProperty === 'groom_description') this.setState({ groom_description: styleValue})
    if(styleProperty === 'story_title') this.setState({ story_title: styleValue})
    if(styleProperty === 'story_description') this.setState({ story_description: styleValue })
    if(styleProperty === 'venue_name') this.setState({ venue_name: styleValue})
    if(styleProperty === 'venue_description') this.setState({ venue_description: styleValue})
    if(styleProperty === 'venue_coordinates') this.setState({ venue_coordinates: styleValue})

  }


  _handleImageChange(e) {
    e.preventDefault();

    var styleProperty = e.target.getAttribute('data-style-property')

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      if(styleProperty === 'header_image') this.setState({ header_image_file: file, header_image_url: reader.result })
      if(styleProperty === 'bride_image') this.setState({ bride_image_file: file, bride_image_url: reader.result })
      if(styleProperty === 'groom_image') this.setState({ groom_image_file: file, groom_image_url: reader.result })

    }

    reader.readAsDataURL(file)
  }

  _handlePrimaryColor = (color) => {this.setState({ primary_color: color.hex })}
  _handleSecondaryColor = (color) => {this.setState({ secondary_color: color.hex })}
  _handleHeaderColor = (color) => {this.setState({ header_color: color.hex })}
  _handlePrimaryBackgroundColor = (color) => {this.setState({ primary_background_color: color.hex })}
  _handleSecondaryBackgroundColor = (color) => {this.setState({ secondary_background_color: color.hex })}

  _menuToggle(e) {
    if(this.state.menuToggle === '') this.setState({ menuToggle: 'hide' })
    else this.setState({ menuToggle: '' })
  }

  _menuItemToggle(e) {
    var styleProperty = e.target.getAttribute('data-style-property')

    this.setState({ menuHome: 'hide',
                    menuEdit: 'hide',
                    menuHeader: 'hide',
                    menuStory: 'hide',
                    menuGallery: 'hide',
                    menuBrGr: 'hide',
                    menuMenu: 'hide',
                    menuScedule: 'hide',
                    menuVenue: 'hide',
                    menuRSVP: 'hide',
                    menuGiftReg: 'hide'})

    if(styleProperty === 'menuHome') this.setState({ menuHome: '', menuToggle: ''})
    if(styleProperty === 'menuEdit') this.setState({ menuEdit: '', menuToggle: ''})
    if(styleProperty === 'menuHeader') this.setState({ menuHeader: '', menuToggle: ''})
    if(styleProperty === 'menuStory') this.setState({ menuStory: '', menuToggle: ''})
    if(styleProperty === 'menuGallery') this.setState({ menuGallery: '', menuToggle: ''})
    if(styleProperty === 'menuBrGr') this.setState({ menuBrGr: '', menuToggle: ''})
    if(styleProperty === 'menuMenu') this.setState({ menuMenu: '', menuToggle: ''})
    if(styleProperty === 'menuScedule') this.setState({ menuScedule: '', menuToggle: ''})
    if(styleProperty === 'menuVenue') this.setState({ menuVenue: '', menuToggle: ''})
    if(styleProperty === 'menuRSVP') this.setState({ menuRSVP: '', menuToggle: ''})
    if(styleProperty === 'menuGiftReg') this.setState({ menuGiftReg: '', menuToggle: ''})
  }

  render() {
    return (

      <div id="editor-container">

        <div id="menu">
          <a className="top" onClick={(e)=>this._menuToggle(e)} className="icon-menu"></a>
          <a data-style-property="menuHome" onClick={this._menuItemToggle.bind(this) } className="icon-home" ></a>
          <a data-style-property="menuEdit" onClick={this._menuItemToggle.bind(this) } className="icon-edit" ></a>
          <a data-style-property="menuHeader" onClick={this._menuItemToggle.bind(this) } className="icon-header" ></a>
          <a data-style-property="menuStory" onClick={this._menuItemToggle.bind(this)}   className="icon-story" ></a>
          <a data-style-property="menuGallery" onClick={this._menuItemToggle.bind(this) } className="icon-gallery" ></a>
          <a data-style-property="menuBrGr" onClick={this._menuItemToggle.bind(this) } className="icon-bridemaidsandgroomsmen" ></a>
          <a data-style-property="menuMenu" onClick={this._menuItemToggle.bind(this) } className="icon-foodmenu" ></a>
          <a data-style-property="menuScedule" onClick={this._menuItemToggle.bind(this) } className="icon-schedule" ></a>
          <a data-style-property="menuVenue" onClick={this._menuItemToggle.bind(this) } className="icon-pin" ></a>
          <a data-style-property="menuRSVP" onClick={this._menuItemToggle.bind(this) } className="icon-rsvp" ></a>
          <a data-style-property="menuGiftReg" onClick={this._menuItemToggle.bind(this) } className="icon-giftregistry" ></a>
        </div>

        <div id="editor" className={this.state.menuToggle}>
          <form ref="myForm" encType="multipart/form-data">

            <div className="save">
              <a className="button" type="submit" onClick={(e)=>this._handleSubmit(e)}>Save</a>
              <a className="button" href={"/invites/" + this.props.invite.id}>View</a>
            </div>

            <div className={this.state.menuHome}>
              <label className="label-header">Home</label>

              <label>Header Image</label>
              <input className="picture-input" name="invite[header_image]" type="file" data-style-property="header_image" defaultValue={this.state.header_image} onChange={(e)=>this._handleImageChange(e)}/>
              <span className="image-block" style={{backgroundImage: "url(" + this.state.header_image_url + ")"}}></span>

              <label>Bride Image</label>
              <input className="picture-input" name="invite[bride_image]" type="file" data-style-property="bride_image" defaultValue={this.state.bride_image} onChange={(e)=>this._handleImageChange(e)}/>
              <span className="image-block" style={{backgroundImage: "url(" + this.state.bride_image_url + ")"}}></span>

              <label>Grrom Image</label>
              <input className="picture-input" name="invite[groom_image]" type="file" data-style-property="groom_image" defaultValue={this.state.groom_image} onChange={(e)=>this._handleImageChange(e)}/>
              <span className="image-block" style={{backgroundImage: "url(" + this.state.groom_image_url + ")"}}></span>

              <label>Primary Color</label>
              <input className="color-picker" name="invite[primary_color]" readOnly value={this.state.primary_color}/>
              <span className="color-block"><ColorPicker color={this.state.primary_color} update={this._handlePrimaryColor.bind(this)}/></span>

              <label>Secondary Color</label>
              <input className="color-picker" name="invite[secondary_color]" readOnly value={this.state.secondary_color}/>
              <span className="color-block"><ColorPicker color={this.state.secondary_color} update={this._handleSecondaryColor.bind(this)}/></span>

              <label>Header Color</label>
              <input className="color-picker" name="invite[header_color]" readOnly value={this.state.header_color}/>
              <span className="color-block"><ColorPicker color={this.state.header_color} update={this._handleHeaderColor.bind(this)}/></span>

              <label>Primary Color</label>
              <input className="color-picker" name="invite[primary_background_color]" readOnly value={this.state.primary_background_color}/>
              <span className="color-block"><ColorPicker color={this.state.primary_background_color} update={this._handlePrimaryBackgroundColor.bind(this)}/></span>

              <label>Primary Color</label>
              <input className="color-picker" name="invite[secondary_background_color]" readOnly value={this.state.secondary_background_color}/>
              <span className="color-block"><ColorPicker color={this.state.secondary_background_color} update={this._handleSecondaryBackgroundColor.bind(this)}/></span>

            </div>

            <div className={this.state.menuEdit}>
              <label>Header Font Family</label>
              <select name="invite[header_font]" type="text" data-style-property="header_font" defaultValue={this.state.header_font} onChange={this._handleChange.bind(this)}>
                <option value="Didot">Didot</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Baskerville">Baskerville</option>
                <option value="Courier">Courier</option>
                <option value="Avenir">Avenir</option>
                <option value="Oswald">Oswald</option>
              </select>

              <label>Header Font Size</label>
              <span className="input-slider">
                <label>{this.state.header_font_size}</label>
                <input name="invite[header_font_size]" type="range" data-style-property="header_font_size" min="30" max="150" defaultValue={this.state.header_font_size} onChange={this._handleChange.bind(this)}/>
              </span>

              <label>Header Font Letterspacing</label>
              <span className="input-slider">
                <label>{this.state.header_font_letterspacing}</label>
                <input name="invite[header_font_letterspacing]" type="range" data-style-property="header_font_letterspacing" min="-4" max="150" defaultValue={this.state.header_font_letterspacing} onChange={this._handleChange.bind(this)}/>
              </span>

              <label>Primary Font</label>
              <select name="invite[primary_font]" type="text" data-style-property="primary_font" defaultValue={this.state.primary_font} onChange={this._handleChange.bind(this)}>
                <option value="Didot">Didot</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Baskerville">Baskerville</option>
                <option value="Courier">Courier</option>
                <option value="Avenir">Avenir</option>
                <option value="Oswald">Oswald</option>
              </select>

              <label>Primary Font Size</label>
              <span className="input-slider">
                <label>{this.state.primary_font_size}</label>
                <input name="invite[primary_font_size]" type="range" data-style-property="primary_font_size" min="30" max="150" defaultValue={this.state.primary_font_size} onChange={this._handleChange.bind(this)}/>
              </span>

              <label>Primary Font Letterspacing</label>
              <span className="input-slider">
                <label>{this.state.primary_font_letterspacing}</label>
                <input name="invite[primary_font_letterspacing]" type="range" data-style-property="primary_font_letterspacing" min="-4" max="150" defaultValue={this.state.primary_font_letterspacing} onChange={this._handleChange.bind(this)}/>
              </span>

              <label>Secondary Font</label>
              <select name="invite[secondary_font]" type="text" data-style-property="secondary_font" defaultValue={this.state.secondary_font} onChange={this._handleChange.bind(this)}>
                <option value="Didot">Didot</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Baskerville">Baskerville</option>
                <option value="Courier">Courier</option>
                <option value="Avenir">Avenir</option>
                <option value="Oswald">Oswald</option>
              </select>

              <label>Secondary Font Size</label>
              <span className="input-slider">
                <label>{this.state.secondary_font_size}</label>
                <input name="invite[secondary_font_size]" type="range" data-style-property="secondary_font_size" min="30" max="150" defaultValue={this.state.secondary_font_size} onChange={this._handleChange.bind(this)}/>
              </span>

              <label>Secondary Font Letterspacing</label>
              <span className="input-slider">
                <label>{this.state.secondary_font_letterspacing}</label>
                <input name="invite[secondary_font_letterspacing]" type="range" data-style-property="secondary_font_letterspacing" min="-4" max="150" defaultValue={this.state.secondary_font_letterspacing} onChange={this._handleChange.bind(this)}/>
              </span>

            </div>


            <div className={this.state.menuHeader}>
              <label>Header Title</label>
              <input name="invite[header_title]" type="text" data-style-property="header_title" defaultValue={this.state.header_title} onChange={this._handleChange.bind(this)}/>

              <label>Wedding Date</label>
              <input name="invite[wedding_date]" type="text" data-style-property="wedding_date" defaultValue={this.state.wedding_date} onChange={this._handleChange.bind(this)}/>
            </div>

            <div className={this.state.menuStory}>
              <label>Story</label>

              <label>Bride Name</label>
              <input name="invite[bride_name]" type="text" data-style-property="bride_name" defaultValue={this.state.bride_name} onChange={this._handleChange.bind(this)}/>

              <label>Bride Description</label>
              <textarea name="invite[bride_description]" type="text" data-style-property="bride_description" defaultValue={this.state.bride_description} onChange={this._handleChange.bind(this)}/>

              <label>Groom Name</label>
              <input name="invite[groom_name]" type="text" data-style-property="groom_name" defaultValue={this.state.groom_name} onChange={this._handleChange.bind(this)}/>

              <label>Groom Description</label>
              <textarea name="invite[groom_description]" type="text" data-style-property="groom_description" defaultValue={this.state.groom_description} onChange={this._handleChange.bind(this)}/>

              <label>Story Title</label>
              <input name="invite[story_title]" type="text" data-style-property="story_title" defaultValue={this.state.story_title} onChange={this._handleChange.bind(this)}/>

              <label>Story Description</label>
              <textarea name="invite[story_description]" type="text" data-style-property="story_description" defaultValue={this.state.story_description} onChange={this._handleChange.bind(this)}/>

              <label>Venue Name</label>
              <input name="invite[venue_name]" type="text" data-style-property="venue_name" defaultValue={this.state.venue_name} onChange={this._handleChange.bind(this)}/>

              <label>Venue Description</label>
              <textarea name="invite[venue_description]" type="text" data-style-property="venue_description" defaultValue={this.state.venue_description} onChange={this._handleChange.bind(this)}/>

              <label>Venue Coordinates</label>
              <input name="invite[venue_coordinates]" type="text" data-style-property="venue_coordinates" defaultValue={this.state.venue_coordinates} onChange={this._handleChange.bind(this)}/>

            </div>

            <div className={this.state.menuGallery}>
              <label>Gallery</label>
            </div>

            <div className={this.state.menuBrGr}>
              <label>Bridesmaids & Groomsmen</label>
            </div>

            <div className={this.state.menuMenu}>
              <label>Menu</label>
            </div>

            <div className={this.state.menuScedule}>
              <label>Scedule</label>
            </div>

            <div className={this.state.menuVenue}>
              <label>Venue</label>
            </div>

            <div className={this.state.menuRSVP}>
              <label>RSVP Password (Guest Security Code)</label>
            </div>

            <div className={this.state.menuGiftReg}>
              <label>Gift Registry</label>
            </div>

          </form>
        </div>

        <Preview
          header_title={this.state.header_title}
          wedding_date={this.state.wedding_date}
          primary_color={this.state.primary_color}
          secondary_color={this.state.secondary_color}
          header_color={this.state.header_color}
          primary_background_color={this.state.primary_background_color}
          secondary_background_color={this.state.secondary_background_color}
          header_font={this.state.header_font}
          primary_font={this.state.primary_font}
          secondary_font={this.state.secondary_font}
          header_font_size={this.state.header_font_size}
          primary_font_size={this.state.primary_font_size}
          secondary_font_size={this.state.secondary_font_size}
          primary_font_letterspacing={this.state.primary_font_letterspacing}
          secondary_font_letterspacing={this.state.secondary_font_letterspacing}
          header_font_letterspacing={this.state.header_font_letterspacing}
          bride_name={this.state.bride_name}
          bride_description={this.state.bride_description}
          groom_name={this.state.groom_name}
          groom_description={this.state.groom_description}
          story_title={this.state.story_title}
          story_description={this.state.story_description}
          venue_name={this.state.venue_name}
          venue_description={this.state.venue_description}
          venue_coordinates={this.state.venue_coordinates}
          header_image_url={this.state.header_image_url}
          bride_image_url={this.state.bride_image_url}
          groom_image_url={this.state.groom_image_url}
        />

      </div>

    )
  }
}
