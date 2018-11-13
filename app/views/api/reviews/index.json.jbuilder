@reviews.each do |rev|
  json.set! rev.id do 
    json.partial! 'review', review: rev
  end
end