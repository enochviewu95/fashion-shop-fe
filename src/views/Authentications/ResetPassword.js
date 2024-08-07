import React, { useContext, useState } from "react";
import unaMano from "../../assets/logo/una_mano.png";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import {saveData} from "../../services/apis";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const {
    primaryTextColor,
    buttonBackground,
    buttonHoverBackground,
    secondaryTextColor,
  } = useContext(ThemeContext);
  const navigate = useNavigate();

  const sendResetEmail = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const formData = new FormData();
    formData.append("email", email);

    saveData("/auth/reset-password", formData)
      .then((response) => {
        navigate("/auth");
      })
      .catch((err) => {
        //TODO: Create a sweet alert component to handle errors
        console.log("Error", err);
      });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto w-40" src={unaMano} alt="Your Company" loading="lazy"/>
        <h2 className="mt-2 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Enter your email
        </h2>
      </div>
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={sendResetEmail}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={(event) => setEmail(event.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className={`group relative flex w-full justify-center rounded-md ${buttonBackground} py-2 px-3 text-sm font-semibold text-white hover:${buttonHoverBackground} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              Reset
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already registered?{" "}
          <Link
            to="/auth"
            className={`font-medium leading-6 ${primaryTextColor} hover:${secondaryTextColor}`}
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
