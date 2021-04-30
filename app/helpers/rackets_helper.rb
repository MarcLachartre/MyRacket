module RacketsHelper
  def next_page(current_page)
    next_page = [current_page[0]+40,40] 
    return next_page
  end

  def previous_page(current_page)
    previous_page = [current_page[0]-40,40]
    return previous_page
  end

  def all_rackets
    all_rackets = Racket.all
    return all_rackets
  end
end