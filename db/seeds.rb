Racket.destroy_all
Userracket.destroy_all
User.destroy_all
Racketreview.destroy_all

racket1 = Racket.create!(brand:'Wilson', model:'Ultra 100', weight: 300,
  headsize: 645, length: 68, price: 220)
racket2 = Racket.create!(brand:'Babolat', model:'Pure Aero', weight: 300,
  headsize: 645, length: 68, price: 210)
racket3 = Racket.create!(brand:'Dunlop', model:'CX 200 Tour', weight: 315,
  headsize: 613, length: 65, price: 180)
racket4 = Racket.create!(brand:'Wilson', model:'Juice', weight: 304,
  headsize: 645, length: 68, price: 190)

user1 = User.create!(name:'marc', rank:'pgm de la raquette', email: 'marc@gmail.com', password: 111111)
user2 = User.create!(name:'maxime', rank:'a deja sniffé de la terre battue', email: 'maxime@gmail.com', password: 111111)
user3 = User.create!(name:'yoann', rank:'joue avec un planche (avaleur de sucette)', email: 'yoann@gmail.com', password: 111111)
user4 = User.create!(name:'benjamin', rank:'amis des parebrises', email: 'benjamin@gmail.com', password: 111111)

userracket1 = Userracket.create!(racket: racket1, user: user1)
userracket2 = Userracket.create!(racket: racket2, user: user2)
userracket3 = Userracket.create!(racket: racket3, user: user3)
userracket4 = Userracket.create!(racket: racket4, user: user4)

racketreview1 = Racketreview.create!(comment: 'great racket', racket: racket1, user: user1)
