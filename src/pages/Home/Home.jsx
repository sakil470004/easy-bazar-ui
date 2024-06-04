import Categories from "./Categories";
import NewProduct from "./NewProduct";
import Slider from "./Slider";

function Home() {
  return (
    <div className="px-6">
      <Slider />
      <Categories />
      <NewProduct />
    </div>
  );
}

export default Home;
