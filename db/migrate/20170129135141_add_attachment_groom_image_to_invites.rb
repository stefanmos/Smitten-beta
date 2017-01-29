class AddAttachmentGroomImageToInvites < ActiveRecord::Migration
  def self.up
    change_table :invites do |t|
      t.attachment :groom_image
    end
  end

  def self.down
    remove_attachment :invites, :groom_image
  end
end
