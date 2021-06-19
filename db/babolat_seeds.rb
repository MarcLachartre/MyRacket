class BabolatSeed
  def initialize(brand)
    @brand = brand
  end

  def create()

    cul = Racket.create!(#
    brand: @brand, 
    model:'Aero GAero GAero GAero GAero GAero GAero GAero GAero GAero GAero Aero G', 
    price: 139.95,
    headsize: 658, 
    weight: 270,
    swingweight: 301,
    stiffness: 67,
    length: 68.5, 
    balance: 32.0, 
    material: 'graphite', 
    string_pattern: 1619, 
    strength: "Power/Spin", 
    players: "", 
    kid: false, adult: true,
    description:
      "\t Loaded with spin and power, the Aero G offers impressive playability and value if you are looking for an affordable performance racquet. Tour inspired technologies add spin and power to your game, without compromising comfort."
  )

    pure_strike1 = Racket.create!(#
      brand: @brand, 
      model:'Pure Strike 100', 
      price: 219.95, 
      weight: 300,
      headsize: 645, 
      length: 68.5, 
      balance: 32, 
      material: 'graphite', 
      string_pattern: 1619, 
      stiffness: 69, 
      swingweight:319, 
      strength: "Control/Feel", 
      players: "Ana Kontaveit", 
      kid: false, adult: true,
      description:
        "\t Nothing compares to the feeling of hitting the exact spot you aimed for. Feel the Pure Strike's sharp control as you hit hard with full confidence, control the game on your terms, and keep all the pressure on your opponent. \n
        With the 3rd generation of the Pure Strike, Babolat Evolves control for the modern game. Dream of that classic feel? The Pure Strike's sharp control is engineered to meet your demands as an aggressive hard-hitting player, combining dynamic control and pure feel for unprecedented response so you can own the court with every shot. \n
        You’ll love the Pure Strike 100 if you’re an aggressive player looking for a larger sweet spot and increased tolerance, but you don’t want to compromise control."
    )

    pure_strike2 = Racket.create!(#
      brand: @brand, 
      model:'Pure Strike Tour', 
      price: 239.95, 
      weight: 320,
      headsize: 632, 
      length: 68.5, 
      balance: 31.5, 
      material: 'graphite', 
      string_pattern: 1619, 
      stiffness: 65, 
      swingweight:333, 
      strength: "Control/Feel", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Nothing compares to the feeling of hitting the exact spot you aimed for. Feel the Pure Strike's sharp control as you hit hard with full confidence, control the game on your terms, and keep all the pressure on your opponent. \n
        With the 3rd generation of the Pure Strike, Babolat Evolves control for the modern game. Dream of that classic feel? The Pure Strike's sharp control is engineered to meet your demands as an aggressive hard-hitting player, combining dynamic control and pure feel for unprecedented response so you can own the court with every shot. \n
        If you like a heavier racquet, the Pure Strike Tour will have you hitting a heavy ball as you control every shot."
      )

    pure_strike3 = Racket.create!(#
      brand: @brand, 
      model:'Pure Strike', 
      price: 229.95, 
      weight: 305,
      headsize: 632, 
      length: 68.5, 
      balance: 32, 
      material: 'graphite', 
      string_pattern: 1619, 
      stiffness: 66, 
      swingweight: 327, 
      strength: "Control/Feel", 
      players: "Alize Cornet", 
      kid: false, adult: true,
      description:
        "\t Nothing compares to the feeling of hitting the exact spot you aimed for. Feel the Pure Strike's sharp control as you hit hard with full confidence, control the game on your terms, and keep all the pressure on your opponent. \n
        With the 3rd generation of the Pure Strike, Babolat Evolves control for the modern game. Dream of that classic feel? The Pure Strike's sharp control is engineered to meet your demands as an aggressive hard-hitting player, combining dynamic control and pure feel for unprecedented response so you can own the court with every shot. \n
        Looking for control and stability on every shot? Check out the Pure Strike 16/19 and see what the benchmark for the modern game can do to your tennis."
      )

    pure_strike4 = Racket.create!(#
      brand: @brand, 
      model:'Pure Strike Team', 
      price: 209.95, 
      weight: 285,
      headsize: 645, 
      length: 68.5, 
      balance: 33, 
      material: 'graphite', 
      string_pattern: 1619, 
      stiffness: 69, 
      swingweight:309, 
      strength: "Control/Feel", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Nothing compares to the feeling of hitting the exact spot you aimed for. Feel the Pure Strike's sharp control as you hit hard with full confidence, control the game on your terms, and keep all the pressure on your opponent. \n
        With the 3rd generation of the Pure Strike, Babolat Evolves control for the modern game. Dream of that classic feel? The Pure Strike's sharp control is engineered to meet your demands as an aggressive hard-hitting player, combining dynamic control and pure feel for unprecedented response so you can own the court with every shot. \n
        The Pure Strike Team brings control to your game, with lighter weight in an easier-to-maneuver package."
      )

    pure_strike5 = Racket.create!(
      brand: @brand, 
      model:'Pure Strike 18/20', 
      price: 229.95, 
      weight: 305,
      headsize: 632, 
      length: 68.5, 
      balance: 32, 
      material: 'graphite', 
      string_pattern: 1820, 
      stiffness: 66, 
      swingweight: 334, 
      strength: "Control/Feel", 
      players: "Dominic Thiem", 
      kid: false, adult: true,
      description:
        "\t Nothing compares to the feeling of hitting the exact spot you aimed for. Feel the Pure Strike's sharp control as you hit hard with full confidence, control the game on your terms, and keep all the pressure on your opponent. \n
        With the 3rd generation of the Pure Strike, Babolat Evolves control for the modern game. Dream of that classic feel? The Pure Strike's sharp control is engineered to meet your demands as an aggressive hard-hitting player, combining dynamic control and pure feel for unprecedented response so you can own the court with every shot. \n
        If you want to own the court with the extra precision of an 18X20 string pattern, the Pure Strike 18/20 is perfect for your game. You might not beat Dominic Thiem, but you can play with the same racquet."
      )

    pure_strike6 = Racket.create!(
      brand: @brand, 
      model:'Pure Strike Lite', 
      price: 199.95, 
      weight: 265,
      headsize: 645, 
      length: 68.5, 
      balance: 33, 
      material: 'graphite', 
      string_pattern: 1619, 
      stiffness: 68, 
      swingweight: 312, 
      strength: "Control/Feel", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Nothing compares to the feeling of hitting the exact spot you aimed for. Feel the Pure Strike's sharp control as you hit hard with full confidence, control the game on your terms, and keep all the pressure on your opponent. \n
        With the 3rd generation of the Pure Strike, Babolat Evolves control for the modern game. Dream of that classic feel? The Pure Strike's sharp control is engineered to meet your demands as an aggressive hard-hitting player, combining dynamic control and pure feel for unprecedented response so you can own the court with every shot. \n
        You are lokking for your first adult racquet or you simply prefer lighter racquets but still need to keep control? The Pure Strike Lite is made for you"
      )

    pure_drive1 = Racket.create!(#
      brand: @brand, 
      model:'Pure Drive Lite Wimbledon', 
      price: 199.95,
      headsize: 645, 
      weight: 270,
      swingweight: 299,
      stiffness: 69,
      length: 68.5, 
      balance: 33, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Manoeuvrability", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t For all the Wimbledon fans, celebrate The Greatest Championship with the Pure Drive Lite limited edition."
    )

    pure_drive2 = Racket.create!(#
      brand: @brand, 
      model:'Pure Drive 107', 
      price: 199.95,
      headsize: 690, 
      weight: 285,
      swingweight: 299,
      stiffness: 69,
      length: 69, 
      balance: 32, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Power/Explosivity/Feel", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Some call it the definition of power. You will call it your unfair advantage. We call it the Pure Drive. \n
        Babolat launched the Pure Drive in 1994 and quickly established the benchmark for power. With every subsequent model, we’ve innovated and Evolved to meet the demands of the game. It’s no wonder the Pure Drive is one of most popular and versatile racquets in the world. The 10th generation of the Pure Drive takes your game to the next level with point-ending explosive power and increased feel. \n
        With a larger head size, the Pure Drive 107 is perfect for players seeking power and forgiveness."
    )

    pure_drive3 = Racket.create!(#
      brand: @brand, 
      model:'Pure Drive Tour', 
      price: 229.95,
      headsize: 645, 
      weight: 315,
      swingweight: 326,
      stiffness: 70,
      length: 68.5, 
      balance: 31.5, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Power/Explosivity/Feel", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Some call it the definition of power. You will call it your unfair advantage. We call it the Pure Drive. \n
        Babolat launched the Pure Drive in 1994 and quickly established the benchmark for power. With every subsequent model, we’ve innovated and Evolved to meet the demands of the game. It’s no wonder the Pure Drive is one of most popular and versatile racquets in the world. The 10th generation of the Pure Drive takes your game to the next level with point-ending explosive power and increased feel. \n
        The Pure Drive Tour is dedicated to advanced players looking for a heavier frame for extrem power and stability on every shot. Ideal for competitors who are physically and technically at the top of their game."
    )

    pure_drive4 = Racket.create!(#
      brand: @brand, 
      model:'Pure Drive 110', 
      price: 199.95,
      headsize: 710, 
      weight: 255,
      swingweight: 298,
      stiffness: 70,
      length: 70, 
      balance: 33, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Power/Explosivity/Feel", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Some call it the definition of power. You will call it your unfair advantage. We call it the Pure Drive. \n
        Babolat launched the Pure Drive in 1994 and quickly established the benchmark for power. With every subsequent model, we’ve innovated and Evolved to meet the demands of the game. It’s no wonder the Pure Drive is one of most popular and versatile racquets in the world. The 10th generation of the Pure Drive takes your game to the next level with point-ending explosive power and increased feel. \n
        The Pure Drive 110 has an even larger headsize offering forgiveness and extrem maneuverability"
    )

    pure_drive5 = Racket.create!(#
      brand: @brand, 
      model:'Pure Drive Lite', 
      price: 199.95,
      headsize: 645, 
      weight: 270,
      swingweight: 299,
      stiffness: 69,
      length: 68.5, 
      balance: 33, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Power/Explosivity/Feel", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Some call it the definition of power. You will call it your unfair advantage. We call it the Pure Drive. \n
        Babolat launched the Pure Drive in 1994 and quickly established the benchmark for power. With every subsequent model, we’ve innovated and Evolved to meet the demands of the game. It’s no wonder the Pure Drive is one of most popular and versatile racquets in the world. The 10th generation of the Pure Drive takes your game to the next level with point-ending explosive power and increased feel. \n
        A lighter racket for a greater maneuverability. The Pure Drive Lite lets players enjoy their game and hit all their tennis strokes with great ease"
    )

    pure_drive6 = Racket.create!(#
      brand: @brand, 
      model:'Pure Drive Team', 
      price: 199.95,
      headsize: 645, 
      weight: 285,
      swingweight: 313,
      stiffness: 69,
      length: 68.5, 
      balance: 32, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Power/Explosivity/Feel", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Some call it the definition of power. You will call it your unfair advantage. We call it the Pure Drive. \n
        Babolat launched the Pure Drive in 1994 and quickly established the benchmark for power. With every subsequent model, we’ve innovated and Evolved to meet the demands of the game. It’s no wonder the Pure Drive is one of most popular and versatile racquets in the world. The 10th generation of the Pure Drive takes your game to the next level with point-ending explosive power and increased feel. \n
        The Pure Drive Team is dedicated to players seeking a powerful but lighter racket for better handling."
    )
    
    pure_drive7 = Racket.create!(#
      brand: @brand, 
      model:'Pure Drive VS', 
      price: 260.00,
      headsize: 632, 
      weight: 300,
      swingweight: 317,
      stiffness: 68,
      length: 68.5, 
      balance: 32, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Power/Explosivity/Feel", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t You want power. You want precision. And you don't want to compromise. You just defined the Pure Drive VS. \n
        Since 1875, Babolat’s quest has been to challenge the status quo by providing the perfect answers to the most engaged and passionate players. Through expertise based on observation of the game, Babolat developed a signature with a distinguished DNA: the VS. The Pure Drive VS combines the absolute power of the Pure Drive with the extra precision that your game demands."
    )

    pure_drive8 = Racket.create!(#
      brand: @brand, 
      model:'Pure Drive', 
      price: 219.95,
      headsize: 645, 
      weight: 300,
      swingweight: 320,
      stiffness: 71,
      length: 68.5, 
      balance: 32, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Power/Explosivity/Feel", 
      players: "Fabio Fognini, Garbiñe Muguruza", 
      kid: false, adult: true,
      description:
        "\t Some call it the definition of power. You will call it your unfair advantage. We call it the Pure Drive. \n
        Babolat launched the Pure Drive in 1994 and quickly established the benchmark for power. With every subsequent model, we’ve innovated and Evolved to meet the demands of the game. It’s no wonder the Pure Drive is one of most popular and versatile racquets in the world. The 10th generation of the Pure Drive takes your game to the next level with point-ending explosive power and increased feel. \n
        You’ll love the Pure Drive if you’re looking for the perfect balance between power and feel on every shot."
    )

    pure_drive9 = Racket.create!(#
      brand: @brand, 
      model:'Pure Drive Super Lite', 
      price: 179.95,
      headsize: 645, 
      weight: 255,


      length: 68.5, 
      balance: 33, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Power/Explosivity/Feel", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Some call it the definition of power. You will call it your unfair advantage. We call it the Pure Drive. \n
        Babolat launched the Pure Drive in 1994 and quickly established the benchmark for power. With every subsequent model, we’ve innovated and Evolved to meet the demands of the game. It’s no wonder the Pure Drive is one of most popular and versatile racquets in the world. The 10th generation of the Pure Drive takes your game to the next level with point-ending explosive power and increased feel. \n
        The Pure Drive Super Lite is perfect for players moving from a junior racquet to an adult one."
    )

    pure_aero1 = Racket.create!(#
      brand: @brand, 
      model:'Pure Aero', 
      price: 249.95,
      headsize: 645, 
      weight: 300,
      swingweight: 324,
      stiffness: 69,
      length: 68.5, 
      balance: 32, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Spin/Power/Feel", 
      players: "Rafa Nadal, Benoit Paire", 
      kid: false, adult: true,
      description:
        "\t Max out your spin and get ready for the fight. With the Pure Aero, anything feels possible, any angle seems reachable… and any opponent is beatable. Babolat created THE spin machine to help feed your insatiable desire to dominate the game. \n
        In 2003, convinced that players would use spin to dominate, Babolat launched the Pure Aero: the first racquet engineered specifically for spin. Year after year, we collaborated with Rafael Nadal and top players to innovate and Evolve the world's first aerodynamic frame. The results speak for themselves. With 22 Grand Slam singles titles and counting, the Pure Aero is a feared weapon on tour. Now it's your turn to discover what the ultimate spin machine can bring to your game. \n
        If you want to dominate with spin and power, there’s only one racquet for your game: The Pure Aero. Not sure? Just ask Rafa. Or his opponents."
    )

    pure_aero2 = Racket.create!(#
      brand: @brand, 
      model:'Pure Aero Team', 
      price: 219.95,
      headsize: 645, 
      weight: 285,
      swingweight: 307,
      stiffness: 69,
      length: 68.5, 
      balance: 32, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Spin/Power/Feel", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Max out your spin and get ready for the fight. With the Pure Aero, anything feels possible, any angle seems reachable… and any opponent is beatable. Babolat created THE spin machine to help feed your insatiable desire to dominate the game. \n
        In 2003, convinced that players would use spin to dominate, Babolat launched the Pure Aero: the first racquet engineered specifically for spin. Year after year, we collaborated with Rafael Nadal and top players to innovate and Evolve the world's first aerodynamic frame. The results speak for themselves. With 22 Grand Slam singles titles and counting, the Pure Aero is a feared weapon on tour. Now it's your turn to discover what the ultimate spin machine can bring to your game. \n
        The Pure Aero Team brings spin and power to your game, in lighter weight and an easier-to-maneuver package."
    )

    pure_aero3 = Racket.create!(#
      brand: @brand, 
      model:'Pure Aero VS', 
      price: 269.95,
      headsize: 632, 
      weight: 305,
      swingweight: 321,
      stiffness: 67,
      length: 68.5, 
      balance: 31.5, 
      material: 'graphite', 
      string_pattern: 1620, 
      strength: "Spin/Power/Feel", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t You love spin and your game demands precision. To take your tennis to the next level, you need the Pure Aero VS. \n
        Since 1875, Babolat’s quest has been to challenge the status quo by providing the perfect answers to the most engaged and passionate players. Through expertise based on observation of the game, Babolat developed a signature with a distinguished DNA: the VS. The Pure Aero VS combines the ultimate spin of the Pure Aero with the extra precision that your game demands."
    )

    pure_aero4 = Racket.create!(#
      brand: @brand, 
      model:'Pure Aero Tour', 
      price: 259.95,
      headsize: 645, 
      weight: 315,
      swingweight: 327,
      stiffness: 68,
      length: 68.5, 
      balance: 31.5, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Spin/Power/Feel", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t You love spin and your game demands precision. To take your tennis to the next level, you need the Pure Aero VS. \n
        In 2003, convinced that players would use spin to dominate, Babolat launched the Pure Aero: the first racquet engineered specifically for spin. Year after year, we collaborated with Rafael Nadal and top players to innovate and Evolve the world's first aerodynamic frame. The results speak for themselves. With 22 Grand Slam singles titles and counting, the Pure Aero is a feared weapon on tour. Now it's your turn to discover what the ultimate spin machine can bring to your game. \n
        The heaviest model in the range, the Pure Aero Tour brings maximum spin, increased plow-through & stability, and tour level power to your game."
    )    

    pure_aero5 = Racket.create!(#
      brand: @brand, 
      model:'Pure Aero Lite', 
      price: 204.95,
      headsize: 645, 
      weight: 270,
      swingweight: 311,
      stiffness: 68,
      length: 68.5, 
      balance: 33.0, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Spin/Power/Feel", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t You love spin and your game demands precision. To take your tennis to the next level, you need the Pure Aero VS. \n
        In 2003, convinced that players would use spin to dominate, Babolat launched the Pure Aero: the first racquet engineered specifically for spin. Year after year, we collaborated with Rafael Nadal and top players to innovate and Evolve the world's first aerodynamic frame. The results speak for themselves. With 22 Grand Slam singles titles and counting, the Pure Aero is a feared weapon on tour. Now it's your turn to discover what the ultimate spin machine can bring to your game. \n
        Light, maneuverable, and spin friendly racquet, the Pure Aero Lite is a great option whether you are a junior transitioning into an adult racquet or you’re an adult looking for a user-friendly racquet."
    )    

    pure_aero6 = Racket.create!(#
      brand: @brand, 
      model:'Pure Aero Super Lite', 
      price: 189.95,
      headsize: 645, 
      weight: 255,
      swingweight: 303,
      stiffness: 69,
      length: 68.5, 
      balance: 33.0, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Spin/Power/Feel", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t You love spin and your game demands precision. To take your tennis to the next level, you need the Pure Aero VS. \n
        In 2003, convinced that players would use spin to dominate, Babolat launched the Pure Aero: the first racquet engineered specifically for spin. Year after year, we collaborated with Rafael Nadal and top players to innovate and Evolve the world's first aerodynamic frame. The results speak for themselves. With 22 Grand Slam singles titles and counting, the Pure Aero is a feared weapon on tour. Now it's your turn to discover what the ultimate spin machine can bring to your game. \n
        Lightest model of the Pure Aero models,the Pure Aero Super Lite is ideal as a first adult racquet for a junior player"
    )
    
    pure_aero7 = Racket.create!(#
      brand: @brand, 
      model:'Pure Aero RAFA', 
      price: 259.95,
      headsize: 645, 
      weight: 300,
      swingweight: 324,
      stiffness: 67,
      length: 68.5, 
      balance: 32, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Spin/Power/Feel", 
      players: "Rafa Nadal", 
      kid: false, adult: true,
      description:
        "\t Max out your spin and get ready for the fight. With the Pure Aero, anything feels possible, any angle seems reachable… and any opponent is beatable. Babolat created THE spin machine to help feed your insatiable desire to dominate the game. \n
        In 2003, convinced that players would use spin to dominate, Babolat launched the Pure Aero: the first racquet engineered specifically for spin. Year after year, we collaborated with Rafael Nadal and top players to innovate and Evolve the world's first aerodynamic frame. The results speak for themselves. With 22 Grand Slam singles titles and counting, the Pure Aero is a feared weapon on tour. Now it's your turn to discover what the ultimate spin machine can bring to your game. \n
        Dedication, grit, humility. It's time to channel your inner Rafa with a Pure Aero designed by the man himself. \n
        Warning: side effects include dominating the game with spin and power."
    )

    pure_aero8 = Racket.create!(#
      brand: @brand, 
      model:'Pure Aero +', 
      price: 249.95,
      headsize: 645, 
      weight: 300,
      swingweight: 330,
      stiffness: 68,
      length: 70.0, 
      balance: 32, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Spin/Power/Feel", 
      players: "Sam Querry, Jo-Wilfried Tsonga", 
      kid: false, adult: true,
      description:
        "\t Max out your spin and get ready for the fight. With the Pure Aero, anything feels possible, any angle seems reachable… and any opponent is beatable. Babolat created THE spin machine to help feed your insatiable desire to dominate the game. \n
        In 2003, convinced that players would use spin to dominate, Babolat launched the Pure Aero: the first racquet engineered specifically for spin. Year after year, we collaborated with Rafael Nadal and top players to innovate and Evolve the world's first aerodynamic frame. The results speak for themselves. With 22 Grand Slam singles titles and counting, the Pure Aero is a feared weapon on tour. Now it's your turn to discover what the ultimate spin machine can bring to your game. \n
        Dedication, grit, humility. It's time to channel your inner Rafa with a Pure Aero designed by the man himself. \n
        Warning: side effects include dominating the game with spin and power."
    )

    aero_g1 = Racket.create!(#
      brand: @brand, 
      model:'Aero G', 
      price: 139.95,
      headsize: 658, 
      weight: 270,
      swingweight: 301,
      stiffness: 67,
      length: 68.5, 
      balance: 32.0, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Power/Spin", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Loaded with spin and power, the Aero G offers impressive playability and value if you are looking for an affordable performance racquet. Tour inspired technologies add spin and power to your game, without compromising comfort."
    )

    evo1 = Racket.create!(#
      brand: @brand, 
      model:'EVO Drive 115', 
      price: 159.95,
      headsize: 742, 
      weight: 240,
      swingweight: 313,
      stiffness: 67,
      length: 70.0, 
      balance: 34.0, 
      material: 'graphite', 
      string_pattern: 1617, 
      strength: "Easy Power/Comfort/ Forgiveness", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Enjoying the self-improvement challenge of tennis? Check out the EVO Drive. Whether you want to have fun with friends or want to see how far you can take your game (why not both?!), this affordable performance racquet provides easy power and comfort as you enjoy tennis and reach your full potential. \n
        Looking for easy power, comfort in an oversized racquet? You’ll love the EVO Drive 115."
    )   

    evo2 = Racket.create!(#
      brand: @brand, 
      model:'Strike EVO', 
      price: 149.95,
      headsize: 658, 
      weight: 280,
      swingweight: 308,
      stiffness: 65,
      length: 68.5, 
      balance: 32.0, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Power/Comfort/Control", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t For you, competition is more about self-improvement than pure rivalry. So we made a racquet just for your game. The Strike EVO is an affordable performance racquet that offers easy power, control, and comfort to help you reach your full potential."
    )   

    evo3 = Racket.create!(#
      brand: @brand, 
      model:'EVO Drive Tour', 
      price: 159.95,
      headsize: 658, 
      weight: 285,
      swingweight: 318,
      stiffness: 68,
      length: 68.5, 
      balance: 32.0, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Power/Comfort", 
      players: "", 
      kid: false, adult: true,
      description:
      "\t Enjoying the self-improvement challenge of tennis? Check out the EVO Drive. Whether you want to have fun with friends or want to see how far you can take your game (why not both?!), this affordable performance racquet provides easy power and comfort as you enjoy tennis and reach your full potential. \n
      Looking for power and comfort, but you prefer a heavier racquet for more stability? You’ll love the EVO Drive Tour."
  )

    evo4 = Racket.create!(#
      brand: @brand, 
      model:'EVO Drive Lite', 
      price: 139.95,
      headsize: 670, 
      weight: 255,
      swingweight: 295,
      stiffness: 67,
      length: 68.5, 
      balance: 32.0, 
      material: 'graphite', 
      string_pattern: 1617, 
      strength: "Easy Power/Comfort/ Forgiveness", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Enjoying the self-improvement challenge of tennis? Check out the EVO Drive. Whether you want to have fun with friends or want to see how far you can take your game (why not both?!), this affordable performance racquet provides easy power and comfort as you enjoy tennis and reach your full potential. \n
        The EVO Drive Lite bring easy power and comfort to your game, in a lighter, easier-to-maneuver weight."
    )  

    evo5 = Racket.create!(#
      brand: @brand, 
      model:'EVO Drive Lite W', 
      price: 139.95,
      headsize: 670, 
      weight: 255,
      swingweight: 295,
      stiffness: 67,
      length: 68.5, 
      balance: 32.0, 
      material: 'graphite', 
      string_pattern: 1617, 
      strength: "Easy Power/Comfort/ Forgiveness", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Enjoying the self-improvement challenge of tennis? Check out the EVO Drive. Whether you want to have fun with friends or want to see how far you can take your game (why not both?!), this affordable performance racquet provides easy power and comfort as you enjoy tennis and reach your full potential. \n
        The EVO Drive Lite W brings easy power and comfort to your game, in a lighter, easier-to-maneuver weight. This alternative style allows you to express your unique style"
    )    

    evo6 = Racket.create!(#
      brand: @brand, 
      model:'EVO Drive W', 
      price: 149.95,
      headsize: 670, 
      weight: 270,
      swingweight: 302,
      stiffness: 68,
      length: 68.5, 
      balance: 32.0, 
      material: 'graphite', 
      string_pattern: 1617, 
      strength: "Easy Power/Comfort/ Forgiveness", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Enjoying the self-improvement challenge of tennis? Check out the EVO Drive. Whether you want to have fun with friends or want to see how far you can take your game (why not both?!), this affordable performance racquet provides easy power and comfort as you enjoy tennis and reach your full potential. \n
        The EVO Drive brings easy power and comfort to your game. This alternative style allows you to express your unique style"
    )  

    evo7 = Racket.create!(#
      brand: @brand, 
      model:'EVO Drive', 
      price: 149.95,
      headsize: 670, 
      weight: 270,
      swingweight: 302,
      stiffness: 68,
      length: 68.5, 
      balance: 32.0, 
      material: 'graphite', 
      string_pattern: 1617, 
      strength: "Easy Power/Comfort/ Forgiveness", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Enjoying the self-improvement challenge of tennis? Check out the EVO Drive. Whether you want to have fun with friends or want to see how far you can take your game (why not both?!), this affordable performance racquet provides easy power and comfort as you enjoy tennis and reach your full potential. \n
        The EVO Drive brings easy power and comfort to your game. This alternative style allows you to express your unique style"
    )    

    boost1 = Racket.create!(#
      brand: @brand, 
      model:'Boost Aero W', 
      price: 99.95,
      headsize: 658, 
      weight: 260,


      length: 68.5, 
      balance: 34.0, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Lightness/Power/ Manoeuvrability", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Smash, serve, volley, hit winners, drop shots… Whether you’re new to tennis or restarting it with new ambitions, the Boost Aero will help you to do it all. And even better, it performs all of the above at a price that’s affordable for any player’s budget"
    )

    boost2 = Racket.create!(#
      brand: @brand, 
      model:'Boost Aero', 
      price: 99,
      headsize: 658, 
      weight: 260,


      length: 68.5, 
      balance: 34.0, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Lightness/Power/ Manoeuvrability", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Smash, serve, volley, hit winners, drop shots… Whether you’re new to tennis or restarting it with new ambitions, the Boost Aero will help you to do it all. And even better, it performs all of the above at a price that’s affordable for any player’s budget"
    )   
 
    boost3 = Racket.create!(#
      brand: @brand, 
      model:'Boost Strike', 
      price: 89,
      headsize: 658, 
      weight: 280,


      length: 68.5, 
      balance: 32.5, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Power/Manoeuvrability", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Smash, serve, volley, hit winners, drop shots… Whether you’re new to tennis or restarting it with new ambitions, the Boost Strike will help you to do it all. And even better, it performs all of the above at a price that’s affordable for any player’s budget"
    )   
 
    boost4 = Racket.create!(#
      brand: @brand, 
      model:'Boost Drive', 
      price: 89.95,
      headsize: 680, 
      weight: 260,
      length: 68.5, 
      balance: 34.5, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Power/Lightness/ Manoeuvrability", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Are you looking for a new frame to start or restart tennis? Whether it be to improve your game or just to have fun on court, we made sure we put all the ingredients to boost your game. We developed powerful and easy-to-play frames to make sure you can easily enhance your tennis skills."
    )  

    boost5 = Racket.create!(
      brand: @brand, 
      model:'Boost Drive W', 
      price: 89.95,
      headsize: 680, 
      weight: 260,
      length: 68.5, 
      balance: 34.5, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Power/Lightness/ Manoeuvrability", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Are you looking for a new frame to start or restart tennis? Whether it be to improve your game or just to have fun on court, we made sure we put all the ingredients to boost your game. We developed powerful and easy-to-play frames to make sure you can easily enhance your tennis skills."
    )   

    boost6 = Racket.create!(#
      brand: @brand, 
      model:'Boost Wimbledon', 
      price: 89.95,
      headsize: 680, 
      weight: 260,

      
      length: 68.5, 
      balance: 34.5, 
      material: 'graphite', 
      string_pattern: 1619, 
      strength: "Power/Lightness/ Manoeuvrability", 
      players: "", 
      kid: false, adult: true,
      description:
        "\t Smash, serve, volley, hit winners, drop shots… Whether you’re new to tennis or restarting it with new ambitions, the Boost will help you to do it all. \n
        With a design inspired from the British Grand Slam, the Boost Wimbledon will allow you to make smashs, dropshots and aces with elegance!"
    )   
  end
end
