import React, { useContext, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { ThemeContext } from "../context/themeContext";
import { getData, saveData } from "../services/apis";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../assets/logo/google.png"

/*Images*/
import unaMano from "../assets/logo/una_mano.png";
import LoadingComponent from "../components/widgets/LoadingComponent";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const {
    buttonBackground,
    buttonHoverBackground,
    primaryTextColor,
    secondaryTextColor,
  } = useContext(ThemeContext);
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setShowLoading(true)
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    saveData("/auth/login", formData)
      .then((response) => {
        navigate(`/fashion-shop-fe/`);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const googleLogin = (event)=>{
    event.preventDefault();
    event.stopPropagation();
    setShowLoading(true)
    window.open("http://localhost:8080/auth/google","_self")
    getData("/auth/google")
    .then(response=>{
      console.log('Response',response)
      // navigate('/fashion-shop-fe/')
    })
    .catch(err=>{
      console.log('Error',err)
    })
  }

  return (
    <>
      <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <img className="mx-auto w-52" src={unaMano} alt="Your Company" />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form
              className="mt-8 space-y-6"
              action="#"
              method="POST"
              onSubmit={login}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div className="my-5">
                  <label htmlFor="email-address">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    className="relative block w-full rounded-md border-0 p-2 my-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    className="relative block w-full rounded-md border-0 p-2 my-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Link
                    className={`font-medium ${primaryTextColor} hover:${secondaryTextColor}`}
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={`group relative flex w-full justify-center rounded-md ${buttonBackground} py-2 px-3 text-sm font-semibold text-white hover:${buttonHoverBackground} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-orange-200 group-hover:text-orange-400"
                      aria-hidden="true"
                    />
                  </span>
                  Sign in
                </button>
              </div>
            </form>
            <button
              onClick={googleLogin}
              className={`group relative text-white flex w-full justify-center rounded-md bg-blue-400 hover:bg-blue-600 hover:shadow-lg py-2 px-3 text-sm font-semibold hover:${buttonHoverBackground} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img src={googleIcon} alt="Google icon" className="w-5" />
              </span>
              Google Sign In
            </button>
          </div>
        </div>
        <div className="login-image w-full h-screen hidden lg:block"></div>
      </div>
      <LoadingComponent
        showLoading={showLoading}
        setShowLoading={setShowLoading}
      />
    </>
  );
}
