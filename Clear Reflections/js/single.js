const querystring = window.location.search;
const urlParams = new URLSearchParams(querystring);
let productId = urlParams.get('id')
console.log(productId)
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
        image: "/Clear Reflections/img/imgs/wooden framed 1/woodenframed1.jpg",
        image2: "/Clear Reflections/img/imgs/wooden framed 1/woodenframed2.jpg",
        image3: "/Clear Reflections/img/imgs/wooden framed 1/woodenframed3.jpg"
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
        image: "/Clear Reflections/img/imgs/LED/led1.jpg",
        image2: "/Clear Reflections/img/imgs/LED/led2.jpg",
        image3: "/Clear Reflections/img/imgs/LED/led3.jpg"
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
        image: "/Clear Reflections/img/imgs/metal/metal1.jpg",
        image2: "/Clear Reflections/img/imgs/metal/metal2.jpg",
        image3: "/Clear Reflections/img/imgs/metal/metal3.jpg"
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
        image: "/Clear Reflections/img/imgs/decor/decor1.jpg",
        image2: "/Clear Reflections/img/imgs/decor/decor2.jpg",
        image3: "/Clear Reflections/img/imgs/decor/decor3.jpg"
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
        image: "/Clear Reflections/img/imgs/frameless/frameless1.jpg",
        image2: "/Clear Reflections/img/imgs/frameless/frameless2.jpg",
        image3: "/Clear Reflections/img/imgs/frameless/frameless3.jpg"
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
        image: "/Clear Reflections/img/imgs/antique/antique1.jpg",
        image2: "/Clear Reflections/img/imgs/antique/antique2.jpg",
        image3: "/Clear Reflections/img/imgs/antique/antique3.jpg"
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
        image: "/Clear Reflections/img/imgs/bluetooth/bluetooth1.jpg",
        image2: "/Clear Reflections/img/imgs/bluetooth/bluetooth2.jpg",
        image3: "/Clear Reflections/img/imgs/bluetooth/bluetooth3.jpg"
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
        image: "/Clear Reflections/img/imgs/wooden framed 2/woodenframed2.jpg",
        image2: "/Clear Reflections/img/imgs/wooden framed 2/woodenframed1.jpg",
        image3: "/Clear Reflections/img/imgs/wooden framed 2/woodenframed3.jpg"
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
        image: "/Clear Reflections/img/imgs/arcylic/arcylic1.jpg",
        image2: "/Clear Reflections/img/imgs/arcylic/arcylic2.jpg",
        image3: "/Clear Reflections/img/imgs/arcylic/arcylic3.jpg"
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
        image: "/Clear Reflections/img/imgs/decor2/decor1.jpg",
        image2: "/Clear Reflections/img/imgs/decor2/decor2.jpg",
        image3: "/Clear Reflections/img/imgs/decor2/decor3.jpg"
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
        image: "/Clear Reflections/img/imgs/metal2/metal1.jpg",
        image2: "/Clear Reflections/img/imgs/metal2/metal2.jpg",
        image3: "/Clear Reflections/img/imgs/metal2/metal3.jpg"
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
        image: "/Clear Reflections/img/imgs/LED2/led1.jpg",
        image2: "/Clear Reflections/img/imgs/LED2/led2.jpg",
        image3: "/Clear Reflections/img/imgs/LED3/led1.jpg"
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
     image: "/Clear Reflections/img/imgs/frameless2/frameless1.jpg",
        image2: "/Clear Reflections/img/imgs/frameless2/frameless2.jpg",
        image3: "/Clear Reflections/img/imgs/frameless2/frameless3.jpg"
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
        image: "/Clear Reflections/img/imgs/antique2/antique1.jpg",
        image2: "/Clear Reflections/img/imgs/antique2/antique2",
        image3: "/Clear Reflections/img/imgs/antique2/antique3.jpg"
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
        image: "/Clear Reflections/img/imgs/arcylic2/arcylic1.jpg",
        image2: "/Clear Reflections/img/imgs/arcylic2/arcylic2.jpg",
        image3: "/Clear Reflections/img/imgs/arcylic2/arcylic3.jpg"
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
        image: "/Clear Reflections/img/imgs/decor3/decor1.jpg",
        image2: "/Clear Reflections/img/imgs/decor3/decor2.jpg",
        image3: "/Clear Reflections/img/imgs/decor3/decor3.jpg"
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
        image: "/Clear Reflections/img/imgs/bluetooth2/bluetooth1.jpg",
        image2: "/Clear Reflections/img/imgs/bluetooth2/bluetooth2.jpg",
        image3: "/Clear Reflections/img/imgs/bluetooth2/bluetooth3.jpg"
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
        image: "/Clear Reflections/img/imgs/wooden framed 3/woodenframed1.jpg",
        image2: "/Clear Reflections/img/imgs/wooden framed 3/woodenframed2.jpg",
        image3: "/Clear Reflections/img/imgs/wooden framed 3/woodenframed3.jpg"
    },
    {
        id: 19,
        name: "Office Minimal Pro Mirror",
        price: 9900,
        currency: "PKR",
        materialType: "Frameless",
        mirrorType: "Office Mirror",
        description: `Professional office mirror with minimal design.
Strong metal frame for durability.
Perfect for corporate environments.`,
        sizes: ["22x30 inches", "26x36 inches"],
        colors: ["Black", "Grey"],
        image: "/Clear Reflections/img/imgs/frameless2/frameless1.jpg",
        image2: "/Clear Reflections/img/imgs/frameless2/frameless2.jpg",
        image3: "/Clear Reflections/img/imgs/frameless2/frameless3.jpg"
    },
    {
        id: 20,
        name: "Crystal Bright Frameless Mirror",
        price: 17400,
        currency: "PKR",
        materialType: "Frameless",
        mirrorType: "Living Room Mirror",
        description: `Crystal-inspired mirror with bright reflections.
Adds elegance and modern luxury.
Ideal for stylish living rooms.`,
        sizes: ["30x40 inches", "34x46 inches"],
        colors: ["Crystal", "Silver"],
        image: "/Clear Reflections/img/imgs/frameless3/frameless.jpg",
        image2: "/Clear Reflections/img/imgs/frameless3/frameless2.jpg",
        image3: "/Clear Reflections/img/imgs/frameless3/frameless3.jpg",
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
        image: "/Clear Reflections/img/imgs/wooden framed 4/woodenframed1.jpg",
        image2: "/Clear Reflections/img/imgs/wooden framed 4/woodenframed2.jpg",
        image3: "/Clear Reflections/img/imgs/wooden framed 4/woodenframed3.jpg"
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
        image: "/Clear Reflections/img/imgs/wooden framed 5/woodenframed1.jpg",
        image2: "/Clear Reflections/img/imgs/wooden framed 5/woodenframed2.jpg",
        image3: "/Clear Reflections/img/imgs/wooden framed 5/woodenframed3.jpg"
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
        image: "/Clear Reflections/img/imgs/LED3/led2.jpg",
        image2: "/Clear Reflections/img/imgs/LED3/pexels-artbovich-7750122.jpg",
        image3: "/Clear Reflections/img/imgs/LED2/pexels-artbovich-6980732.jpg"
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
        image: "/Clear Reflections/img/imgs/antique3/antique1.jpg",
        image2: "/Clear Reflections/img/imgs/antique3/antique2.jpg",
        image3: "/Clear Reflections/img/imgs/antique3/antique3.jpg"
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
        image: "/Clear Reflections/img/imgs/arcylic3/arcylic1.jpg",
        image2: "/Clear Reflections/img/imgs/arcylic3/arcylic2.jpg",
        image3: "/Clear Reflections/img/imgs/arcylic3/arcylic3.jpg"
    },

];
let singleproduct = mirrors.find(function (items) {
    return items.id == productId
})

