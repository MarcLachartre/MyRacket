require_relative 'babolat_seeds'
Racket.destroy_all
Userracket.destroy_all
Racketreview.destroy_all
# User.destroy_all

BabolatSeed.new("Babolat").create
# WilsonSeed.new("Wilson").create





# racket1 = Racket.create!(brand:'Babolat', model:'Pure Strike 100', price: 219.95, weight: 300,
#   headsize: 645, length: 68.5, balance: 32, material: 'graphite', string_pattern: 1619, stiffness: 72, swingweight:295, strength: "Control/Feel", players: "Dominic Thiem", kid: false, adult: true, description:
#   "\t Nothing compares to the feeling of hitting the exact spot you aimed for. Feel the Pure Strike's sharp control as you hit hard with full confidence, control the game on your terms, and keep all the pressure on your opponent.
#   \t With the 3rd generation of the Pure Strike, Babolat Evolves control for the modern game. Dream of that classic feel? The Pure Strike's sharp control is engineered to meet your demands as an aggressive hard-hitting player, combining dynamic control and pure feel for unprecedented response so you can own the court with every shot. 
#   \t You’ll love the Pure Strike 100 if you’re an aggressive player looking for a larger sweet spot and increased tolerance, but you don’t want to compromise control."
#   )

# racket1 = Racket.create!(brand:'Wilson', model:'Blade 98 V7 Roland Garros Edition', weight: 305,
#   headsize: 632.3, length: 68.6, price: 250.00, balance: 32, material: 'graphite', string_pattern: 1619, kid: false, adult: true, stiffness: 71, swingweight:290, play_type: "Power", players: "Fabio Fognini, Garbiñe Muguruza", description: "\t Some call it the definition of power. You will call it your unfair advantage. We call it the Pure Drive.\n  
#   \t Babolat launched the Pure Drive in 1994 and quickly established the benchmark for power. With every subsequent model, we’ve innovated and Evolved to meet the demands of the game. It’s no wonder the Pure Drive is one of most popular and versatile racquets in the world. The 10th generation of the Pure Drive takes your game to the next level with point-ending explosive power and increased feel.\n  
#   \t You’ll love the Pure Drive if you’re looking for the perfect balance between power and feel on every shot.")
  
# racket2 = Racket.create!(brand:'Babolat', model:'Pure Aero', weight: 300,
#   headsize: 645, length: 68.5, price: 210, balance: 320, color: 'yellow black', material: 'graphite', string_pattern: 1619, adult: true, kid: false, stiffness: 71, swingweight:290, play_type: "Spin", players: "Rafael Nadal", description: "\t Max out your spin and get ready for the fight. With the Pure Aero, anything feels possible, any angle seems reachable… and any opponent is beatable. Babolat created THE spin machine to help feed your insatiable desire to dominate the game.\n
#   \t In 2003, convinced that players would use spin to dominate, Babolat launched the Pure Aero: the first racquet engineered specifically for spin. Year after year, we collaborated with Rafael Nadal and top players to innovate and Evolve the world's first aerodynamic frame. The results speak for themselves. With 22 Grand Slam singles titles and counting, the Pure Aero is a feared weapon on tour. Now it's your turn to discover what the ultimate spin machine can bring to your game.\n
#   \t If you want to dominate with spin and power, there’s only one racquet for your game: The Pure Aero. Not sure? Just ask Rafa. Or his opponents.")
    





# for a in 1..2 do
#   Racket.create!(brand:'Yonex', model:'Vcore Pro 97 Teal', weight: 330,
#   headsize: 626, length: 68, price: 209, color: 'black', material: 'graphite', string_pattern: 1619, balance: 310, kid: false, adult: true, stiffness: 65, swingweight:330, play_type: "Precision", players: "Roger Federer", description: "\t Max out your spin and get ready for the fight. With the Pure Aero, anything feels possible, any angle seems reachable… and any opponent is beatable. Babolat created THE spin machine to help feed your insatiable desire to dominate the game.\n
#   \t In 2003, convinced that players would use spin to dominate, Babolat launched the Pure Aero: the first racquet engineered specifically for spin. Year after year, we collaborated with Rafael Nadal and top players to innovate and Evolve the world's first aerodynamic frame. The results speak for themselves. With 22 Grand Slam singles titles and counting, the Pure Aero is a feared weapon on tour. Now it's your turn to discover what the ultimate spin machine can bring to your game.\n
#   \t If you want to dominate with spin and power, there’s only one racquet for your game: The Pure Aero. Not sure? Just ask Rafa. Or his opponents.")
    
