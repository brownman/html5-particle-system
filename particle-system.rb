# particle-system.rb
require 'rubygems'
require 'bundler/setup'
require 'sinatra'
require 'erb'

get '/' do
  erb :index
end

get '/experiment/:num' do
  experiment = "experiment#{params[:num]}"
  @filepath = "/js/#{experiment}.js"
  url = experiment.to_sym
  erb url
end
