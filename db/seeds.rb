Racket.destroy_all
Userracket.destroy_all
User.destroy_all

racket1 = Racket.create!(brand:'Wilson', model:'Ultra 100', weight: 300,
  headsize: 645)
racket2 = Racket.create!(brand:'Babolat', model:'Pure Aero', weight: 300,
  headsize: 645)
racket3 = Racket.create!(brand:'Dunlop', model:'CX 200 Tour', weight: 315,
  headsize: 613)
racket4 = Racket.create!(brand:'Wilson', model:'Juice', weight: 304,
  headsize: 645)

user1 = User.create!(name:'marc', rank:'pgm de la raquette')
user2 = User.create!(name:'maxime', rank:'a deja sniffé de la terre battue')
user3 = User.create!(name:'yoann', rank:'joue avec un planche (avaleur de sucette)')
user4 = User.create!(name:'benjamin', rank:'amis des parebrises')

userracket1 = Userracket.create!(racket: racket1, user: user1)
userracket2 = Userracket.create!(racket: racket2, user: user2)
userracket3 = Userracket.create!(racket: racket3, user: user3)
userracket4 = Userracket.create!(racket: racket4, user: user4)

