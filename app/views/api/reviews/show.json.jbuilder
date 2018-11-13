json.review do
  json.partial! 'review', review: @review
end

json.author do
  json.partial! '/api/users/user', user: @review.author
  json.user User.find(@review.author_id)
end

