require 'rails_helper'

RSpec.describe Contact, type: :model do
  let(:contact) { FactoryGirl.build_stubbed(:contact) }

  subject { contact }

  it { should respond_to :first_name }
  it { should respond_to :last_name }
end
