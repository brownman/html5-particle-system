# particle-system.rb
require 'rubygems'
require 'sinatra'
require 'erb'

get '/' do
  erb :index
end

get '/favicon.ico' do
  "test"
end