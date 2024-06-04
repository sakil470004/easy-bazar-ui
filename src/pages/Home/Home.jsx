import Categories from "./Categories";
import NewProduct from "./NewProduct";
import OnlyForYou from "./OnlyForYou";
import Slider from "./Slider";

function Home() {
  return (
    <div className="px-6">
      <Slider />
      <Categories />
      <OnlyForYou/>
      <NewProduct />
    </div>
  );
}

export default Home;
