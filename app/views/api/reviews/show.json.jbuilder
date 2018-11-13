json.review do
  json.partial! 'review', review: @review
end

json.author do
  json.partial! '/api/users/user', user: @review.author
end

