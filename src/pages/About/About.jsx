

const About = () => {
  const product = {
    product_id: "10012",
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with 360-degree sound and 12 hours of playtime.",
    price: 69.99,
    flash_sale: true,
    currency: "USD",
    discount: 15,
    brand: "SoundWave",
    availability: "In Stock",
    ratings: 4.5,
    reviews_count: 250,
    mainImage: {
      url: "https://th.bing.com/th/id/OIP.ME7w8biTCoGCGAD20L1S6wHaHX?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      alt: "Main view of Bluetooth Speaker"
    },
    images: [
      {
        url: "https://th.bing.com/th/id/OIP.VRbnBXo-7QmDmxO40NWDKwHaHa?w=89&h=89&c=1&rs=1&qlt=90&r=0&dpr=1.3&pid=InlineBlock",
        alt: "Front view of Bluetooth Speaker"
      },
      {
        url: "https://th.bing.com/th/id/OIP.PfC8YTkuKoceYDivqS5t7wHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        alt: "Side view of Bluetooth Speaker"
      }
    ],
    features: [
      "360-degree sound",
      "12 hours of playtime",
      "Water-resistant",
      "Bluetooth 5.0",
      "Built-in microphone"
    ],
    colors: ["Black", "Blue", "Red"],
    categories: ["Audio"],
    warranty: "1 year",
    shipping_details: {
      weight: "600g",
      dimensions: "15cm x 10cm x 10cm",
      shipping_cost: 6.99,
      estimated_delivery: "3-5 business days"
    }
  };

  return (
    <div className="m-6">
      <h1 className="text-4xl font-bold text-yellow-500 mb-4">About Easy Bazar</h1>
      <p className="text-lg text-gray-700 mb-8">
        Welcome to Easy Bazar, your number one source for all things [product, ie: electronics, kitchen appliances,
        audio equipment]. We're dedicated to providing you the very best of products, with an emphasis on quality,
        customer service, and uniqueness.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <img className="w-1/3 mb-4" src={product.mainImage.url} alt={product.mainImage.alt} />
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-gray-700 mb-2"><strong>Price:</strong> ${product.price} {product.currency}</p>
        <p className="text-gray-700 mb-2"><strong>Brand:</strong> {product.brand}</p>
        <p className="text-gray-700 mb-2"><strong>Availability:</strong> {product.availability}</p>
        <p className="text-gray-700 mb-2"><strong>Ratings:</strong> {product.ratings} stars ({product.reviews_count} reviews)</p>
        <h3 className="text-xl font-bold mt-4 mb-2">Features:</h3>
        <ul className="list-disc list-inside text-gray-700">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <h2 className="text-3xl font-bold text-yellow-500 mb-4">Our Mission</h2>
      <p className="text-lg text-gray-700 mb-8">
        Our mission is to provide customers with the best online shopping experience by offering high-quality products,
        excellent customer service, and a user-friendly website. We aim to make your shopping experience as easy and
        enjoyable as possible.
      </p>
      <h2 className="text-3xl font-bold text-yellow-500 mb-4">Contact Us</h2>
      <p className="text-lg text-gray-700">
        If you have any questions or comments, please don't hesitate to contact us. We're always here to help!
      </p>
    </div>
  );
};

export default About;
