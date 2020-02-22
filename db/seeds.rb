Racket.destroy_all
Userracket.destroy_all
User.destroy_all
Racketreview.destroy_all

racket1 = Racket.create!(brand:'Wilson', model:'Ultra 100', weight: 300,
  headsize: 645, length: 68, price: 220, balance: 32, color: 'blue', material: 'graphite', horizontalstringpattern: 19, verticalstringpattern: 16, male: true)
racket2 = Racket.create!(brand:'Babolat', model:'Pure Aero', weight: 300,
  headsize: 645, length: 68, price: 210, color: 'yellow', material: 'graphite', horizontalstringpattern: 20, verticalstringpattern: 17, male: true)
racket3 = Racket.create!(brand:'Dunlop', model:'CX 200 Tour', weight: 315,
  headsize: 613, length: 65, price: 180, color: 'red', material: 'graphite', horizontalstringpattern: 19, verticalstringpattern: 16, balance: 32, female: true)
racket4 = Racket.create!(brand:'Wilson', model:'Juice', weight: 304,
  headsize: 645, length: 68, price: 190, color: 'blue, yellow', material: 'graphite', horizontalstringpattern: 20, verticalstringpattern: 16, balance: 32, kid: true)
racket5 = Racket.create!(brand:'Wilson', model:'Pro Staff RF 97 Autograf Laver Cup Edition', weight: 340,
  headsize: 626, length: 68, price: 289, color: 'blue', material: 'Graphite', horizontalstringpattern: 19, verticalstringpattern: 16, balance: 30.5, kid: false, male: true, female: false)
racket6 = Racket.create!(brand:'Wilson', model:'Ultra Tour 97', weight: 305,
  headsize: 626, length: 68, price: 189, color: 'blue, dark blue', material: 'graphite', horizontalstringpattern: 20, verticalstringpattern: 18, balance: 31.5, kid: false, male: true, female: true)
racket7 = Racket.create!(brand:'Wilson', model:'Clash 98', weight: 310,
  headsize: 630, length: 68, price: 199, color: 'grey, red', material: 'graphite', horizontalstringpattern: 19, verticalstringpattern: 16, balance: 30.6, kid: false, male: true, female: true)
racket8 = Racket.create!(brand:'Wilson', model:'Ultra 100L', weight: 277,
  headsize: 645, length: 68, price: 143, color: 'blue, dark blue', material: 'graphite', horizontalstringpattern: 19, verticalstringpattern: 16, balance: 32.5, kid: false, male: true, female: true)
racket9 = Racket.create!(brand:'Wilson', model:'Blade 98', weight: 305,
  headsize: 630, length: 68, price: 209, color: 'black, green', material: 'graphite', horizontalstringpattern: 19, verticalstringpattern: 16, balance: 32, kid: false, male: true, female: true)
racket10 = Racket.create!(brand:'Head', model:'Graphene 360+ Prestige Mid', weight: 320,
  headsize: 600, length: 68, price: 31, color: 'red', material: 'graphite', horizontalstringpattern: 19, verticalstringpattern: 16, balance: 31, kid: false, male: true, female: true)
racket11 = Racket.create!(brand:'Head', model:'Graphene 360 Radical Pro', weight: 310,
  headsize: 630, length: 68, price: 199, color: 'grey, red', material: 'graphite', horizontalstringpattern: 19, verticalstringpattern: 16, balance: 31.5, kid: false, male: true, female: true)
racket12 = Racket.create!(brand:'Dunlop', model:'Srixon SX 300 Tour', weight: 310,
  headsize: 645, length: 68, price: 197, color: 'black, yellow', material: 'graphite', horizontalstringpattern: 19, verticalstringpattern: 16, balance: 31.5, kid: false, male: true, female: true)
racket13 = Racket.create!(brand:'Dunlop', model:'Srixon CX 200 Tour', weight: 315,
  headsize: 613, length: 68, price: 207, color: 'red, black', material: 'graphite', horizontalstringpattern: 20, verticalstringpattern: 18, balance: 32.6, kid: false, male:true, female: true)
racket14 = Racket.create!(brand:'Dunlop', model:'Srixon SX 300 LS', weight: 285,
  headsize: 645, length: 68, price: 179, color: 'black, yellow', material: 'graphite', horizontalstringpattern: 19, verticalstringpattern: 16, balance: 32.5, kid: false, male: true, female: true)
racket15 = Racket.create!(brand:'Yonex', model:'V Core 100 Galaxy', weight: 300,
  headsize: 645, length: 68, price: 184, color: 'black', material: 'graphite', horizontalstringpattern: 19, verticalstringpattern: 16, balance: 32, kid: false, male:true, female: true)
racket16 = Racket.create!(brand:'Yonex', model:'V Core Game Flame', weight: 270,
  headsize: 645, length: 68, price: 129, color: 'red', material: 'graphite', horizontalstringpattern: 19, verticalstringpattern: 16, balance: 33, kid: false, male: true, female: true)
racket17 = Racket.create!(brand:'Yonex', model:'Vcore Pro 97 Teal', weight: 330,
  headsize: 626, length: 68, price: 209, color: 'black', material: 'graphite', horizontalstringpattern: 19, verticalstringpattern: 16, balance: 31, kid: false, male: true, female: true)


user1 = User.create!(name:'marc', rank:'pgm de la raquette', email: 'marc@gmail.com', password: 111111, admin: 1)
user2 = User.create!(name:'maxime', rank:'a deja sniffé de la terre battue', email: 'maxime@gmail.com', password: 111111, admin: 0)
user3 = User.create!(name:'yoann', rank:'joue avec un planche (avaleur de sucette)', email: 'yoann@gmail.com', password: 111111, admin: 0)
user4 = User.create!(name:'benjamin', rank:'amis des parebrises', email: 'benjamin@gmail.com', password: 111111, admin: 0)

userracket1 = Userracket.create!(racket: racket1, user: user1)
userracket2 = Userracket.create!(racket: racket2, user: user2)
userracket3 = Userracket.create!(racket: racket3, user: user3)
userracket4 = Userracket.create!(racket: racket4, user: user4)

racketreview1 = Racketreview.create!(comment: 'great racket', racket: racket1, user: user1)
