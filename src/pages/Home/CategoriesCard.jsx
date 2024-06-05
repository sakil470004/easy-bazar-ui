import { Link } from "react-router-dom";

function CategoriesCard({ category }) {

  return (
    <div className="group card max-h-72 card-compact  bg-base-100 shadow-xl rounded-lg ">
      <div className=" w-full  justify-center items-center  transition-all duration-700 overflow-hidden">
        <img
          className="object-cover  max-h-full m-auto rounded-lg group-hover:scale-105 group-hover:transform group-hover:duration-700"
          src={category?.img}
          alt="Shoes"
        />
      </div>
      <div className="card-body">
        <Link to={`/search/${category?.categoryName}`} className="text-xl text-center">{category?.categoryName}</Link>
      </div>
    </div>
  );
}

export default CategoriesCard;
