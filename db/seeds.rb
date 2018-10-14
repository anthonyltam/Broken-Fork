# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

Restaurant.create(
  {
    name: 'feebos',
    description: 'the best food on the planet!',
    location: 'millbrae',
    cuisines: 'whatever you heart desires',
    hours_of_operation: '12:00-1:00',
    tables: 1
  }
)

Restaurant.create(
  {
    name: 'ceces',
    description: 'pretty good food',
    location: 'sf',
    cuisines: 'spaghetti and meatballs',
    hours_of_operation: '1:00-2:00',
    tables: 2
  }
)