# end

# for a in 1..4 do
#   Racket.create!(brand:'Dunlop', model:'Srixon SX 300 LS', weight: 285,
#   headsize: 645, length: 68, price: 179, color: 'black, yellow', material: 'graphite', string_pattern: 1619, balance: 325, kid: false, adult: true, stiffness: 68, swingweight:318, play_type: "Comfort", players: "Roger Federer", description:  "\t Max out your spin and get ready for the fight. With the Pure Aero, anything feels possible, any angle seems reachable… and any opponent is beatable. Babolat created THE spin machine to help feed your insatiable desire to dominate the game.\n
#   \t In 2003, convinced that players would use spin to dominate, Babolat launched the Pure Aero: the first racquet engineered specifically for spin. Year after year, we collaborated with Rafael Nadal and top players to innovate and Evolve the world's first aerodynamic frame. The results speak for themselves. With 22 Grand Slam singles titles and counting, the Pure Aero is a feared weapon on tour. Now it's your turn to discover what the ultimate spin machine can bring to your game.\n
#   \t If you want to dominate with spin and power, there’s only one racquet for your game: The Pure Aero. Not sure? Just ask Rafa. Or his opponents.")
# end

# for a in 1..3 do
#   Racket.create!(brand:'Head', model:'Graphene 360 Radical Pro', weight: 310,
#   headsize: 630, length: 68, price: 199, color: 'grey, red', material: 'graphite', string_pattern: 1619, balance: 315, kid: false, adult: true, stiffness: 68, swingweight:326, play_type: "Power", players: "Roger Federer", description:  "\t Max out your spin and get ready for the fight. With the Pure Aero, anything feels possible, any angle seems reachable… and any opponent is beatable. Babolat created THE spin machine to help feed your insatiable desire to dominate the game.\n
#   \t In 2003, convinced that players would use spin to dominate, Babolat launched the Pure Aero: the first racquet engineered specifically for spin. Year after year, we collaborated with Rafael Nadal and top players to innovate and Evolve the world's first aerodynamic frame. The results speak for themselves. With 22 Grand Slam singles titles and counting, the Pure Aero is a feared weapon on tour. Now it's your turn to discover what the ultimate spin machine can bring to your game.\n
#   \t If you want to dominate with spin and power, there’s only one racquet for your game: The Pure Aero. Not sure? Just ask Rafa. Or his opponents.")
# end

# for a in 1..10 do
#   Racket.create!(brand:'Wilson', model:'Pro Staff RF 97 Autograf Laver Cup Edition', weight: 340,
#   headsize: 626, length: 68, price: 289, color: 'blue', material: 'Graphite', string_pattern: 1619, balance: 305, kid: false, adult: true, stiffness: 68, swingweight:335, play_type: "Feel", players: "Roger Federer", description:  "\t Max out your spin and get ready for the fight. With the Pure Aero, anything feels possible, any angle seems reachable… and any opponent is beatable. Babolat created THE spin machine to help feed your insatiable desire to dominate the game.\n
#   \t In 2003, convinced that players would use spin to dominate, Babolat launched the Pure Aero: the first racquet engineered specifically for spin. Year after year, we collaborated with Rafael Nadal and top players to innovate and Evolve the world's first aerodynamic frame. The results speak for themselves. With 22 Grand Slam singles titles and counting, the Pure Aero is a feared weapon on tour. Now it's your turn to discover what the ultimate spin machine can bring to your game.\n
#   \t If you want to dominate with spin and power, there’s only one racquet for your game: The Pure Aero. Not sure? Just ask Rafa. Or his opponents.")
# end

# for a in 1..20 do
#   Racket.create!(brand:'Wilson', model:'Clash 98', weight: 310,
#   headsize: 630, length: 68, price: 199, color: 'grey, red', material: 'graphite', string_pattern: 1619, balance: 306, kid: false, adult: true, stiffness: 55, swingweight:326, play_type: "Precision", players: "Roger Federer", description:  "\t Max out your spin and get ready for the fight. With the Pure Aero, anything feels possible, any angle seems reachable… and any opponent is beatable. Babolat created THE spin machine to help feed your insatiable desire to dominate the game.\n
#   \t In 2003, convinced that players would use spin to dominate, Babolat launched the Pure Aero: the first racquet engineered specifically for spin. Year after year, we collaborated with Rafael Nadal and top players to innovate and Evolve the world's first aerodynamic frame. The results speak for themselves. With 22 Grand Slam singles titles and counting, the Pure Aero is a feared weapon on tour. Now it's your turn to discover what the ultimate spin machine can bring to your game.\n
#   \t If you want to dominate with spin and power, there’s only one racquet for your game: The Pure Aero. Not sure? Just ask Rafa. Or his opponents.")
# end

