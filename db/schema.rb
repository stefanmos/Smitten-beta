# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170129135141) do

  create_table "invites", force: :cascade do |t|
    t.string   "header_title"
    t.string   "wedding_date"
    t.string   "primary_color"
    t.string   "secondary_color"
    t.string   "header_color"
    t.string   "primary_background_color"
    t.string   "secondary_background_color"
    t.string   "header_font"
    t.string   "primary_font"
    t.string   "secondary_font"
    t.string   "header_font_size"
    t.string   "primary_font_size"
    t.string   "secondary_font_size"
    t.string   "primary_font_letterspacing"
    t.string   "secondary_font_letterspacing"
    t.string   "header_font_letterspacing"
    t.string   "bride_name"
    t.text     "bride_description"
    t.string   "groom_name"
    t.text     "groom_description"
    t.string   "story_title"
    t.string   "story_description"
    t.string   "venue_name"
    t.text     "venue_description"
    t.string   "venue_coordinates"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.integer  "user_id"
    t.string   "header_image_file_name"
    t.string   "header_image_content_type"
    t.integer  "header_image_file_size"
    t.datetime "header_image_updated_at"
    t.string   "bride_image_file_name"
    t.string   "bride_image_content_type"
    t.integer  "bride_image_file_size"
    t.datetime "bride_image_updated_at"
    t.string   "groom_image_file_name"
    t.string   "groom_image_content_type"
    t.integer  "groom_image_file_size"
    t.datetime "groom_image_updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
