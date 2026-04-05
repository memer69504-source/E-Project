let  container=document.getElementById('products')
let mirrors = [
    {
        id: 1,
        name: "Regal Oak Reflection",
        price: 8500,
        currency: "PKR",
        materialType: "Wooden Framed",
        mirrorType: "Living Room Mirror",
        description: `Elegant oak wood framed mirror designed for luxury interiors.
Enhances natural light and creates a spacious feel.
Perfect for classic and modern living rooms.`,
        sizes: ["24x36 inches", "30x40 inches"],
        colors: ["Oak Brown", "Dark Walnut"],
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&h=500&fit=crop"
    },
    {
        id: 2,
        name: "Luminous Edge LED Mirror",
        price: 12000,
        currency: "PKR",
        materialType: "LED",
        mirrorType: "Bathroom Mirror",
        description: `Modern LED mirror with soft ambient lighting.
Provides clear visibility for grooming and makeup.
Energy-efficient with sleek minimal design.`,
        sizes: ["20x30 inches", "24x36 inches"],
        colors: ["Cool White", "Warm White"],
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop"
    },
    {
        id: 3,
        name: "Urban Steel Vanity Mirror",
        price: 9600,
        currency: "PKR",
        materialType: "Metal Bordered",
        mirrorType: "Bedroom Mirror",
        description: `Contemporary metal bordered mirror for bedrooms.
Rust-resistant frame ensures long-term durability.
Adds a stylish industrial touch.`,
        sizes: ["18x24 inches", "24x30 inches"],
        colors: ["Matte Black", "Silver"],
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&h=500&fit=crop"
    },
    {
        id: 4,
        name: "Imperial Gold Accent Mirror",
        price: 14200,
        currency: "PKR",
        materialType: "Decorative",
        mirrorType: "Living Room Mirror",
        description: `Luxurious decorative mirror with gold detailing.
Perfect for statement walls and premium interiors.
Adds elegance and brightness instantly.`,
        sizes: ["30x40 inches", "36x48 inches"],
        colors: ["Gold", "Champagne"],
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop"
    },
    {
        id: 5,
        name: "Aura Round Minimal Mirror",
        price: 7800,
        currency: "PKR",
        materialType: "Frameless",
        mirrorType: "Entryway Mirror",
        description: `Minimal round mirror with a clean frameless design.
Enhances entryway aesthetics beautifully.
Lightweight and easy to mount.`,
        sizes: ["18 inch", "24 inch"],
        colors: ["Clear", "Smoked"],
        image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=500&h=500&fit=crop"
    },
    {
        id: 6,
        name: "Vintage Charm Dining Mirror",
        price: 16500,
        currency: "PKR",
        materialType: "Antique",
        mirrorType: "Dining Room Mirror",
        description: `Antique style mirror with detailed craftsmanship.
Perfect for dining areas with classic decor.
Creates a warm vintage ambiance.`,
        sizes: ["32x42 inches", "36x50 inches"],
        colors: ["Antique Gold", "Bronze"],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=500&fit=crop"
    },
    {
        id: 7,
        name: "Smart Aura Bluetooth Mirror",
        price: 21000,
        currency: "PKR",
        materialType: "Bluetooth",
        mirrorType: "Bathroom Mirror",
        description: `Smart mirror with built-in Bluetooth speakers.
Anti-fog and touch sensor technology included.
Ideal for modern luxury bathrooms.`,
        sizes: ["24x36 inches", "30x40 inches"],
        colors: ["Black", "LED Blue"],
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=500&fit=crop"
    },
    {
        id: 8,
        name: "Rustic Hallway Heritage Mirror",
        price: 13400,
        currency: "PKR",
        materialType: "Wooden Framed",
        mirrorType: "Hallway Mirror",
        description: `Rustic wooden frame mirror with vintage appeal.
Perfect for hallways and traditional interiors.
Strong and durable craftsmanship.`,
        sizes: ["28x38 inches", "32x42 inches"],
        colors: ["Rustic Brown", "Teak"],
        image: "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?w=500&h=500&fit=crop"
    },
    {
        id: 9,
        name: "Sleek Office Edge Mirror",
        price: 9100,
        currency: "PKR",
        materialType: "Acrylic Bordered",
        mirrorType: "Office Mirror",
        description: `Minimalist mirror with sleek acrylic edges.
Perfect for professional office setups.
Lightweight and modern design.`,
        sizes: ["20x28 inches", "24x36 inches"],
        colors: ["Black", "Transparent"],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop"
    },
    {
        id: 10,
        name: "Crystal Luxe Reflection Mirror",
        price: 17600,
        currency: "PKR",
        materialType: "Decorative",
        mirrorType: "Living Room Mirror",
        description: `Crystal-style decorative mirror with elegant shine.
Enhances brightness and luxury feel.
Perfect centerpiece for living rooms.`,
        sizes: ["30x40 inches", "36x48 inches"],
        colors: ["Crystal Silver", "Gloss White"],
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop"
    },

    {
        id: 11,
        name: "Modern Steel Bedroom Mirror",
        price: 10200,
        currency: "PKR",
        materialType: "Metal Bordered",
        mirrorType: "Bedroom Mirror",
        description: `Durable steel framed mirror for bedrooms.
Sleek design with modern aesthetics.
Easy wall mounting.`,
        sizes: ["22x30 inches", "26x34 inches"],
        colors: ["Black", "Gunmetal"],
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&h=500&fit=crop"
    },
    {
        id: 12,
        name: "GlowMax LED Vanity Mirror",
        price: 19800,
        currency: "PKR",
        materialType: "LED",
        mirrorType: "Bathroom Mirror",
        description: `High-end LED mirror with adjustable brightness.
Energy saving and stylish.
Ideal for premium bathrooms.`,
        sizes: ["24x36 inches", "28x40 inches"],
        colors: ["Cool White", "Neutral White"],
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=500&h=500&fit=crop"
    },
    {
        id: 13,
        name: "Salon Pro Frameless Mirror",
        price: 8800,
        currency: "PKR",
        materialType: "Frameless",
        mirrorType: "Salon Mirror",
        description: `Professional frameless mirror for salons.
Provides clean and clear reflections.
Durable and scratch resistant.`,
        sizes: ["20x30 inches", "24x36 inches"],
        colors: ["Clear"],
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&h=500&fit=crop"
    },
    {
        id: 14,
        name: "Royal Antique Grande Mirror",
        price: 22100,
        currency: "PKR",
        materialType: "Antique",
        mirrorType: "Living Room Mirror",
        description: `Luxury antique mirror with royal design.
Perfect for grand interiors.
Adds timeless elegance.`,
        sizes: ["36x48 inches", "40x60 inches"],
        colors: ["Gold", "Bronze"],
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&h=500&fit=crop"
    },
    {
        id: 15,
        name: "EntryGlow Round Mirror",
        price: 9400,
        currency: "PKR",
        materialType: "Acrylic Bordered",
        mirrorType: "Entryway Mirror",
        description: `Modern round mirror with acrylic border.
Enhances entrance decor beautifully.
Stylish and lightweight.`,
        sizes: ["20 inch", "26 inch"],
        colors: ["White", "Black"],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop"
    },
    {
        id: 16,
        name: "Dining Elegance Reflector",
        price: 15200,
        currency: "PKR",
        materialType: "Decorative",
        mirrorType: "Dining Room Mirror",
        description: `Elegant decorative mirror crafted for dining spaces.
Enhances lighting and creates a welcoming atmosphere.
Premium finish with long-lasting durability.`,
        sizes: ["28x38 inches", "32x44 inches"],
        colors: ["Gold", "Ivory"],
        image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&h=500&fit=crop"
    },
    {
        id: 17,
        name: "Smart Luxe Vision Mirror",
        price: 26500,
        currency: "PKR",
        materialType: "Bluetooth",
        mirrorType: "Bathroom Mirror",
        description: `Advanced smart mirror with Bluetooth connectivity.
Anti-fog technology for clear reflection.
Perfect for modern smart homes.`,
        sizes: ["30x40 inches", "36x48 inches"],
        colors: ["Black", "Blue LED"],
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&h=500&fit=crop"
    },
    {
        id: 18,
        name: "Vintage Corridor Classic",
        price: 11000,
        currency: "PKR",
        materialType: "Wooden Framed",
        mirrorType: "Hallway Mirror",
        description: `Classic vintage mirror ideal for corridors.
Wooden craftsmanship with timeless design.
Adds charm to traditional interiors.`,
        sizes: ["26x36 inches", "30x42 inches"],
        colors: ["Teak", "Brown"],
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop"
    },
    {
        id: 19,
        name: "Office Minimal Pro Mirror",
        price: 9900,
        currency: "PKR",
        materialType: "Metal Bordered",
        mirrorType: "Office Mirror",
        description: `Professional office mirror with minimal design.
Strong metal frame for durability.
Perfect for corporate environments.`,
        sizes: ["22x30 inches", "26x36 inches"],
        colors: ["Black", "Grey"],
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=500&fit=crop"
    },
    {
        id: 20,
        name: "Crystal Bright Decor Mirror",
        price: 17400,
        currency: "PKR",
        materialType: "Decorative",
        mirrorType: "Living Room Mirror",
        description: `Crystal-inspired mirror with bright reflections.
Adds elegance and modern luxury.
Ideal for stylish living rooms.`,
        sizes: ["30x40 inches", "34x46 inches"],
        colors: ["Crystal", "Silver"],
        image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=500&h=500&fit=crop"
    },
    {
        id: 21,
        name: "WoodCraft Bedroom Mirror",
        price: 8700,
        currency: "PKR",
        materialType: "Wooden Framed",
        mirrorType: "Bedroom Mirror",
        description: `Simple wooden mirror for cozy bedrooms.
Strong frame with smooth finishing.
Blends with modern and classic decor.`,
        sizes: ["20x28 inches", "24x32 inches"],
        colors: ["Walnut", "Brown"],
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=500&fit=crop"
    },
    {
        id: 22,
        name: "LED Shine Pro Mirror",
        price: 20500,
        currency: "PKR",
        materialType: "LED",
        mirrorType: "Bathroom Mirror",
        description: `Premium LED mirror with bright illumination.
Energy efficient and stylish design.
Perfect for grooming and makeup.`,
        sizes: ["24x36 inches", "30x42 inches"],
        colors: ["Cool White", "Soft White"],
        image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=500&h=500&fit=crop"
    },
    {
        id: 23,
        name: "Salon Elite Reflection",
        price: 9600,
        currency: "PKR",
        materialType: "Frameless",
        mirrorType: "Salon Mirror",
        description: `Elite frameless mirror designed for salons.
Clear reflection with modern style.
Scratch resistant surface.`,
        sizes: ["22x30 inches", "26x36 inches"],
        colors: ["Clear"],
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&h=500&fit=crop"
    },
    {
        id: 24,
        name: "Luxury Hall Frame Mirror",
        price: 18200,
        currency: "PKR",
        materialType: "Antique",
        mirrorType: "Living Room Mirror",
        description: `Antique luxury mirror for hall and living spaces.
Intricate detailing with premium finish.
Enhances royal interiors.`,
        sizes: ["34x46 inches", "38x52 inches"],
        colors: ["Gold", "Bronze"],
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&h=500&fit=crop"
    },
    {
        id: 25,
        name: "Round Aura Decor Mirror",
        price: 10500,
        currency: "PKR",
        materialType: "Acrylic Bordered",
        mirrorType: "Entryway Mirror",
        description: `Round mirror with stylish acrylic border.
Perfect for modern entryways.
Lightweight and easy installation.`,
        sizes: ["22 inch", "28 inch"],
        colors: ["White", "Black"],
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop"
    },
    {
        id: 26,
        name: "Premium Dining Reflector",
        price: 15800,
        currency: "PKR",
        materialType: "Decorative",
        mirrorType: "Dining Room Mirror",
        description: `Premium decorative mirror for dining areas.
Enhances ambiance and lighting.
Durable and stylish design.`,
        sizes: ["30x40 inches", "34x44 inches"],
        colors: ["Ivory", "Gold"],
        image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=500&h=500&fit=crop"
    },
    {
        id: 27,
        name: "Smart Vision Bluetooth Mirror",
        price: 27000,
        currency: "PKR",
        materialType: "Bluetooth",
        mirrorType: "Bathroom Mirror",
        description: `Luxury smart mirror with Bluetooth features.
Touch controls and anti-fog functionality.
Perfect for futuristic bathrooms.`,
        sizes: ["30x44 inches", "36x50 inches"],
        colors: ["Black", "Blue LED"],
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&h=500&fit=crop"
    },
    {
        id: 28,
        name: "Heritage Wall Classic Mirror",
        price: 11800,
        currency: "PKR",
        materialType: "Wooden Framed",
        mirrorType: "Hallway Mirror",
        description: `Heritage style wooden mirror for walls.
Timeless design with durable frame.
Perfect for classic homes.`,
        sizes: ["26x36 inches", "30x40 inches"],
        colors: ["Teak", "Dark Brown"],
        image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=500&h=500&fit=crop"
    },
    {
        id: 29,
        name: "Office Edge Plus Mirror",
        price: 9200,
        currency: "PKR",
        materialType: "Metal Bordered",
        mirrorType: "Office Mirror",
        description: `Modern office mirror with sleek edges.
Minimal and professional look.
Built with strong metal frame.`,
        sizes: ["22x30 inches", "26x34 inches"],
        colors: ["Black", "Silver"],
        image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=500&h=500&fit=crop"
    },
    {
        id: 30,
        name: "Crystal Grand Luxe Mirror",
        price: 19900,
        currency: "PKR",
        materialType: "Decorative",
        mirrorType: "Living Room Mirror",
        description: `Grand crystal mirror with luxury finish.
Perfect for premium interiors.
Reflects elegance and brightness.`,
        sizes: ["34x46 inches", "38x50 inches"],
        colors: ["Crystal", "Gloss White"],
        image: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=500&h=500&fit=crop"
    }
];
let mirrorsWithRatings = mirrors.map(item => ({
    ...item,
    rating: 4.5
}));

  for(let i = 0; i <mirrors.length;i++){


        container.innerHTML+=`<div class="col-6 col-lg-3" id="card">
        <div class="card text-left">
        <img class="card-img-top" src="${mirrors[i].image}" alt="">
        <div class="card-body">
        <h4 class="card-title fs-6">${mirrors[i].name}</h4>
        <p class="card-text text-dark fs-6">Rs. <b>${mirrors[i].price}</b>
        
        <a class="btn btn-primary float-end h-25" href="./singleproduct.html?id=${mirrors[i].id}" role="button">BUY</a>
        </p>
        
        </div>
        </div>
        </div>` 
        
        
    }
 function filters(material) {
      container.innerHTML = ''
      let filter = mirrors.filter(function (items) {

        return items.materialType.toLowerCase().includes(material.toLowerCase())
      })
      for (let i = 0; i < filter.length; i++) {
        container.innerHTML +=`<div class="col-6 col-lg-3" id="card">
        <div class="card text-left">
        <img class="card-img-top" src="${filter[i].image}" alt="">
        <div class="card-body">
        <h4 class="card-title fs-6">${filter[i].name}</h4>
        <p class="card-text text-dark fs-6">Rs. <b>${filter[i].price}</b>
        
        <a class="btn btn-primary float-end h-25" href="./singleproduct.html?id=${filter[i].id}" role="button">BUY</a>
        </p>
        
        </div>
        </div>
        </div>`}




    }

     function filters2(material2) {
      container.innerHTML = ''
      let filter2 = mirrors.filter(function (items2) {

        return items2.mirrorType.toLowerCase().includes(material2.toLowerCase())
      })
      for (let i = 0; i < filter2.length; i++) {
        container.innerHTML +=`<div class="col-6 col-lg-3" id="card">
        <div class="card text-left">
        <img class="card-img-top" src="${filter2[i].image}" alt="">
        <div class="card-body">
        <h4 class="card-title fs-6">${filter2[i].name}</h4>
        <p class="card-text text-dark fs-6">Rs. <b>${filter2[i].price}</b>
        
        <a class="btn btn-primary float-end h-25" href="./singleproduct.html?id=${filter2[i].id}" role="button">BUY</a>
        </p>
        
        </div>
        </div>
        </div>`}
      }

       function filters3(material3) {
      container.innerHTML = ''
      let filter3 = mirrors.filter(function (items3) {

        return items3.name.toLowerCase().includes(material3.toLowerCase())
      })
      for (let i = 0; i < filter3.length; i++) {
        container.innerHTML +=`<div class="col-6 col-lg-3" id="card">
        <div class="card text-left">
        <img class="card-img-top" src="${filter3[i].image}" alt="">
        <div class="card-body">
        <h4 class="card-title fs-6">${filter3[i].name}</h4>
        <p class="card-text text-dark fs-6">Rs. <b>${filter3[i].price}</b>
        
        <a class="btn btn-primary float-end h-25" href="./singleproduct.html?id=${filter3[i].id}" role="button">BUY</a>
        </p>
        
        </div>
        </div>
        </div>`}
      }


let form1=document.getElementById('form1')
let select1=document.getElementById('select1')
form1.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(select1.value)
    filters(select1.value)
})
let form2=document.getElementById('form2')
let select2=document.getElementById('select2')
form2.addEventListener('submit',function(e){
    e.preventDefault()
filters2(select2.value)
})

let form3=document.getElementById('form3')
let input3=document.getElementById('input3')

form3.addEventListener('submit', function(l){
    l.preventDefault()
    filters3(input3.value)
    console.log(input3.value)
})
