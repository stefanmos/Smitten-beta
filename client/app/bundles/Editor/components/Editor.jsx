import React, { PropTypes } from 'react';
import Preview from '../components/Preview';
import MenuHome from '../components/menu/MenuHome';
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
      header_font_size: this.props.invite.header_font_size,
      primary_font_size: this.props.invite.primary_font_size,
      secondary_font_size: this.props.invite.secondary_font_size,
      primary_font_letterspacing: this.props.invite.primary_font_letterspacing,
      secondary_font_letterspacing: this.props.invite.secondary_font_letterspacing,
      header_font_letterspacing: this.props.invite.header_font_letterspacing,
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
      menuHome: 'hide',
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

  /* POST REQUEST TO RAILS API */
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

  /* HANDLE INPUTBOX CHANGES REFACTORED FROM https://goo.gl/9BbiUH */
  _handleChange(e) {
    var styleProperty = e.target.getAttribute('data-style-property')
    var styleValue = e.target.value
    this.setState({[styleProperty]: styleValue});
  }

  /* HANDLE IMAGE CHANGES */
  _handleImageChange(e) {
    e.preventDefault();

    var styleProperty = e.target.getAttribute('data-style-property')
    var stylePropertyFile = styleProperty + '_file'
    var stylePropertyUrl = styleProperty + '_url'


    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({[stylePropertyFile]: file, [stylePropertyUrl]: reader.result })
    }

    reader.readAsDataURL(file)
  }

  /* HANDLE COLORPICKER CHANGES - NEEDS TO REFACTORED!!!!! */
  _handlePrimaryColor = (color) => {this.setState({ primary_color: color.hex })}
  _handleSecondaryColor = (color) => {this.setState({ secondary_color: color.hex })}
  _handleHeaderColor = (color) => {this.setState({ header_color: color.hex })}
  _handlePrimaryBackgroundColor = (color) => {this.setState({ primary_background_color: color.hex })}
  _handleSecondaryBackgroundColor = (color) => {this.setState({ secondary_background_color: color.hex })}

