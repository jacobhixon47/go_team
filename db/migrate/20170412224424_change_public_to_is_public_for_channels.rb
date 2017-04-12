class ChangePublicToIsPublicForChannels < ActiveRecord::Migration[5.0]
  def change
    remove_column :channels, :public
    add_column :channels, :is_public, :boolean
  end
end
