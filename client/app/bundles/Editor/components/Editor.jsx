import React, { PropTypes } from 'react';
import Preview from '../components/Preview';
import ColorPicker from '../components/ColorPicker';

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: this.props,
      header_title: this.props.header_title,
      wedding_date: this.props.wedding_date,
      primary_color: this.props.primary_color,
      secondary_color: this.props.secondary_color,
      header_color: this.props.header_color,
      primary_background_color: this.props.primary_background_color,
      secondary_background_color: this.props.secondary_background_color,
      header_font: this.props.header_font,
      primary_font: this.props.primary_font,
      secondary_font: this.props.secondary_font,
      header_font_size: this.props.header_font_size + "px",
      primary_font_size: this.props.primary_font_size + "px",
      secondary_font_size: this.props.secondary_font_size + "px",
      primary_font_letterspacing: this.props.primary_font_letterspacing + "px",
      secondary_font_letterspacing: this.props.secondary_font_letterspacing + "px",
      header_font_letterspacing: this.props.header_font_letterspacing + "px",
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
       url: ("/invites/" + this.props.id),
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
              <a className="button" href={"/invites/" + this.props.id}>View</a>
            </div>

            <div className={this.state.menuHome}>
              <label className="label-header">Home</label>
            </div>

            <div className={this.state.menuEdit}>
              <label>Header Font Family</label>
              <select name="invite[header_font]" type="text" data-style-property="header_font" defaultValue={this.props.header_font} onChange={this._handleChange.bind(this)}>
                <option value="Didot">Didot</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Baskerville">Baskerville</option>
                <option value="Courier">Courier</option>
                <option value="Avenir">Avenir</option>
              </select>

              <label>Primary Font</label>
              <select name="invite[primary_font]" type="text" data-style-property="primary_font" defaultValue={this.props.primary_font} onChange={this._handleChange.bind(this)}>
                <option value="Didot">Didot</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Baskerville">Baskerville</option>
                <option value="Courier">Courier</option>
                <option value="Avenir">Avenir</option>
              </select>

              <label>Secondary Font</label>
              <select name="invite[secondary_font]" type="text" data-style-property="secondary_font" defaultValue={this.props.secondary_font} onChange={this._handleChange.bind(this)}>
                <option value="Didot">Didot</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Baskerville">Baskerville</option>
                <option value="Courier">Courier</option>
                <option value="Avenir">Avenir</option>
              </select>

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

              <label>Header Font Size</label>
              <span className="input-slider">
                <label>{this.state.header_font_size}</label>
                <input name="invite[header_font_size]" type="range" data-style-property="header_font_size" min="30" max="150" defaultValue={this.props.header_font_size} onChange={this._handleChange.bind(this)}/>
              </span>

              <label>Secondary Font Size</label>
              <span className="input-slider">
                <label>{this.state.primary_font_size}</label>
                <input name="invite[primary_font_size]" type="range" data-style-property="primary_font_size" min="30" max="150" defaultValue={this.props.primary_font_size} onChange={this._handleChange.bind(this)}/>
              </span>

              <label>Secondary Font Size</label>
              <span className="input-slider">
                <label>{this.state.secondary_font_size}</label>
                <input name="invite[secondary_font_size]" type="range" data-style-property="secondary_font_size" min="30" max="150" defaultValue={this.props.secondary_font_size} onChange={this._handleChange.bind(this)}/>
              </span>

              <label>Primary Font Letterspacing</label>
              <span className="input-slider">
                <label>{this.state.primary_font_letterspacing}</label>
                <input name="invite[primary_font_letterspacing]" type="range" data-style-property="primary_font_letterspacing" min="-4" max="150" defaultValue={this.props.primary_font_letterspacing} onChange={this._handleChange.bind(this)}/>
              </span>

              <label>Secondary Font Letterspacing</label>
              <span className="input-slider">
                <label>{this.state.secondary_font_letterspacing}</label>
                <input name="invite[secondary_font_letterspacing]" type="range" data-style-property="secondary_font_letterspacing" min="-4" max="150" defaultValue={this.props.secondary_font_letterspacing} onChange={this._handleChange.bind(this)}/>
              </span>

              <label>Header Font Letterspacing</label>
              <span className="input-slider">
                <label>{this.state.header_font_letterspacing}</label>
                <input name="invite[header_font_letterspacing]" type="range" data-style-property="header_font_letterspacing" min="-4" max="150" defaultValue={this.props.header_font_letterspacing} onChange={this._handleChange.bind(this)}/>
              </span>

            </div>


            <div className={this.state.menuHeader}>
              <label>Header Title</label>
              <input name="invite[header_title]" type="text" data-style-property="header_title" defaultValue={this.props.header_title} onChange={this._handleChange.bind(this)}/>

              <label>Wedding Date</label>
              <input name="invite[wedding_date]" type="text" data-style-property="wedding_date" defaultValue={this.props.wedding_date} onChange={this._handleChange.bind(this)}/>
            </div>

            <div className={this.state.menuStory}>
              <label>Story</label>
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
        />

      </div>

    )
  }
}
