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


rest12 = Restaurant.create(
  {
    name: 'Frances',
    description: 'Frances, the namesake of Chef / Owner Melissa Perello`s grandmother, is nestled between Noe and Sanchez on 17th Street in the heart of the Castro. This new addition to a bustling neighborhood hopes to lend a warm and comfortable space in which to enjoy its ingredient-driven dishes paired with a tall glass of wine. The menu changes frequently, ever-aiming to showcase the season’s finest offerings. Frances supports the shortest distance between the source and the table, bringing its guests local, sustainable and organic products when available.',
    location: 'New York',
    cuisines: 'greek',
    hours_of_operation: '10:00 - 24:00',
    tables: 50
  }
)
rest12.photo.attach(io: File.open('app/assets/images/frances.jpg'), filename: 'frances.jpg')


rest13 = Restaurant.create(
  {
    name: 'Salt & Pepper',
    description: 'Fresh house-made pasta, wood-fired pizza, and house-cured meats. It’s all about simple and authentic Italian food rooted in the south, executed with skill, expertise and old world standards of care. The defining goal of the restaurant for its ambiance and style of service is to make everyone feel welcome. We feel very strongly about creating a come as you are atmosphere in the restaurant.',
    location: 'Los Angeles',
    cuisines: 'italian',
    hours_of_operation: '10:00 - 24:00',
    tables: 70
  }
)
rest13.photo.attach(io: File.open('app/assets/images/Twisted-knife.JPG'), filename: 'twisted-knife.jpg')


rest14 = Restaurant.create(
  {
    name: 'Neeebu',
    description: 'Centrally located on the corner of 18th St. and Dolores St. in the Mission District; Namu Gaji is a family run restaurant that is dedicated to serving its community and neighborhood through personal, ingredient-driven food, much of which comes from our very own Namu Farm! 
    Health, happiness, community, and responsibility are some of our core values.',
    location: 'San Francisco',
    cuisines: 'japanese',
    hours_of_operation: '10:00 - 24:00',
    tables: 80
  }
)
rest14.photo.attach(io: File.open('app/assets/images/neeebu.jpg'), filename: 'neeebu.jpg')

rest15 = Restaurant.create(
  {
    name: 'THE ELEPHANT ROOM',
    description: 'Elephant Room Restaurant is a scratch-kitchen specializing in globally-inspired dishes and traditional, American fare. Our food is all made from scratch using the best, locally-sourced ingredients available. All of our cocktails are made fresh when you order, handcrafted in-house by our mixologists.',
    location: 'San Francisco',
    cuisines: 'greek',
    hours_of_operation: '10:00 - 24:00',
    tables: 100
  }
)
rest15.photo.attach(io: File.open('app/assets/images/elephant-room.jpg'), filename: 'elephant-room.jpg')

rest16 = Restaurant.create(
  {
    name: 'Puzzles',
    description: 'Maybe that\'s the puzzle',
    location: 'New York',
    cuisines: 'american',
    hours_of_operation: '10:00 - 24:00',
    tables: 30
  }
)
rest16.photo.attach(io: File.open('app/assets/images/puzzles.jpg'), filename: 'puzzles.jpg')

rest17 = Restaurant.create(
  {
    name: 'Green Room',
    description: 'Freshly grown, all of our dishes are comprised of ingredients grown locally from both markets and in-house.',
    location: 'San Francisco',
    cuisines: 'vegetarian',
    hours_of_operation: '10:00 - 24:00',
    tables: 20
  }
)
rest17.photo.attach(io: File.open('app/assets/images/the-green-room.jpg'), filename: 'green-room.jpg')

rest18 = Restaurant.create(
  {
    name: 'Blue Garden',
    description: 'Blue Garden is a progressive Indian Table and Bar located in the heart of San Francisco’s burgeoning SoMa district. Meaning soul or spirit, Rooh brings the spirit of India to San Francisco through the restaurant experience. Renowned Executive Chef, Sujan Sarkar, delicately balances rich traditional flavors with fresh local ingredients prepared with modern techniques.',
    location: 'San Mateo',
    cuisines: 'indian',
    hours_of_operation: '10:00 - 24:00',
    tables: 26
  }
)
rest18.photo.attach(io: File.open('app/assets/images/blue-garden.jpg'), filename: 'blue-garden.jpg')

rest19 = Restaurant.create(
  {
    name: 'Emporium',
    description: 'TBD.',
    location: 'San Francisco',
    cuisines: 'indian',
    hours_of_operation: '10:00 - 24:00',
    tables: 30
  }
)
rest19.photo.attach(io: File.open('app/assets/images/emporium.png'), filename: 'emporium.png')

rest20 = Restaurant.create(
  {
    name: 'The Lobby',
    description: 'The Lobby is housed in an Art Deco architectural gem in the Uptown district of Oakland. We serve a selection of reinvented American classics accompanied by an extensive menu of prohibition era cocktails. Fauna is our sister bar next door! Corkage fee is $20 per bottle and 18% gratuity is added to parties of 6 or more.',
    location: 'San Francisco',
    cuisines: 'american',
    hours_of_operation: '10:00 - 24:00',
    tables: 40
  }
)
rest20.photo.attach(io: File.open('app/assets/images/the-lobby.jpg'), filename: 'lobby.jpg')




Review.destroy_all
Reservation.destroy_all