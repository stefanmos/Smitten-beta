class AddAttachmentHeaderImageToInvites < ActiveRecord::Migration
  def self.up
    change_table :invites do |t|
      t.attachment :header_image
    end
  end

  def self.down
    remove_attachment :invites, :header_image
  end
end