let container = document.getElementById('detail')
if (!singleproduct) {
    container.innerHTML = "<h2>Product not found</h2>";
} else {
    container.innerHTML = ` <div class="col-md-4">
          <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${singleproduct.image}" class="d-block w-100" alt="..." style="height: 100%; width: 100%; object-fit: cover; aspect-ratio: 1/1;">
    </div>
    <div class="carousel-item">
      <img src="${singleproduct.image2}" class="d-block w-100" alt="..." style="height: 100%; width: 100%; object-fit: cover; aspect-ratio: 1/1;">
    </div>
    <div class="carousel-item">
      <img src="${singleproduct.image3}" class="d-block w-100" alt="..." style="height: 100%; width: 100%; object-fit: cover; aspect-ratio: 1/1;">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
            <div class="col-md-8">
                <h1>${singleproduct.name}</h1>
                <div class="mb-3">
                    <span class="badge bg-success">In Stock</span>
                </div>
                <p class="h3 text-primary mb-4">Rs.${singleproduct.price}</p>
                <p>${singleproduct.description}</p>
                <p><b>Material Type: </b>${singleproduct.materialType}</p>
                <p><b>Mirror Type: </b>${singleproduct.mirrorType}</p>
                <label for="size">Size:</label>
                <select name="size" id="size">
        <option value="" id="" class=''>${singleproduct.sizes[0]}</option>
        <option value="" id="">${singleproduct.sizes[1]}</option>
    </select>
                <label for="Color">Color:</label>
                <select name="size" id="Color">
        <option value="" id="" class=''>${singleproduct.colors[0]}</option>
        <option value="" id="">${singleproduct.colors[1]}</option>

    </select>
                </div> `
}


function download() {
    html2pdf().from(container).save('abc.pdf');

}


let qtyInput = document.getElementById("qty")
let count = 1

document.getElementById("inc").addEventListener("click", () => {
    count++
    qtyInput.value = count
})

document.getElementById("dec").addEventListener("click", () => {
    if (count > 1) {
        count--
        qtyInput.value = count
    }
})
const currentMirror =mirrors.find(m =>m.id== productId);

        const similarMirrors=mirrors.filter(m=> m.mirrorType===currentMirror.mirrorType &&m.id !==currentMirror.id).slice(0,4);

        const similarcontainer=document.getElementById('similiarprod')
        similarMirrors.forEach(item => {
            similarcontainer.innerHTML += `
                <div class="col-6 col-sm-5 g-3 col-lg-3">
<a href="/Clear Reflections/Pages/singleproduct.html?id=${item.id}" class="card-link text-decoration-none">
                        <div class="card text-left h-100">
                            <img class="card-img-top" src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; aspect-ratio:1 / 1; object-fit: cover;">
                            <div class="card-body">
                                <h4 class="card-title fs-4 text-dark">${item.name}</h4>
                                <p class="card-text text-dark fs-5">Rs. <b>${item.price.toLocaleString()}</b></p>
                                <p class="card-text text-muted fs-6 text-truncate">${item.description}</p>
                            </div>
                        </div>
                    </a>
                </div>
            `;
        });
