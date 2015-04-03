json.array! @feeds do |feed|
  json.extract! feed, :id, :url, :title
  json.favorited_by_user feed.favorited_by_user(@current_user)
end
