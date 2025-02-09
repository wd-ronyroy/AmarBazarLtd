import { Link } from "react-router-dom";

const HotSmartPhoneFHome = () => {
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
  
        {/* Hot Smartphone Collection */}
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

        {/* Image Category Product Section  */}
        <div className="flex gap-2 mx-2 ml-6 mr-6 my-4">
          <Link to="#"><img className=" h-110 w-100" src="./img/1.jpeg"/></Link>
          <Link to="#"><img className=" h-110 w-100" src="./img/2.jpeg"/></Link>
          <Link to="#"><img className=" h-110 w-100" src="./img/3.jpeg"/></Link>
          <Link to="#"><img className=" h-110 w-100" src="./img/4.jpeg"/></Link>
        </div>
      </div>
    );
  };
  
  export default HotSmartPhoneFHome;
  