class WilsonSeeds do
  def initialize(brand)
    @brand = brand
  end

  def create()
    blade1 = Racket.create!(#
      brand: @brand, 
      model:'Pure Strike 100', 
      price: 219.95,
      headsize: 645, 
      length: 68.5,  
      weight: 300,
      swingweight:295,
      
      balance: 32, 
      material: 'graphite', 
      string_pattern: 1619, 
      stiffness: 72, 
      swingweight:295, 
      strength: "Control/Feel", 
      players: "Dominic Thiem, Ana Kontaveit", 
      kid: false, adult: true,
      description:
        "\t Nothing compares to the feeling of hitting the exact spot you aimed for. Feel the Pure Strike's sharp control as you hit hard with full confidence, control the game on your terms, and keep all the pressure on your opponent. \n
        With the 3rd generation of the Pure Strike, Babolat Evolves control for the modern game. Dream of that classic feel? The Pure Strike's sharp control is engineered to meet your demands as an aggressive hard-hitting player, combining dynamic control and pure feel for unprecedented response so you can own the court with every shot. \n
        You’ll love the Pure Strike 100 if you’re an aggressive player looking for a larger sweet spot and increased tolerance, but you don’t want to compromise control."
    )
  end
end