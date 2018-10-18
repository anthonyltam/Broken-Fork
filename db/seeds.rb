# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
User.create(
  {
    email: 'DemoUser',
    first_name: 'Demo',
    last_name: 'User',
    password: 'starwars',
    location: 'sf',
  }
);

######## RESTAURANTS #########

Restaurant.destroy_all
rest1 = Restaurant.create(
  {
    name: 'Feebos',
    description: 'The best food on the planet!',
    location: 'Millbrae',
    cuisines: 'Everything',
    hours_of_operation: '12:00-1:00',
    tables: 1,
  }
)
rest1.photo.attach(io: File.open('app/assets/images/feebo-restaurant.jpg'), filename: 'feebo.jpg')

rest2 = Restaurant.create(
  {
    name: 'Ceces',
    description: 'Pretty good food',
    location: 'San Francisco',
    cuisines: 'Italian',
    hours_of_operation: '12:00-2:00',
    tables: 2
  }
)
rest2.photo.attach(io: File.open('app/assets/images/italian.jpg'), filename: 'italian.jpg')

rest3 = Restaurant.create(
  {
    name: 'The Crooked Spoon',
    description: 'Meh food',
    location: 'New York',
    cuisines: 'American',
    hours_of_operation: '3:00-6:00',
    tables: 3
  }
)
rest3.photo.attach(io: File.open('app/assets/images/spoon.jpg'), filename: 'spoon.jpg')

rest4 = Restaurant.create(
  {
    name: 'Gigis',
    description: 'do not eat here',
    location: 'Los Angeles',
    cuisines: 'Mexican',
    hours_of_operation: '5:00-8:00',
    tables: 4
  }
)
rest4.photo.attach(io: File.open('app/assets/images/gigis.jpg'), filename: 'gigis.jpg')
