class CreateChannels < ActiveRecord::Migration[5.0]
  def change
    create_table :channels do |t|
      t.column :name, :string
      t.column :team_id, :integer
      t.column :public, :boolean

      t.timestamps
    end
  end
end
