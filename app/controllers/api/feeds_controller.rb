class Api::FeedsController < ApplicationController
  def index
    @feeds = Feed.all
    @current_user = current_user
  end

  def show
    render :json => Feed.find(params[:id]), include: :latest_entries
  end

  def create
    feed = Feed.find_or_create_by_url(feed_params[:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  def destroy
    feed = Feed.find(params[:id])
    feed.destroy
    render :json => feed
  end

  def favorite
    if favorite = UserFeed.find_by(user: current_user, feed_id: params[:id])
      favorite.destroy
    else
      UserFeed.create(user: current_user, feed_id: params[:id])
    end
    render json: Feed.all
  end

  private

  def feed_params
    params.require(:feed).permit(:title, :url)
  end
end
