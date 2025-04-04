import { useState } from 'react';
import backgroundimg from "../assets/frame09.jpg"

function Signin() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  return (
    <div
      className="h-[600px] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundimg})` }} // Replace with your image path
    >
      <p className="pl-[400px] text-5xl text-blue-900 pt-10 animate-bounce">WELCOME TO AIRBNB</p>

      <form
        className={`max-w-sm mx-auto ${userDetails.email}`}
        style={{ backgroundColor: userDetails.email }}
      >
        <div className="mb-5 pt-16">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
           your username
          </label>
          <input
            type="username"
            id=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="username"
            required
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-black dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="password"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-white dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <div>
          <label
            htmlFor="forgot password"
            className="text-blue-600 font-medium text-sm hover:underline ml-66"
          >
            forgot password
          </label>
        </div>
        <button
          type="submit"
          className="text-white ml-32 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Signin
        </button>
      </form>
    </div>
  );
}

export default Signin;



