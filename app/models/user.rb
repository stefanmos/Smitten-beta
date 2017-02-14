class User < ApplicationRecord
  has_one :invite, :dependent => :destroy
  before_create :create_invite

  def create_invite
    invite = build_invite(:header_title => "Bride & Groom",
                          :wedding_date => "Bride & Groom",
                          :primary_color => "#d1d1d1",
                          :secondary_color => "#bbbbbb",
                          :header_color => "#f5f5f5",
                          :primary_background_color => "#FFF",
                          :secondary_background_color => "#f5f5f5",
                          :header_font => "Baskerville",
                          :primary_font => "Baskerville",
                          :secondary_font => "Baskerville",
                          :header_font_size => "30px",
                          :primary_font_size => "80px",
                          :secondary_font_size => "10px",
                          :primary_font_letterspacing => "0px",
                          :secondary_font_letterspacing => "0px",
                          :header_font_letterspacing => "-4px",
                          :bride_name => "Bride Name",
                          :bride_description => "Bride Description",
                          :groom_name => "Groom Name",
                          :groom_description => "Groom Description",
                          :story_title => "Story",
                          :story_description => "Story Description",
                          :venue_name => "Venue Name",
                          :venue_description => "Venue Address",
                          :venue_coordinates => "-26.1363179,27.9581462"
                          )
  end
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
