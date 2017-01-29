class CreateInvites < ActiveRecord::Migration[5.0]
  def change
    create_table :invites do |t|
      t.string  :header_title
      t.string  :wedding_date

      t.string  :primary_color
      t.string  :secondary_color
      t.string  :header_color
      t.string  :primary_background_color
      t.string  :secondary_background_color

      t.string  :header_font
      t.string  :primary_font
      t.string  :secondary_font

      t.string  :header_font_size
      t.string  :primary_font_size
      t.string  :secondary_font_size

      t.string  :primary_font_letterspacing
      t.string  :secondary_font_letterspacing
      t.string  :header_font_letterspacing

      t.string  :bride_name
      t.text    :bride_description
      t.string  :groom_name
      t.text    :groom_description

      t.string  :story_title
      t.string  :story_description

      t.string  :venue_name
      t.text    :venue_description
      t.string  :venue_coordinates

      t.timestamps
    end
  end
end
