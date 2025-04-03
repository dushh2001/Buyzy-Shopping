import MyOrdersPage from "./MyOrdersPage";

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container flex-grow p-4 mx-auto md:p-6">
        <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0 ">
          {/* Left Section  */}
          <div className="w-full p-6 rounded-lg shadow-md md:w-1/3 lg:w-1/4">
            <h1 className="mb-4 text-2xl font-bold md:text-3xl">
              Dushan Alwis
            </h1>
            <p className="mb-4 text-lg text-gray-600">kddalwis@gmail.com</p>
            <button className="w-full px-4 py-2 text-white bg-black rounded hover:bg-red-700">
              Logout
            </button>
          </div>
          {/* Right Section: Orders table */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <MyOrdersPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
