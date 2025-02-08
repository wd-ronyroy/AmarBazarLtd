import { Link } from "react-router-dom";

const HotProducts = () => {
    return (
      <div>
        <div className="flex justify-between mx-6">
          <h2 className="text-2xl font-semibold mt-4 ">
            Smartphone Hot Collection
          </h2>
          <Link to='/hot-smartphone' className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-sm float-right">
            View all
          </Link>
        </div>
  
        {/* Product Section */}
        <div className=" mx-6 my-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-4 rounded-lg text-center shadow-md relative">
            <span className="absolute top-2 left-1 bg-green-500 text-white text-xs font-bold px-2 pl-3 py-1 rounded">
              Buy
            </span>
            <img className="h-50" src="./img/Navy and Pink Modern Online Store Logo.png" alt="" />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-gray-600">Starting from</p>
            <p className="text-lg font-bold">XXXXX</p>
          </div>
          <div className="p-4 rounded-lg text-center shadow-md relative">
            <span className="absolute top-2 left-1 bg-green-500 text-white text-xs font-bold px-2 pl-3 py-1 rounded">
              Buy
            </span>
            <img className="h-50" src="./img/Navy and Pink Modern Online Store Logo.png" alt="" />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-gray-600">Starting from</p>
            <p className="text-lg font-bold">XXXXX</p>
          </div>
          <div className="p-4 rounded-lg text-center shadow-md relative">
            <span className="absolute top-2 left-1 bg-green-500 text-white text-xs font-bold px-2 pl-3 py-1 rounded">
              Buy
            </span>
            <img className="h-50" src="./img/Navy and Pink Modern Online Store Logo.png" alt="" />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-gray-600">Starting from</p>
            <p className="text-lg font-bold">XXXXX</p>
          </div>
          <div className="p-4 rounded-lg text-center shadow-md relative">
            <span className="absolute top-2 left-1 bg-green-500 text-white text-xs font-bold px-2 pl-3 py-1 rounded">
              Buy
            </span>
            <img className="h-50" src="./img/Navy and Pink Modern Online Store Logo.png" alt="" />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-gray-600">Starting from</p>
            <p className="text-lg font-bold">XXXXX</p>
          </div>
          <div className="p-4 rounded-lg text-center shadow-md relative">
            <span className="absolute top-2 left-1 bg-green-500 text-white text-xs font-bold px-2 pl-3 py-1 rounded">
              Buy
            </span>
            <img className="h-50" src="./img/Navy and Pink Modern Online Store Logo.png" alt="" />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-gray-600">Starting from</p>
            <p className="text-lg font-bold">XXXXX</p>
          </div>
          <div className="p-4 rounded-lg text-center shadow-md relative">
            <span className="absolute top-2 left-1 bg-green-500 text-white text-xs font-bold px-2 pl-3 py-1 rounded">
              Buy
            </span>
            <img className="h-50" src="./img/Navy and Pink Modern Online Store Logo.png" alt="" />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-gray-600">Starting from</p>
            <p className="text-lg font-bold">XXXXX</p>
          </div>
          <div className="p-4 rounded-lg text-center shadow-md relative">
            <span className="absolute top-2 left-1 bg-green-500 text-white text-xs font-bold px-2 pl-3 py-1 rounded">
              Buy
            </span>
            <img className="h-50" src="./img/Navy and Pink Modern Online Store Logo.png" alt="" />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-gray-600">Starting from</p>
            <p className="text-lg font-bold">XXXXX</p>
          </div>
          <div className="p-4 rounded-lg text-center shadow-md relative">
            <span className="absolute top-2 left-1 bg-green-500 text-white text-xs font-bold px-2 pl-3 py-1 rounded">
              Buy
            </span>
            <img className="h-50" src="./img/Navy and Pink Modern Online Store Logo.png" alt="" />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-gray-600">Starting from</p>
            <p className="text-lg font-bold">XXXXX</p>
          </div>
          <div className="p-4 rounded-lg text-center shadow-md relative">
            <span className="absolute top-2 left-1 bg-green-500 text-white text-xs font-bold px-2 pl-3 py-1 rounded">
              Buy
            </span>
            <img className="h-50" src="./img/Navy and Pink Modern Online Store Logo.png" alt="" />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-gray-600">Starting from</p>
            <p className="text-lg font-bold">XXXXX</p>
          </div>
          <div className="p-4 rounded-lg text-center shadow-md relative">
            <span className="absolute top-2 left-1 bg-green-500 text-white text-xs font-bold px-2 pl-3 py-1 rounded">
              Buy
            </span>
            <img className="h-50" src="./img/Navy and Pink Modern Online Store Logo.png" alt="" />
            <h3 className="text-lg font-semibold">Product Name</h3>
            <p className="text-gray-600">Starting from</p>
            <p className="text-lg font-bold">XXXXX</p>
          </div>
          
          
        </div>
      </div>
    );
  };
  
  export default HotProducts;
  