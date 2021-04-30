class Racket < ApplicationRecord
  validates :brand, presence: true
  validates :model, presence: true
  validates :headsize, presence: true
  validates :length, presence: true
  validates :weight, presence: true
  validates :balance, presence: true
  validates :swingweight, presence: true
  validates_inclusion_of :kid, in: [true, false]
  validates_inclusion_of :adult, in: [true, false]
  validates :play_type, presence: true
  validates :description, presence: true
  validates :stiffness, presence: true
  validates :players, presence: true, length: { maximum: 35,
    too_long: "%{count} characters is the maximum allowed" }

  has_many :userrackets, foreign_key: :racket_id, class_name: 'Userracket', dependent: :destroy
  has_many :users, through: :userrackets

  has_many :racketreviews, foreign_key: :racket_id, class_name: 'Racketreview', dependent: :destroy
  has_many :users, through: :racketreviews

  scope :all_unique_brands, ->  do 
    distinct.pluck(:brand)
  end

  scope :brand_or_model_search, -> (qs) do
    racket_table = Arel::Table.new(:rackets)
    if qs[:models] == []
      where("brand LIKE ?", "%" + qs[:brands].join(' ') + "%")
    else
      qs[:models] = qs[:models].map{|m| "%" + m + "%"}
      where("brand LIKE ?", "%" + qs[:brands].join(' ') + "%").and(where( racket_table[:model].matches_all(qs[:models])))
    end
  end 
  
  scope :quick_search_filter, -> (quick_search_params) do
    brand_model_params = ParamManipulation::Params.new().brand_model_split(quick_search_params) # poros folder in models folder
    self.brand_or_model_search(brand_model_params)
  end

  scope :checkbox_filter, -> (checkbox_params) do
    formated_checkbox_params = ParamManipulation::Params.new().filter_params_formating(checkbox_params) # poros folder in models folder
    where(formated_checkbox_params)
  end

  scope :ordered_amount_to_display, -> (amount, rows_to_skip) do 
    limit(amount).offset(rows_to_skip).order(:brand, :model, :id)
  end
end



    # if qs.length <= 1
    #   p 1
    # p qs = qs.join(' ')
    # p find_by_sql(p ['SELECT * FROM rackets WHERE brand LIKE ? OR model LIKE ? ', '%' + qs + '%', '%' + qs + '%'])
    # else
    #   p 2
    #   qs = qs.join(' ')
    # p qs = qs.gsub(/[ ]/, '%')
    # p find_by_sql(p ['SELECT * FROM rackets WHERE brand LIKE ? OR model LIKE ? ', qs, qs])
    # end
    # p qs = qs.map{|e| '%' + e.gsub(/[ ]/, '%') + '%'}

    # p find_by_sql(p ['SELECT * FROM rackets WHERE brand LIKE ? OR model LIKE ? ', '%' + qs + '%', '%' + qs + '%'])
    # p qs[:qs] = qs[:qs].map{|q| "%" + q + "%"}
    # p qs[:model] = qs[:model].map{|model| "%" + model + "%"}
   
    # p select("(brand || ' ' || model) as \'brand_model\', *")
    # where(['brand_model LIKE :qs', qs])
    # p qs[:qs] = qs[:qs].map{|e| e.gsub(/\s+/, '')}
    # p  "%" + qs[:qs].join(' ').gsub(/\s+/, '') + "%"


        # p a
    # p where("brand || '' || model LIKE ?", "%" + qs[:qs].join('').gsub(/\s+/, '') + "%").to_sql
    # where((Racket.arel_table[:brand].matches_any(qs[:qs])).or(Racket.arel_table[:model].matches_any(qs[:qs])).to_sql)
    
   
    # p find_by_sql(["SELECT * FROM rackets WHERE brand LIKE ? OR model LIKE ?",
    #   '%' + qs[:brand].join(' ') + '%',
    #   '%' + qs[:model].join(' ') + '%',
    # ]).or(Racket[:brand])
  # p where('model LIKE ?', '%' + qs.join(' ') + '%')