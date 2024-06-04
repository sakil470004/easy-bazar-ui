import Categories from "./Categories";
import FlashSale from "./FlashSale";
import NewProduct from "./NewProduct";
import OnlyForYou from "./OnlyForYou";
import Slider from "./Slider";

function Home() {
  return (
    <div className="px-6">
      <Slider />
      <FlashSale/>
      <Categories />

      <OnlyForYou/>
      <NewProduct />
    </div>
  );
}

export default Home;
