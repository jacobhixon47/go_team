class RemoveMemberIdsFromTeams < ActiveRecord::Migration[5.0]
  def change
    remove_column :teams, :member_ids
  end
end
