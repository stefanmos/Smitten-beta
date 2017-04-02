class Invite < ApplicationRecord
  has_many :agendas, dependent: :destroy
  belongs_to :user
  validates_uniqueness_of :user_id, :message => "User can only have one Invite"
  validates :user_id, presence: true

  has_attached_file :header_image, styles: { large: "2880x1610", medium: "1440x805", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :header_image, content_type: /\Aimage\/.*\z/

  has_attached_file :bride_image, styles: { small: "300x300", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :bride_image, content_type: /\Aimage\/.*\z/

  has_attached_file :groom_image, styles: { small: "300x300", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :groom_image, content_type: /\Aimage\/.*\z/
end