# #racket1 = Racket.create!(brand:'Wilson', model:'Blade 98UL', weight: 265,
#   #   headsize: 632, length: 68, price: 190, balance: 335, color: 'green/black', material: 'graphite', string_pattern: 1619, adult: true, stiffness: 65, swingweight: 316)
  
#   # racket2 = Racket.create!(brand:'Babolat', model:'Pure Aero', weight: 300,
#   #   headsize: 64, length: 68, price: 210, balance: 335, color: 'yellow', material: 'graphite', string_pattern: 1720, adult: true, stiffness: 69, swingweight:327)
  
#   racket3 = Racket.create!(brand:'Dunlop', model:'CX 200 Tour', weight: 315,
#     headsize: 613, length: 68, price: 180, color: 'red', material: 'graphite', string_pattern: 1619, balance: 320, stiffness: 64, swingweight:317, kid: false, adult: true, play_type: "Precision", players: "Roger Federer", description:  "\t Max out your spin and get ready for the fight. With the Pure Aero, anything feels possible, any angle seems reachable… and any opponent is beatable. Babolat created THE spin machine to help feed your insatiable desire to dominate the game.\n
#   \t In 2003, convinced that players would use spin to dominate, Babolat launched the Pure Aero: the first racquet engineered specifically for spin. Year after year, we collaborated with Rafael Nadal and top players to innovate and Evolve the world's first aerodynamic frame. The results speak for themselves. With 22 Grand Slam singles titles and counting, the Pure Aero is a feared weapon on tour. Now it's your turn to discover what the ultimate spin machine can bring to your game.\n
#   \t If you want to dominate with spin and power, there’s only one racquet for your game: The Pure Aero. Not sure? Just ask Rafa. Or his opponents.")
  
#   racket4 = Racket.create!(brand:'Wilson', model:'Juice', weight: 304,
#     headsize: 645, length: 68, price: 190, color: 'blue, yellow', material: 'graphite', string_pattern: 2016, balance: 320, kid: true, stiffness:68, swingweight: 310, adult: false, play_type: "Precision", players: "Roger Federer", description:  "\t Max out your spin and get ready for the fight. With the Pure Aero, anything feels possible, any angle seems reachable… and any opponent is beatable. Babolat created THE spin machine to help feed your insatiable desire to dominate the game.\n
#   \t In 2003, convinced that players would use spin to dominate, Babolat launched the Pure Aero: the first racquet engineered specifically for spin. Year after year, we collaborated with Rafael Nadal and top players to innovate and Evolve the world's first aerodynamic frame. The results speak for themselves. With 22 Grand Slam singles titles and counting, the Pure Aero is a feared weapon on tour. Now it's your turn to discover what the ultimate spin machine can bring to your game.\n
#   \t If you want to dominate with spin and power, there’s only one racquet for your game: The Pure Aero. Not sure? Just ask Rafa. Or his opponents.")
  
#   # racket5 = Racket.create!(brand:'Wilson', model:'Pro Staff RF 97 Autograf Laver Cup Edition', weight: 340,
#   #   headsize: 626, length: 68, price: 289, color: 'blue', material: 'Graphite', string_pattern: 1619, balance: 305, kid: false, adult: true, stiffness: 68, swingweight:335)
  
#   # racket6 = Racket.create!(brand:'Wilson', model:'Ultra Tour 97', weight: 305,
#   #   headsize: 626, length: 68, price: 189, color: 'blue, dark blue', material: 'graphite', string_pattern: 1820, balance: 315, kid: false, adult: true, stiffness: 64, swingweight:314)
  
#   # racket7 = Racket.create!(brand:'Wilson', model:'Clash 98', weight: 310,
#   #   headsize: 630, length: 68, price: 199, color: 'grey, red', material: 'graphite', string_pattern: 1619, balance: 306, kid: false, adult: true, stiffness: 55, swingweight:326)
  
