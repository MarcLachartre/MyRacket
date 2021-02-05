Racket.destroy_all
Userracket.destroy_all
User.destroy_all
Racketreview.destroy_all

racket1 = Racket.create!(brand:'Wilson', model:'Blade 98UL', weight: 265,
  headsize: 632, length: 68, price: 190, balance: 335, color: 'green/black', material: 'graphite', string_pattern: 1619, adult: true, stiffness: 65, swingweight: 316)

racket2 = Racket.create!(brand:'Babolat', model:'Pure Aero', weight: 300,
  headsize: 64, length: 68, price: 210, balance: 335, color: 'yellow', material: 'graphite', string_pattern: 1720, adult: true, stiffness: 69, swingweight:327)

racket3 = Racket.create!(brand:'Dunlop', model:'CX 200 Tour', weight: 315,
  headsize: 613, length: 68, price: 180, color: 'red', material: 'graphite', string_pattern: 1619, balance: 320, stiffness: 64, swingweight:317)

racket4 = Racket.create!(brand:'Wilson', model:'Juice', weight: 304,
  headsize: 645, length: 68, price: 190, color: 'blue, yellow', material: 'graphite', string_pattern: 2016, balance: 320, kid: true, stiffness:68, swingweight: 310)

racket5 = Racket.create!(brand:'Wilson', model:'Pro Staff RF 97 Autograf Laver Cup Edition', weight: 340,
  headsize: 626, length: 68, price: 289, color: 'blue', material: 'Graphite', string_pattern: 1619, balance: 305, kid: false, adult: true, stiffness: 68, swingweight:335)

racket6 = Racket.create!(brand:'Wilson', model:'Ultra Tour 97', weight: 305,
  headsize: 626, length: 68, price: 189, color: 'blue, dark blue', material: 'graphite', string_pattern: 1820, balance: 315, kid: false, adult: true, stiffness: 64, swingweight:314)

racket7 = Racket.create!(brand:'Wilson', model:'Clash 98', weight: 310,
  headsize: 630, length: 68, price: 199, color: 'grey, red', material: 'graphite', string_pattern: 1619, balance: 306, kid: false, adult: true, stiffness: 55, swingweight:326)

racket8 = Racket.create!(brand:'Wilson', model:'Ultra 100L', weight: 277,
  headsize: 645, length: 68, price: 143, color: 'blue, dark blue', material: 'graphite', string_pattern: 1619, balance: 325, kid: false, adult: true, stiffness: 68, swingweight:305)

racket9 = Racket.create!(brand:'Wilson', model:'Blade 98', weight: 305,
  headsize: 630, length: 68, price: 209, color: 'black, green', material: 'graphite', string_pattern: 1619, balance: 320, kid: false, adult: true, stiffness: 62, swingweight:328)

racket10 = Racket.create!(brand:'Head', model:'Graphene 360+ Prestige Mid', weight: 320,
  headsize: 600, length: 68, price: 31, color: 'red', material: 'graphite', string_pattern: 1619, balance: 310, kid: false, adult: true, stiffness: 64, swingweight:328)

racket11 = Racket.create!(brand:'Head', model:'Graphene 360 Radical Pro', weight: 310,
  headsize: 630, length: 68, price: 199, color: 'grey, red', material: 'graphite', string_pattern: 1619, balance: 315, kid: false, adult: true, stiffness: 68, swingweight:326)

racket12 = Racket.create!(brand:'Dunlop', model:'Srixon SX 300 Tour', weight: 310,
  headsize: 645, length: 68, price: 197, color: 'black, yellow', material: 'graphite', string_pattern: 1619, balance: 315, kid: false, adult: true, stiffness: 64, swingweight:326)

racket13 = Racket.create!(brand:'Dunlop', model:'Srixon CX 200 Tour', weight: 315,
  headsize: 613, length: 68, price: 207, color: 'red, black', material: 'graphite', string_pattern: 1820, balance: 326, kid: false, adult: true, stiffness: 65, swingweight:319)

