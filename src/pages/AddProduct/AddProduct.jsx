import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

function AddProduct() {
  const {user}=useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const newData = {
      ...data,
      price: data.price,
      discount: data.discount,
      ratings: data.ratings,
      reviews_count: data.reviews_count,
      flash_sale: data.flash_sale === "on" ? true : false,
      images: data.images.split(",").map((image) => {
        image.trim();
        const newObject = {
          url: image,
          alt: data.name,
        };
        return newObject;
      }),
      features: data.features.split(","),
      colors: data.colors.split(","),
      categories: data.categories.split(","),
      mainImage: { url: data.mainImage, alt: data.name },
      addedBy:user?.email
    };
    console.log(newData);
    fetch("https://easy-bazar-server.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Product added successfully");
        form.reset();
      });
  };
  return (
    <div className="my-6 ">
      <h2 className="text-2xl font-bold text-orange-400 uppercase">
        Add Product
      </h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mt-6  grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Price"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                className="w-full border border-gray-300 p-2 rounded"
              ></textarea>
            </div>

            <div>
              <label htmlFor="discount">Discount</label>
              <input
                type="number"
                id="discount"
                name="discount"
                placeholder="Discount is in percentage , e.g. 15 for 15% discount"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label htmlFor="brand">Brand</label>
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Brand"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label htmlFor="ratings">Ratings</label>
              <input
                type="number"
                id="ratings"
                name="ratings"
                placeholder="max 5"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="reviews_count">Reviews Count</label>
              <input
                type="number"
                id="reviews_count"
                name="reviews_count"
                placeholder="Reviews Count"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="mainImage">Main Image</label>
              <input
                type="text"
                id="mainImage"
                name="mainImage"
                placeholder="Main Image"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="images">Images</label>
              <input
                type="text"
                id="images"
                name="images"
                placeholder="For multiple images, separate them with commas `,`"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="features">Features</label>
              <input
                type="text"
                id="features"
                name="features"
                placeholder="For multiple features, separate them with commas `,`"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="colors">Colors</label>
              <input
                type="text"
                id="colors"
                name="colors"
                placeholder="For multiple colors, separate them with commas `,`"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="categories">Categories</label>
              <input
                type="text"
                id="categories"
                name="categories"
                placeholder="For multiple categories, separate them with commas `,`"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div
              className="md:col-span-2
             flex items-center justify-center gap-4 text-xl"
            >
              <input
                type="checkbox"
                id="flash_sale"
                name="flash_sale"
                className="border  border-gray-300 p-2 rounded"
              />
              <label htmlFor="flash_sale">Flash Sale</label>
            </div>

            <div className="md:col-span-2">
              <button className="bg-orange-400 text-white p-2 w-full rounded">
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
