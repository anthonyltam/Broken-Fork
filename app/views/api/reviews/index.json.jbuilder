@reviews.each do |rev|

  json.set! rev.id do 
    json.partial! 'review', review: rev
    json.user do 
      json.extract! rev.author, :id, :email, :first_name, :last_name, :location
    end 
  end
end