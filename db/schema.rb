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

ActiveRecord::Schema.define(version: 2019_09_16_091202) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "rackets", force: :cascade do |t|
    t.integer "headsize"
    t.integer "length"
    t.integer "weight"
    t.float "balance"
    t.integer "swingweight"
    t.integer "verticalstringpattern"
    t.integer "horizontalstringpattern"
    t.integer "power"
    t.integer "confort"
    t.integer "vibration"
    t.integer "sweetzone"
    t.integer "yearoffabrication"
    t.integer "price"
    t.string "brand"
    t.string "model"
    t.string "color"
    t.string "material"
    t.boolean "female"
    t.boolean "male"
    t.boolean "kid"
    t.string "players"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "userrackets", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "racket_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["racket_id"], name: "index_userrackets_on_racket_id"
    t.index ["user_id"], name: "index_userrackets_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "lastname"
    t.string "email"
    t.string "rank"
    t.integer "level"
    t.boolean "admin"
    t.string "country"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "userrackets", "rackets"
  add_foreign_key "userrackets", "users"
end