racket14 = Racket.create!(brand:'Dunlop', model:'Srixon SX 300 LS', weight: 285,
  headsize: 645, length: 68, price: 179, color: 'black, yellow', material: 'graphite', string_pattern: 1619, balance: 325, kid: false, adult: true, stiffness: 68, swingweight:318)

racket15 = Racket.create!(brand:'Yonex', model:'V Core 100 Galaxy', weight: 300,
  headsize: 645, length: 69, price: 184, color: 'black', material: 'graphite', string_pattern: 1619, balance: 320, kid: false, adult: true, stiffness: 68, swingweight:341)

racket16 = Racket.create!(brand:'Yonex', model:'V Core Game Flame', weight: 270,
  headsize: 645, length: 68, price: 129, color: 'red', material: 'graphite', string_pattern: 1619, balance: 330, kid: false, adult: true, stiffness: 65, swingweight:305)

racket17 = Racket.create!(brand:'Yonex', model:'Vcore Pro 97 Teal', weight: 330,
  headsize: 626, length: 68, price: 209, color: 'black', material: 'graphite', string_pattern: 1619, balance: 310, kid: false, adult: true, stiffness: 65, swingweight:330)

for a in 1..2 do
  Racket.create!(brand:'Yonex', model:'Vcore Pro 97 Teal', weight: 330,
  headsize: 626, length: 68, price: 209, color: 'black', material: 'graphite', string_pattern: 1619, balance: 310, kid: false, adult: true, stiffness: 65, swingweight:330)
end

for a in 1..4 do
  Racket.create!(brand:'Dunlop', model:'Srixon SX 300 LS', weight: 285,
  headsize: 645, length: 68, price: 179, color: 'black, yellow', material: 'graphite', string_pattern: 1619, balance: 325, kid: false, adult: true, stiffness: 68, swingweight:318)
end

for a in 1..3 do
  Racket.create!(brand:'Head', model:'Graphene 360 Radical Pro', weight: 310,
  headsize: 630, length: 68, price: 199, color: 'grey, red', material: 'graphite', string_pattern: 1619, balance: 315, kid: false, adult: true, stiffness: 68, swingweight:326)
end

for a in 1..7 do
  Racket.create!(brand:'Wilson', model:'Pro Staff RF 97 Autograf Laver Cup Edition', weight: 340,
  headsize: 626, length: 68, price: 289, color: 'blue', material: 'Graphite', string_pattern: 1619, balance: 305, kid: false, adult: true, stiffness: 68, swingweight:335)
end

for a in 1..20 do
  Racket.create!(brand:'Wilson', model:'Clash 98', weight: 310,
  headsize: 630, length: 68, price: 199, color: 'grey, red', material: 'graphite', string_pattern: 1619, balance: 306, kid: false, adult: true, stiffness: 55, swingweight:326)
end



user1 = User.create!(name:'marc', rank:'pgm de la raquette', email: 'marc@gmail.com', password: 111111, admin: 1)
user2 = User.create!(name:'maxime', rank:'a deja sniffé de la terre battue', email: 'maxime@gmail.com', password: 111111, admin: 0)
user3 = User.create!(name:'yoann', rank:'joue avec un planche (avaleur de sucette)', email: 'yoann@gmail.com', password: 111111, admin: 0)
user4 = User.create!(name:'benjamin', rank:'amis des parebrises', email: 'benjamin@gmail.com', password: 111111, admin: 0)

userracket1 = Userracket.create!(racket: racket1, user: user1)
userracket2 = Userracket.create!(racket: racket2, user: user2)
userracket3 = Userracket.create!(racket: racket3, user: user3)
userracket4 = Userracket.create!(racket: racket4, user: user4)

racketreview1 = Racketreview.create!(comment: 'great racket', racket: racket1, user: user1)

