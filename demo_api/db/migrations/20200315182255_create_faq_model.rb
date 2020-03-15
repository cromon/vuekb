# frozen_string_literal: true

Sequel.migration do
  change do
    create_table :faqs do
      primary_key :id

      String :question
      String :answer
    end
  end
end
