import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://easy-bazar-server.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
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
    };
    console.log(newData);
    fetch(`https://easy-bazar-server.vercel.app/products/${product?._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast.success("Product updated successfully");
        navigate("/dashboard/products");
        
      });
  };
  return (
    <div className="my-6 ">
      <h2 className="text-2xl font-bold text-orange-400 uppercase">
        Update Product
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
                defaultValue={product?.name}
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
                defaultValue={product?.price}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                defaultValue={product?.description}
                className="w-full border border-gray-300 p-2 rounded"
              ></textarea>
            </div>

            <div>
              <label htmlFor="discount">Discount</label>
              <input
                type="number"
                id="discount"
                name="discount"
                defaultValue={product?.discount}
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
                defaultValue={product?.brand}
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
                defaultValue={product?.ratings}
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
                defaultValue={product?.reviews_count}
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
                defaultValue={product?.mainImage?.url}
                placeholder="Main Image"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="images">Images</label>
              <input
                type="text"
                id="images"
                defaultValue={product?.images?.map((image) => image.url)?.join(",")}
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
                defaultValue={product?.features?.join(",")}
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
                defaultValue={product?.colors?.join(",")}
                placeholder="For multiple colors, separate them with commas `,`"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="categories">Categories</label>
              <input
                type="text"
                defaultValue={product?.categories?.join(",")}
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
                defaultChecked={product?.flash_sale}
                className="border  border-gray-300 p-2 rounded"
              />
              <label htmlFor="flash_sale">Flash Sale</label>
            </div>

            <div className="md:col-span-2">
              <button className="bg-orange-400 text-white p-2 w-full rounded">
                Update Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
