# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



########## USERS ###########

User.destroy_all
User.create(
  {
    email: 'DemoUser',
    first_name: 'Demo',
    last_name: 'User',
    password: 'starwars',
    location: 'SF',
  }
);

User.create(
  {
    email: 'Feebo',
    first_name: 'feebo',
    last_name: 'feebo',
    password: 'starwars',
    location: 'Millbrae',
  }
);

User.create(
  {
    email: 'Meggy',
    first_name: 'meggy',
    last_name: 'meggy',
    password: 'starwars',
    location: 'NY',
  }
);


######## RESTAURANTS #########

Restaurant.destroy_all
rest1 = Restaurant.create(
  {
    name: 'Feebos',
    description: 'All types of Cuisine Done With Precision"-New York Times A Blend Of Local, Seasonal 
    and Organic Ingredients Prepared Using Classic and Modern Technique. The best food on the planet!',
    location: 'Millbrae',
    cuisines: 'american',
    hours_of_operation: '10:00 - 24:00',
    tables: 52
  }
)
rest1.photo.attach(io: File.open('app/assets/images/feebo-rest.jpg'), filename: 'feebo.jpg')

rest2 = Restaurant.create(
  {
    name: 'Ceces',
    description: 'Ceces, bringing a taste of Italy to San Francisco. With a focus on the regions of Rome 
    and Tuscany we offer fresh, house made pastas and pizzas, both available gluten free, house cured meats, 
    seafood crudo and many other delicacies. We feature hand crafted cocktails and soft drinks in our full bar. 
    We offer patio dining with views of the estuary.',
    location: 'San Francisco',
    cuisines: 'italian',
    hours_of_operation: '10:00 - 24:00',
    tables: 36
  }
)
rest2.photo.attach(io: File.open('app/assets/images/italian.jpg'), filename: 'italian.jpg')

rest3 = Restaurant.create(
  {
    name: 'The Crooked Spoon',
    description: 'Rising Star Chef Nominee by the Feebo Phoebe Foundation, Founder Chef Anthony, 
    at The Crooked Spoon has received many accolades from five consecutive years on the Chronicle\'s 
    Top 100 American Restaurant List to the Top 40 in Zagat. This is a restaurant not to be missed in New York.',
    location: 'New York',
    cuisines: 'american',
    hours_of_operation: '10:00 - 24:00',
    tables: 120
  }
)
rest3.photo.attach(io: File.open('app/assets/images/spoon.jpg'), filename: 'spoon.jpg')

rest4 = Restaurant.create(
  {
    name: 'Gigis',
    description: 'Gigi\'s diverse menu celebrates the unique and layered gastronomy of Mexico. 
    Using traditional ingredients and techniques, Chef Gigi presents both new and familiar Mexican 
    flavors with an inspired, modern perspective. Gigi\'s offers a full bar with an extensive 
    tequila and mezcal collection, as well as innovative cocktails. Come enjoy the spirit of Mexico 
    in an artistic, comfortable environment in Los Angeles!',
    location: 'Los Angeles',
    cuisines: 'mexican',
    hours_of_operation: '10:00 - 24:00',
    tables: 20
  }
)
rest4.photo.attach(io: File.open('app/assets/images/gigis.jpg'), filename: 'gigis.jpg')

rest5 = Restaurant.create(
  {
    name: 'Fiery Restaurant',
    description: 'A new kind of Greek steakhouse that combines Latin American flavors with 
    Californian sensibilities.',
    location: 'San Francisco',
    cuisines: 'greek',
    hours_of_operation: '10:00 - 24:00',
    tables: 50
  }
)
rest5.photo.attach(io: File.open('app/assets/images/argen.jpg'), filename: 'argen.jpg')


rest6 = Restaurant.create(
  {
    name: 'SEASIDE',
    description: 'At SEASIDE, Chef AndTony serves coastal cuisine with French influence. The menu changes daily depending on what\'s fresh. Expect exciting combinations and show-stopping execution.',
    location: 'New York',
    cuisines: 'seafood',
    hours_of_operation: '10:00 - 24:00',
    tables: 24
  }
)
rest6.photo.attach(io: File.open('app/assets/images/watery-rest.jpg'), filename: 'watery-rest.jpg')

rest7 = Restaurant.create(
  {
    name: 'Paddy\'s',
    description: 'We are the Bay Area’s leading fish house and we offer fresh, sustainable seafood with Pacific flavors in a decidedly WestCoast style. Our focus is on quality seafood with a unique perspective, inspired by the Pacific and prepared by our chefs in our scratch kitchen.',
    location: 'San Francisco',
    cuisines: 'seafood',
    hours_of_operation: '10:00 - 24:00',
    tables: 60
  }
)
rest7.photo.attach(io: File.open('app/assets/images/pacific_catch.jpg'), filename: 'pacific_catch.jpg')

rest8 = Restaurant.create(
  {
    name: 'PokeFood',
    description: 'PokeFood is designed to be a blend of Hawaiian and San Francisco culture. Large and vibrant, our venue is perfect for any occasion. With so many popular dishes to try, our chef recommends sharing! Pair your meal with one of our Signature Goblets.',
    location: 'San Francisco',
    cuisines: 'seafood',
    hours_of_operation: '10:00 - 24:00',
    tables: 24
  }
)
rest8.photo.attach(io: File.open('app/assets/images/pokefood.jpg'), filename: 'pokefood.jpg')

rest9 = Restaurant.create(
  {
    name: 'Chipotle',
    description: 'Chipotle Mexican Grill, Inc. is an American chain of fast casual restaurants. Its name derives from chipotle, the Nahuatl name for a smoked and dried jalapeño chili pepper.',
    location: 'San Francisco',
    cuisines: 'mexican',
    hours_of_operation: '10:00 - 24:00',
    tables: 12
  }
)
rest9.photo.attach(io: File.open('app/assets/images/chipotle1.jpg'), filename: 'chipotle1.jpg')

rest10 = Restaurant.create(
  {
    name: 'Ratatouille',
    description: 'Ratatouille has been a neighborhood destination since 2002. With our full-service bar, excellent Northern Italian cuisine, and extensive wine list, our restaurant is a perfect place to spend an entire evening. We feature fresh seafood and hearty soup specials every day. With our high-vaulted ceilings and elegant, lighting Ratatouille is a great place for a romantic evening for two.',
    location: 'Los Angeles',
    cuisines: 'italian',
    hours_of_operation: '10:00 - 24:00',
    tables: 28
  }
)
rest10.photo.attach(io: File.open('app/assets/images/rat.jpeg'), filename: 'rat.jpeg')


rest11 = Restaurant.create(
  {
    name: 'Osteria',
    description: 'Ideally located on the Embarcadero, and with sweeping views of San Francisco’s renowned waterfront, CENTO Osteria invites guests to experience seasonal Italian fare in the style of a classic osteria.',
    location: 'San Francisco',
    cuisines: 'italian',
    hours_of_operation: '10:00 - 24:00',
    tables: 70
  }
)
rest11.photo.attach(io: File.open('app/assets/images/osteria.jpg'), filename: 'osteria.jpg')



Review.destroy_all
Reservation.destroy_all