class Invite < ApplicationRecord
  belongs_to :user
  validates_uniqueness_of :user_id, :message => "User can only have one Invite"
  validates :user_id, presence: true
end
