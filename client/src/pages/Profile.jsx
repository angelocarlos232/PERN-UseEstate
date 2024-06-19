import React from "react";
import NoUser from "../assets/images/no-user.png";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  const handleUpdate = (e) => {
    e.preventDefault();
  };

  const handleDelete = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="w-full">
        <div className="flex justify-center mt-16">
          <h1 className="text-3xl font-bold tracking-widest">
            Update your Profile
          </h1>
        </div>
        <div className="flex justify-center mt-6">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 flex justify-center">
            <form>
              <img src={NoUser}></img>
              <div className="flex flex-col gap-3 w-full">
                <input
                  className="appearance-none rounded-md relative block  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-default-red focus:border-default-red focus:z-10 sm:text-sm"
                  value={currentUser.user.username}
                />
                <input
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-default-red focus:border-default-red focus:z-10 sm:text-sm"
                  placeholder="New Password"
                ></input>
                <button
                  onClick={handleUpdate}
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-default-red hover:bg-default-hover-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-default-red"
                >
                  Update
                </button>
                <button onClick={handleDelete} className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                  Delete Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
