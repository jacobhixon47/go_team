class AddMemberIdsToChannels < ActiveRecord::Migration[5.0]
  def change
    add_column :channels, :member_ids, :integer, array: true, default: []
  end
end
