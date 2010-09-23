# particle-system.rb
require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require 'erb'

get '/' do
  erb :index
end

get '/experiment-one' do
  erb :experiment_one
end
