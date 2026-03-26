const querystring = window.location.search;
const urlParams = new URLSearchParams(querystring);
let productId = urlParams.get('id')
console.log(productId)
let mirrors = [
    { id: 1, name: "Royal Wall Mirror 1", price: 8500, currency: "PKR", materialType: "Wooden Framed", mirrorType: "Living Room Mirror", description: "Elegant wooden framed mirror perfect for enhancing living room decor.", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&h=500&fit=crop" },
    { id: 2, name: "Modern Glow Mirror 2", price: 12000, currency: "PKR", materialType: "LED", mirrorType: "Bathroom Mirror", description: "Modern LED mirror with soft lighting, ideal for bathrooms.", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop" },
    { id: 3, name: "Classic Vanity Mirror 3", price: 9600, currency: "PKR", materialType: "Metal Bordered", mirrorType: "Bedroom Mirror", description: "Stylish metal bordered mirror, great for bedroom vanity use.", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&h=500&fit=crop" },
    { id: 4, name: "Luxury Frame Mirror 4", price: 14200, currency: "PKR", materialType: "Decorative", mirrorType: "Living Room Mirror", description: "Luxury decorative mirror that adds a premium touch to interiors.", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop" },
    { id: 5, name: "Elegant Round Mirror 5", price: 7800, currency: "PKR", materialType: "Frameless", mirrorType: "Entryway Mirror", description: "Minimal round frameless mirror, perfect for entryways.", image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=500&h=500&fit=crop" },
    { id: 6, name: "Premium Decor Mirror 6", price: 16500, currency: "PKR", materialType: "Antique", mirrorType: "Dining Room Mirror", description: "Antique-style mirror designed to elevate dining room aesthetics.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=500&fit=crop" },
    { id: 7, name: "Smart Reflection Mirror 7", price: 21000, currency: "PKR", materialType: "Bluetooth", mirrorType: "Bathroom Mirror", description: "Smart mirror with Bluetooth connectivity for a modern bathroom experience.", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=500&fit=crop" },
    { id: 8, name: "Vintage Wall Mirror 8", price: 13400, currency: "PKR", materialType: "Wooden Framed", mirrorType: "Hallway Mirror", description: "Vintage wooden frame mirror, ideal for hallways and classic interiors.", image: "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?w=500&h=500&fit=crop" },
    { id: 9, name: "Minimalist Edge Mirror 9", price: 9100, currency: "PKR", materialType: "Acrylic Bordered", mirrorType: "Office Mirror", description: "Sleek minimalist mirror with acrylic edges, perfect for office spaces.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop" },
    { id: 10, name: "Crystal Shine Mirror 10", price: 17600, currency: "PKR", materialType: "Decorative", mirrorType: "Living Room Mirror", description: "Decorative crystal-style mirror that reflects elegance and brightness.", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop" },
    { id: 11, name: "Royal Wall Mirror 11", price: 10200, currency: "PKR", materialType: "Metal Bordered", mirrorType: "Bedroom Mirror", description: "Durable metal bordered mirror suited for modern bedrooms.", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&h=500&fit=crop" },
    { id: 12, name: "Modern Glow Mirror 12", price: 19800, currency: "PKR", materialType: "LED", mirrorType: "Bathroom Mirror", description: "Premium LED mirror offering bright and energy-efficient lighting.", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=500&h=500&fit=crop" },
    { id: 13, name: "Classic Vanity Mirror 13", price: 8800, currency: "PKR", materialType: "Frameless", mirrorType: "Salon Mirror", description: "Frameless vanity mirror ideal for salon and grooming setups.", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&h=500&fit=crop" },
    { id: 14, name: "Luxury Frame Mirror 14", price: 22100, currency: "PKR", materialType: "Antique", mirrorType: "Living Room Mirror", description: "High-end antique mirror designed for luxurious living spaces.", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&h=500&fit=crop" },
    { id: 15, name: "Elegant Round Mirror 15", price: 9400, currency: "PKR", materialType: "Acrylic Bordered", mirrorType: "Entryway Mirror", description: "Modern round mirror with acrylic border for stylish entryways.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop" },
    { id: 16, name: "Premium Decor Mirror 16", price: 15200, currency: "PKR", materialType: "Decorative", mirrorType: "Dining Room Mirror", description: "Decorative mirror crafted to enhance dining room ambiance.", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&h=500&fit=crop" },
    { id: 17, name: "Smart Reflection Mirror 17", price: 26500, currency: "PKR", materialType: "Bluetooth", mirrorType: "Bathroom Mirror", description: "Advanced smart mirror with Bluetooth and modern design.", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&h=500&fit=crop" },
    { id: 18, name: "Vintage Wall Mirror 18", price: 11000, currency: "PKR", materialType: "Wooden Framed", mirrorType: "Hallway Mirror", description: "Classic wooden vintage mirror perfect for hallways.", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop" },
    { id: 19, name: "Minimalist Edge Mirror 19", price: 9900, currency: "PKR", materialType: "Metal Bordered", mirrorType: "Office Mirror", description: "Minimal metal bordered mirror for professional office spaces.", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=500&fit=crop" },
    { id: 20, name: "Crystal Shine Mirror 20", price: 17400, currency: "PKR", materialType: "Decorative", mirrorType: "Living Room Mirror", description: "Stylish crystal-inspired mirror for elegant interiors.", image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=500&h=500&fit=crop" },
    { id: 21, name: "Royal Wall Mirror 21", price: 8700, currency: "PKR", materialType: "Wooden Framed", mirrorType: "Bedroom Mirror", description: "Wooden framed mirror designed for cozy bedroom settings.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=500&fit=crop" },
    { id: 22, name: "Modern Glow Mirror 22", price: 20500, currency: "PKR", materialType: "LED", mirrorType: "Bathroom Mirror", description: "Bright LED mirror ideal for modern bathrooms.", image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=500&h=500&fit=crop" },
    { id: 23, name: "Classic Vanity Mirror 23", price: 9600, currency: "PKR", materialType: "Frameless", mirrorType: "Salon Mirror", description: "Elegant frameless mirror perfect for salons.", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&h=500&fit=crop" },
    { id: 24, name: "Luxury Frame Mirror 24", price: 18200, currency: "PKR", materialType: "Antique", mirrorType: "Living Room Mirror", description: "Antique luxury mirror crafted for premium living rooms.", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&h=500&fit=crop" },
    { id: 25, name: "Elegant Round Mirror 25", price: 10500, currency: "PKR", materialType: "Acrylic Bordered", mirrorType: "Entryway Mirror", description: "Chic round mirror with acrylic detailing for entrances.", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop" },
    { id: 26, name: "Premium Decor Mirror 26", price: 15800, currency: "PKR", materialType: "Decorative", mirrorType: "Dining Room Mirror", description: "Premium decorative mirror to uplift dining spaces.", image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=500&h=500&fit=crop" },
    { id: 27, name: "Smart Reflection Mirror 27", price: 27000, currency: "PKR", materialType: "Bluetooth", mirrorType: "Bathroom Mirror", description: "Luxury smart mirror with Bluetooth for a futuristic feel.", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&h=500&fit=crop" },
    { id: 28, name: "Vintage Wall Mirror 28", price: 11800, currency: "PKR", materialType: "Wooden Framed", mirrorType: "Hallway Mirror", description: "Vintage wooden mirror designed for timeless hallway decor.", image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=500&h=500&fit=crop" },
    { id: 29, name: "Minimalist Edge Mirror 29", price: 9200, currency: "PKR", materialType: "Metal Bordered", mirrorType: "Office Mirror", description: "Simple and clean mirror design for office environments.", image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=500&h=500&fit=crop" },
    { id: 30, name: "Crystal Shine Mirror 30", price: 19900, currency: "PKR", materialType: "Decorative", mirrorType: "Living Room Mirror", description: "High-end decorative mirror with crystal shine finish.", image: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=500&h=500&fit=crop" },
];
let singleproduct=mirrors.find(function(items){
    return items.id==productId
})

let container=document.getElementById('detail')
container.innerHTML=` <div class="col-md-3">
                <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${singleproduct.image}" class="d-block w-100 img-fluid" alt="Product Image 1">
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-md-9">
                <h1>${singleproduct.name}</h1>
                <div class="mb-3">
                    <span class="badge bg-success">In Stock</span>
                </div>
                <p class="h3 text-primary mb-4">Rs.${singleproduct.price}</p>
                <p>${singleproduct.description}</p>
                <p><b>Material Type: </b>${singleproduct.materialType}</p>
                <p><b>Mirror Type: </b>${singleproduct.mirrorType}</p>
                <button class="btn btn-primary btn-lg">Add to Cart</button>
                <button class="btn btn-primary btn-lg">Download</button>

            </div>`

            //display products similiar products based on category of current  products displayed on the detail page 