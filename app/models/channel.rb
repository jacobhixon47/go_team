class Channel < ApplicationRecord
  validates :name, presence: true
  
  has_many :messages
  belongs_to :team
end
