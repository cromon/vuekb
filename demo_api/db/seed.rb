# frozen_string_literal: true

class Seed
  def initialize(db)
    @db = db
  end

  def run
    insert_articles
    insert_faqs
  end

  def insert_articles
    dataset = @db[:articles]
    dataset.insert(title: 'First Article', subject: 'Setup', content: 'Information about setup')
    dataset.insert(title: 'Second Article', subject: 'Setup', content: 'Information about setup 2nd step')
    dataset.insert(title: 'Third Article', subject: 'About', content: 'Information about application')
  end

  def insert_faqs
    dataset = @db[:faqs]
    dataset.insert(question: 'Why are we here?', answer: 'Nobody knows.')
    dataset.insert(question: 'Who are you?', answer: 'We are legion.')
    dataset.insert(question: 'Where can we go from here?', answer: 'Anywhere we want to!')
  end
end
