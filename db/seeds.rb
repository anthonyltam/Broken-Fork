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
    name: 'SEASIDE',
    description: 'At SEASIDE, Chef AndTony serves coastal cuisine with French influence. The menu changes daily depending on what\'s fresh. Expect exciting combinations and show-stopping execution.',
    location: 'New York',
    cuisines: 'seafood',
    hours_of_operation: '10:00 - 24:00',
    tables: 24
  }
)
rest3.photo.attach(io: File.open('app/assets/images/watery-rest.jpg'), filename: 'watery-rest.jpg')

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
rest6.photo.attach(io: File.open('app/assets/images/spoon.jpg'), filename: 'spoon.jpg')

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

rest21 = Restaurant.create(
  {
    name: 'Bota',
    description: 'Bota is an authentic Spanish style tapas and paella bar located in the heart of Union Square in San Francisco. A place to go to share food, savor rustic flavors and enjoy Spanish wine in a casual, yet chic, environment. Inspired by the concept behind our name “BOTA”, a vessel to share wine with the people around you.',
    location: 'San Francisco',
    cuisines: 'vegetarian',
    hours_of_operation: '10:00 - 24:00',
    tables: 40
  }
)
rest21.photo.attach(io: File.open('app/assets/images/bota.jpg'), filename: 'bota.jpg')

rest22 = Restaurant.create(
  {
    name: 'The Divide',
    description: 'Located in LA, The Divide serves Eastern Mediterranean food that stays true to its origin. Our menu, changing daily, is focused on the less known edibles of the region, traditionally prepared at home. Bringing forth the common cuisine of Turkey, Greece, the Levant and Iran, a commonality driven by regional proximity and a shared history. Our dishes are made with seasonal produce, and locally sourced, sustainibly raised and caught meats and seafood.',
    location: 'Los Angeles',
    cuisines: 'greek',
    hours_of_operation: '10:00 - 24:00',
    tables: 36
  }
)
rest22.photo.attach(io: File.open('app/assets/images/the-divide.jpg'), filename: 'divide.jpg')

rest23 = Restaurant.create(
  {
    name: 'Broadway',
    description: 'A family owned and operated business since 1970. Broadway is known as one of Oakland’s finest lunch and dinner houses. We can accommodate private as well as semi-private banquet rooms. Formerly a brothel, Broadway offers an ambiance that is warm, intimate and unique to the Bay Area.',
    location: 'San Francisco',
    cuisines: 'american',
    hours_of_operation: '10:00 - 24:00',
    tables: 67
  }
)
rest23.photo.attach(io: File.open('app/assets/images/broadway.jpg'), filename: 'broadway.jpg')

rest24 = Restaurant.create(
  {
    name: 'Jasmines',
    description: 'Located in Seattle, Jasmines is an Seafood restaurant with a surprising Japanese twist. Here in the heart of "little Italy," chef and owner Joe Lin creatively weaves together Italian and Japanese culinary traditions by building on the elements that unite them: simplicity and quality.',
    location: 'Seattle',
    cuisines: 'seafood',
    hours_of_operation: '10:00 - 24:00',
    tables: 30
  }
)
rest24.photo.attach(io: File.open('app/assets/images/jasmines.jpg'), filename: 'jasmines.jpg')

rest25 = Restaurant.create(
  {
    name: 'Familias',
    description: 'Just like the small family-owned trattorias of Italy, Familias is simple, rustic, and generous in spirit. Executive Chef, Robert Holt, draws his inspiration from Southern-Italy, with an emphasis on wood-fired Neapolitan pizza.',
    location: 'New York',
    cuisines: 'italian',
    hours_of_operation: '10:00 - 24:00',
    tables: 25
  }
)
rest25.photo.attach(io: File.open('app/assets/images/family-room.jpg'), filename: 'family.jpg')

rest26 = Restaurant.create(
  {
    name: 'Yoshi',
    description: 'Japanese Omakase.',
    location: 'New York',
    cuisines: 'japanese',
    hours_of_operation: '10:00 - 24:00',
    tables: 50
  }
)
rest26.photo.attach(io: File.open('app/assets/images/yoshis.jpg'), filename: 'yoshis.jpg')


rest27 = Restaurant.create(
  {
    name: 'Barrel House',
    description: 'Comtemporary styled fusion cuisine restaurant place.',
    location: 'New York',
    cuisines: 'american',
    hours_of_operation: '10:00 - 24:00',
    tables: 30
  }
)
rest27.photo.attach(io: File.open('app/assets/images/barrel-house.jpg'), filename: 'barrel.jpg')

rest28 = Restaurant.create(
  {
    name: 'STOOL',
    description: 'BAR.',
    location: 'New York',
    cuisines: 'bar',
    hours_of_operation: '16:00 - 24:00',
    tables: 12
  }
)
rest28.photo.attach(io: File.open('app/assets/images/STOOL.jpg'), filename: 'STOOL.jpg')

rest29 = Restaurant.create(
  {
    name: 'Roti',
    description: 'A modern Indian restaurant named for the date commemorating India’s independence from British rule. Located in the heart of San Francisco’s Civic Center neighborhood, we invite our guests to explore the nuances of Indian cuisine rarely seen in the West.',
    location: 'San Mateo',
    cuisines: 'indian',
    hours_of_operation: '10:00 - 24:00',
    tables: 32
  }
)
rest29.photo.attach(io: File.open('app/assets/images/the-basement.jpg'), filename: 'the-basement.jpg')

rest30 = Restaurant.create(
  {
    name: 'The Library',
    description: 'The Library is a modern American take on the classic German biergarten, featuring 31 taps of craft and import beer and Modern American Gourmet Comfort Food from Executive Chef Colby M Reade.',
    location: 'San Francisco',
    cuisines: 'bar',
    hours_of_operation: '16:00 - 24:00',
    tables: 0
  }
)
rest30.photo.attach(io: File.open('app/assets/images/library.jpg'), filename: 'library.jpg')

rest31 = Restaurant.create(
  {
    name: 'COOORKED',
    description: 'Located in the heart of NY. We are a bar focusing on craft beer (25 on tap), whiskey and cocktails, live music, and great company. We got you covered.',
    location: 'New York',
    cuisines: 'bar',
    hours_of_operation: '16:00 - 24:00',
    tables: 0
  }
)
rest31.photo.attach(io: File.open('app/assets/images/corked.jpeg'), filename: 'library.jpeg')




Review.destroy_all
Reservation.destroy_all