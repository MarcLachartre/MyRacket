# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_31_153014) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "racketreviews", force: :cascade do |t|
    t.integer "rating"
    t.text "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.bigint "racket_id"
    t.integer "confortrating"
    t.integer "powerrating"
    t.integer "controlrating"
    t.integer "precisionrating"
    t.index ["racket_id"], name: "index_racketreviews_on_racket_id"
    t.index ["user_id"], name: "index_racketreviews_on_user_id"
  end

  create_table "rackets", force: :cascade do |t|
    t.integer "headsize"
    t.float "length"
    t.integer "weight"
    t.integer "swingweight"
    t.integer "power"
    t.integer "confort"
    t.integer "vibration"
    t.integer "sweetzone"
    t.integer "yearoffabrication"
    t.float "price"
    t.string "brand"
    t.string "model"
    t.string "color"
    t.string "material"
    t.boolean "kid"
    t.string "players"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "control"
    t.integer "precision"
    t.integer "stiffness"
    t.boolean "adult"
    t.float "balance"
    t.string "string_pattern"
    t.string "description"
    t.string "play_type"
    t.string "strength"
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
    t.string "rank"
    t.integer "level"
    t.string "country"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "username"
    t.text "description"
    t.integer "admin", default: 0
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "racketreviews", "rackets"
  add_foreign_key "racketreviews", "users"
  add_foreign_key "userrackets", "rackets"
  add_foreign_key "userrackets", "users"
end
