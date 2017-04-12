class Channel < ApplicationRecord
  validates :name, presence: true

  belongs_to :team
end
