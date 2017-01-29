class AddAttachmentBrideImageToInvites < ActiveRecord::Migration
  def self.up
    change_table :invites do |t|
      t.attachment :bride_image
    end
  end

  def self.down
    remove_attachment :invites, :bride_image
  end
end
