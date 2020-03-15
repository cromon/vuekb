# frozen_string_literal: true

DB = Sequel.connect 'sqlite://db/knowledgebase.sqlite3'

Dir.glob(File.expand_path(File.dirname(__FILE__)) + '/../models/*.{rb,class}') { |file| require file }
