class User < ApplicationRecord
  has_one :invite, :dependent => :destroy
  before_create :create_invite

  def create_invite
    invite = build_invite(:header_title => "Bride & Groom",
                          :primary_color => "#FFB9B9"
                          )
  end
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
