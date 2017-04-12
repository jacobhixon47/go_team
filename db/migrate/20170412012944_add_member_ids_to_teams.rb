class AddMemberIdsToTeams < ActiveRecord::Migration[5.0]
  def change
    add_column :teams, :member_ids, :integer, array: true, default: []
  end
end
