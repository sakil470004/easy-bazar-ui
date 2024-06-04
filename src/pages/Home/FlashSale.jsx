import { useEffect, useState } from "react";
import FlashSaleCard from "./FlashSaleCard";
import CountUp from "react-countup";
import useFunction from "../../hooks/useFunction";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Link } from "react-router-dom";
function FlashSale() {
  const [products, setProducts] = useState([]);
  const {isEmpty}=useFunction()
  useEffect(() => {
    fetch("https://easy-bazar-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        data.reverse();
        const filteredData = data.filter(
          (product) => product?.flash_sale === true
        );

        setProducts(filteredData.slice(0, 6));
      });
  }, []);
  if (isEmpty(products)) {
    return <LoadingSpinner />;
  }
  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold text-orange-400 uppercase">
        FlashSale
      </h2>
      <div className="flex md:flex-row flex-col shadow-xl rounded-lg p-6 justify-between items-center">
        <div className="flex md:flex-row flex-col gap-9 items-center">
          <p className="text-xl text-orange-400 font-medium">Only Sale Now</p>
          <div className="flex gap-4 items-center ">
            <p>Ending In</p>
            <div className="flex gap-3">
              <CountUp start={23} end={0} duration={1000 * 60 * 24} delay={0}>
                {({ countUpRef }) => (
                  <div className="btn bg-orange-400 btn-sm text-white">
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <CountUp start={59} end={0} duration={1000 * 60} delay={0}>
                {({ countUpRef }) => (
                  <div className="btn bg-orange-400 btn-sm text-white">
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <CountUp start={60} end={0} duration={1000} delay={0}>
                {({ countUpRef }) => (
                  <div className="btn bg-orange-400 btn-sm text-white">
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
          </div>
        </div>
        <Link to={'/flash-sale'} className="btn font-bold btn-warning btn-outline btn-sm mt-4">
          View More {">>"}
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-6 gap-4">
        {products.map((product) => (
          <FlashSaleCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

export default FlashSale;
