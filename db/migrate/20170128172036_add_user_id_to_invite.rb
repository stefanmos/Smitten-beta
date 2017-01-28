class AddUserIdToInvite < ActiveRecord::Migration[5.0]
  def change
    add_column :invites, :user_id, :integer
  end
end
