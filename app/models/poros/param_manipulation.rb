module ParamManipulation
  class Params 
    def brand_model_split(quick_search_param) # when the user makes a quick search, this function takes each word and figure out if it is the brand or the model of the racket. It returns brands and models
      all_brands = Racket.all_unique_brands
      quick_search_param = quick_search_param.split.map{|qs| qs.capitalize}
      models = []
      brands = []
      quick_search_param.each { |qs|
        all_brands.each{ |brand|
          if brand.include?(qs) && brands.size == 0 && qs.size > 1
              brands << qs
          end
        }
  
        if brands[0] != qs
          models << qs
        end
      } 
      return {brands: brands, models: models}
    end

    def filter_params_formating(checkbox_params)
      checkbox_params.each {|key, value|
        if key == :weight || key == :balance || key == :headsize
          checkbox_params[key] = value.map{|value|
            value = value.split("..")[0].to_i..value.split("..")[1].to_i
          }
        end
      }
      return checkbox_params
    end
  end
end