#   # racket8 = Racket.create!(brand:'Wilson', model:'Ultra 100L', weight: 277,
#   #   headsize: 645, length: 68, price: 143, color: 'blue, dark blue', material: 'graphite', string_pattern: 1619, balance: 325, kid: false, adult: true, stiffness: 68, swingweight:305)
  
#   # racket9 = Racket.create!(brand:'Wilson', model:'Blade 98', weight: 305,
#   #   headsize: 630, length: 68, price: 209, color: 'black, green', material: 'graphite', string_pattern: 1619, balance: 320, kid: false, adult: true, stiffness: 62, swingweight:328)
  
#   # racket10 = Racket.create!(brand:'Head', model:'Graphene 360+ Prestige Mid', weight: 320,
#   #   headsize: 600, length: 68, price: 31, color: 'red', material: 'graphite', string_pattern: 1619, balance: 310, kid: false, adult: true, stiffness: 64, swingweight:328)
  
#   # racket11 = Racket.create!(brand:'Head', model:'Graphene 360 Radical Pro', weight: 310,
#   #   headsize: 630, length: 68, price: 199, color: 'grey, red', material: 'graphite', string_pattern: 1619, balance: 315, kid: false, adult: true, stiffness: 68, swingweight:326)
  
#   # racket12 = Racket.create!(brand:'Dunlop', model:'Srixon SX 300 Tour', weight: 310,
#   #   headsize: 645, length: 68, price: 197, color: 'black, yellow', material: 'graphite', string_pattern: 1619, balance: 315, kid: false, adult: true, stiffness: 64, swingweight:326)
  
#   # racket13 = Racket.create!(brand:'Dunlop', model:'Srixon CX 200 Tour', weight: 315,
#   #   headsize: 613, length: 68, price: 207, color: 'red, black', material: 'graphite', string_pattern: 1820, balance: 326, kid: false, adult: true, stiffness: 65, swingweight:319)
  
#   # racket14 = Racket.create!(brand:'Dunlop', model:'Srixon SX 300 LS', weight: 285,
#   #   headsize: 645, length: 68, price: 179, color: 'black, yellow', material: 'graphite', string_pattern: 1619, balance: 325, kid: false, adult: true, stiffness: 68, swingweight:318)
  
#   # racket15 = Racket.create!(brand:'Yonex', model:'V Core 100 Galaxy', weight: 300,
#   #   headsize: 645, length: 69, price: 184, color: 'black', material: 'graphite', string_pattern: 1619, balance: 320, kid: false, adult: true, stiffness: 68, swingweight:341)
  
#   # racket16 = Racket.create!(brand:'Yonex', model:'V Core Game Flame', weight: 270,
#   #   headsize: 645, length: 68, price: 129, color: 'red', material: 'graphite', string_pattern: 1619, balance: 330, kid: false, adult: true, stiffness: 65, swingweight:305)
  
#   # racket17 = Racket.create!(brand:'Yonex', model:'Vcore Pro 97 Teal', weight: 330,
#   #   headsize: 626, length: 68, price: 209, color: 'black', material: 'graphite', string_pattern: 1619, balance: 310, kid: false, adult: true, stiffness: 65, swingweight:330)
  

# user1 = User.create!(name:'marc', lastname: "Lachartre", username: "Kemar", rank:'pgm de la raquette', email: 'marc@gmail.com', password: "Hubert140261!", admin: 0)
# user2 = User.create!(name:'maxime', lastname: "Max", username: "Max", rank:'a deja sniffé de la terre battue', email: 'maxime@gmail.com', password: "Hubert140261!", admin: 0)
# user3 = User.create!(name:'yoann', lastname: "Robin", username: "Bendak", rank:'joue avec un planche (avaleur de sucette)', email: 'yoann@gmail.com', password: "Hubert140261!", admin: 0)
# user4 = User.create!(name:'benjamin', lastname: "Lacour", username: "Ramon", rank:'amis des parebrises', email: 'benjamin@gmail.com', password: "Hubert140261!", admin: 0)

# userracket1 = Userracket.create!(racket: racket1, user: user1)
# userracket2 = Userracket.create!(racket: racket2, user: user2)
# userracket3 = Userracket.create!(racket: racket3, user: user3)
# userracket4 = Userracket.create!(racket: racket4, user: user4)

# racketreview1 = Racketreview.create!(comment: 'great racket', racket: racket1, user: user1)

