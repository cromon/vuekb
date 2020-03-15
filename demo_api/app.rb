# frozen_string_literal: true

require 'bundler'
require 'json'
require 'sinatra'
require "sinatra/json"
require "sinatra/namespace"

register Sinatra::Namespace

Bundler.require

%w[db models].each do |dir|
  $LOAD_PATH << File.expand_path('.', File.join(File.dirname(__FILE__), dir))
  require_relative File.join(dir, 'init')
end

set :bind, '0.0.0.0'

options '/articles' do
  response.headers["Access-Control-Allow-Origin"] = "*"
  response.headers["Access-Control-Allow-Methods"] = "GET"
  
  halt 200
end

get '/'  do
  json('Hello World')
end

get '/articles' do
  @articles = DB[:articles].all
  headers \
    "Access-Control-Allow-Origin" => "*",
    "Access-Control-Allow-Methods" => "GET"
  json({ articles: @articles })
end

get '/faqs' do
  @faqs = DB[:faqs].all
  headers \
    "Access-Control-Allow-Origin" => "*",
    "Access-Control-Allow-Methods" => "GET"
  json({ faqs: @faqs })
end
