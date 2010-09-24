# particle-system.rb
require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require 'erb'

get '/' do
  erb :index
end

get '/experiment/:num' do
  url = "experiment#{params[:num]}".to_sym
  erb url
end
