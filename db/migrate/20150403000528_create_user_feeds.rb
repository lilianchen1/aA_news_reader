class CreateUserFeeds < ActiveRecord::Migration
  def change
    create_table :user_feeds do |t|
      t.references :user, index: true
      t.references :feed, index: true

      t.timestamps
    end
  end
end