/* MENU */
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

    this.setState({[styleProperty]: '', menuToggle: ''});
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

            <MenuHome menuHomeState={this.state.menuHome}/>

            <div className={this.state.menuEdit}>

              <label>Primary Color</label>
              <input className="color-picker" name="invite[primary_color]" readOnly value={this.state.primary_color}/>
              <span className="color-block"><ColorPicker color={this.state.primary_color} update={this._handlePrimaryColor.bind(this)}/></span>

              <label>Secondary Color</label>
              <input className="color-picker" name="invite[secondary_color]" readOnly value={this.state.secondary_color}/>
              <span className="color-block"><ColorPicker color={this.state.secondary_color} update={this._handleSecondaryColor.bind(this)}/></span>

              <label>Primary Background Color</label>
              <input className="color-picker" name="invite[primary_background_color]" readOnly value={this.state.primary_background_color}/>
              <span className="color-block"><ColorPicker color={this.state.primary_background_color} update={this._handlePrimaryBackgroundColor.bind(this)}/></span>

              <label>Secondary Background Font</label>
              <input className="color-picker" name="invite[secondary_background_color]" readOnly value={this.state.secondary_background_color}/>
              <span className="color-block"><ColorPicker color={this.state.secondary_background_color} update={this._handleSecondaryBackgroundColor.bind(this)}/></span>

              <label>Primary Font</label>
              <select name="invite[primary_font]" type="text" data-style-property="primary_font" defaultValue={this.state.primary_font} onChange={this._handleChange.bind(this)}>
                <option value="Didot">Didot</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Baskerville">Baskerville</option>
                <option value="Courier">Courier</option>
                <option value="Avenir">Avenir</option>
                <option value="Oswald">Oswald</option>
                <option value="Rubik">Rubik</option>
              </select>

              <label>Primary Font Size</label>
              <span className="input-slider">
                <label>{this.state.primary_font_size}<i> px</i></label>
                <input name="invite[primary_font_size]" type="range" data-style-property="primary_font_size" min="30" max="150" defaultValue={this.state.primary_font_size} onChange={this._handleChange.bind(this)}/>
              </span>

              <label>Primary Font Letterspacing</label>
              <span className="input-slider">
                <label>{this.state.primary_font_letterspacing}<i> px</i></label>
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
                <option value="Rubik">Rubik</option>
              </select>

              <label>Secondary Font Size</label>
              <span className="input-slider">
                <label>{this.state.secondary_font_size}<i> px</i></label>
                <input name="invite[secondary_font_size]" type="range" data-style-property="secondary_font_size" min="6" max="100" defaultValue={this.state.secondary_font_size} onChange={this._handleChange.bind(this)}/>
              </span>

              <label>Secondary Font Letterspacing</label>
              <span className="input-slider">
                <label>{this.state.secondary_font_letterspacing}<i> px</i></label>
                <input name="invite[secondary_font_letterspacing]" type="range" data-style-property="secondary_font_letterspacing" min="-4" max="150" defaultValue={this.state.secondary_font_letterspacing} onChange={this._handleChange.bind(this)}/>
              </span>

            </div>


            <div className={this.state.menuHeader}>
              <label>Header Title</label>
              <input name="invite[header_title]" type="text" data-style-property="header_title" defaultValue={this.state.header_title} onChange={this._handleChange.bind(this)}/>

              <label>Wedding Date</label>
              <input name="invite[wedding_date]" type="text" data-style-property="wedding_date" defaultValue={this.state.wedding_date} onChange={this._handleChange.bind(this)}/>

              <label>Header Color</label>
              <input className="color-picker" name="invite[header_color]" readOnly value={this.state.header_color}/>
              <span className="color-block"><ColorPicker color={this.state.header_color} update={this._handleHeaderColor.bind(this)}/></span>

              <label>Header Image</label>
              <input className="picture-input custom-file-input" name="invite[header_image]" type="file" data-style-property="header_image" defaultValue={this.state.header_image} onChange={(e)=>this._handleImageChange(e)}/>
              <span className="image-block" style={{backgroundImage: "url(" + this.state.header_image_url + ")"}}></span>

              <label>Header Font Family</label>
              <select name="invite[header_font]" type="text" data-style-property="header_font" defaultValue={this.state.header_font} onChange={this._handleChange.bind(this)}>
                <option value="Didot">Didot</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Baskerville">Baskerville</option>
                <option value="Courier">Courier</option>
                <option value="Avenir">Avenir</option>
                <option value="Oswald">Oswald</option>
                <option value="Rubik">Rubik</option>
              </select>

              <label>Header Font Size</label>
              <span className="input-slider">
                <label>{this.state.header_font_size}<i> px</i></label>
                <input name="invite[header_font_size]" type="range" data-style-property="header_font_size" min="30" max="150" defaultValue={this.state.header_font_size} onChange={this._handleChange.bind(this)}/>
              </span>

              <label>Header Font Letterspacing</label>
              <span className="input-slider">
                <label>{this.state.header_font_letterspacing}<i> px</i></label>
                <input name="invite[header_font_letterspacing]" type="range" data-style-property="header_font_letterspacing" min="-4" max="150" defaultValue={this.state.header_font_letterspacing} onChange={this._handleChange.bind(this)}/>
              </span>

            </div>

            <div className={this.state.menuStory}>
              <label>STORY</label> <br/><br/>

              <label>Bride Name</label>
              <input name="invite[bride_name]" type="text" data-style-property="bride_name" defaultValue={this.state.bride_name} onChange={this._handleChange.bind(this)}/>

              <label>Bride Description</label>
              <textarea name="invite[bride_description]" type="text" data-style-property="bride_description" defaultValue={this.state.bride_description} onChange={this._handleChange.bind(this)}/>

              <label>Bride Image</label>
              <input className="picture-input custom-file-input" name="invite[bride_image]" type="file" data-style-property="bride_image" defaultValue={this.state.bride_image} onChange={(e)=>this._handleImageChange(e)}/>
              <span className="image-block" style={{backgroundImage: "url(" + this.state.bride_image_url + ")"}}></span>

              <label>Groom Name</label>
              <input name="invite[groom_name]" type="text" data-style-property="groom_name" defaultValue={this.state.groom_name} onChange={this._handleChange.bind(this)}/>

              <label>Groom Description</label>
              <textarea name="invite[groom_description]" type="text" data-style-property="groom_description" defaultValue={this.state.groom_description} onChange={this._handleChange.bind(this)}/>

              <label>Groom Image</label>
              <input className="picture-input custom-file-input" name="invite[groom_image]" type="file" data-style-property="groom_image" defaultValue={this.state.groom_image} onChange={(e)=>this._handleImageChange(e)}/>
              <span className="image-block" style={{backgroundImage: "url(" + this.state.groom_image_url + ")"}}></span>

              <label>Story Title</label>
              <input name="invite[story_title]" type="text" data-style-property="story_title" defaultValue={this.state.story_title} onChange={this._handleChange.bind(this)}/>

              <label>Story Description</label>
              <textarea name="invite[story_description]" type="text" data-style-property="story_description" defaultValue={this.state.story_description} onChange={this._handleChange.bind(this)}/>

            </div>

            <div className={this.state.menuGallery}>
              <label>GALLERY</label> <br/><br/>

              <label>Gallery Image</label>
              <input className="picture-input custom-file-input" type="file" />
              <span className="image-block"></span>

              <label>Gallery Image</label>
              <input className="picture-input custom-file-input" type="file" />
              <span className="image-block"></span>

              <label>Gallery Image</label>
              <input className="picture-input custom-file-input" type="file" />
              <span className="image-block"></span>

              <a className="button">Add +</a>
            </div>

            <div className={this.state.menuBrGr}>
              <label>BRIDESMAIDS & GROOMSMEN</label> <br/><br/>

              <label>Bridesmaid Name</label>
              <input type="text"/>
              <label>Bridesmaid Image</label>
              <input className="picture-input" type="file" />
              <span className="image-block"></span>

              <label>Groomsmen Name</label>
              <input type="text"/>
              <label>Groomsmen Image</label>
              <input className="picture-input" type="file" />
              <span className="image-block"></span>

              <a className="button">Add +</a>

            </div>

            <div className={this.state.menuMenu}>
              <label>Menu</label>

              <label>Item</label>
              <input type="text" placeholder="Item"/>

              <label>Description</label>
              <input type="text" placeholder="Description"/>

              <a className="button">Add +</a>
            </div>

            <div className={this.state.menuScedule}>
              <label>SCHEDULE</label> <br/><br/>

              <label>Item</label>
              <input type="text" placeholder="Reception"/>

              <label>Time</label>
              <input type="text" placeholder="10h00"/>

              <a className="button">Add +</a>
            </div>

            <div className={this.state.menuVenue}>
              <label>VENUE</label> <br/><br/>

              <label>Venue Name</label>
              <input name="invite[venue_name]" type="text" data-style-property="venue_name" defaultValue={this.state.venue_name} onChange={this._handleChange.bind(this)}/>

              <label>Venue Description</label>
              <textarea name="invite[venue_description]" type="text" data-style-property="venue_description" defaultValue={this.state.venue_description} onChange={this._handleChange.bind(this)}/>

              <label>Venue Coordinates</label>
              <input name="invite[venue_coordinates]" type="text" data-style-property="venue_coordinates" defaultValue={this.state.venue_coordinates} onChange={this._handleChange.bind(this)}/>

            </div>

            <div className={this.state.menuRSVP}>

              <label>RSVP Password <br/>(Guest Security Code eg: 8956)</label>
              <input type="text" placeholder="Security Code"/>

            </div>

            <div className={this.state.menuGiftReg}>
              <label>GIFT REGISTRY</label> <br/><br/>

              <label>Registry Name</label>
              <input disabled type="text" placeholder="Registry Name"/>

              <label>Registry Link</label>
              <input disabled type="text" placeholder="Registry Link"/>

              <a className="button">Add +</a>
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
