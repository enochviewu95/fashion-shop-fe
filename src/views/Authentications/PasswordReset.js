import React, { useContext, useEffect, useState } from "react";
import unaMano from "../../assets/logo/una_mano.png";
import { ThemeContext } from "../../context/themeContext";
import {
  Navigate,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import swal from "sweetalert";
import { saveData } from "../../services/apis";

export default function PasswordReset() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [queryParameters] = useSearchParams();
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);

  useEffect(() => {
    setToken(queryParameters.get("token"));
    setUser(queryParameters.get("user"));
  }, [queryParameters]);

  const sendPassword = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (confirmPassword !== password) {
      swal({
        title: "Password Reset failed!",
        text: "Passwords do not match",
        icon: "warning",
        button: "Okay",
      });
      return;
    }

    const formData = new FormData();
    formData.append("password", password);
    formData.append("token", token);
    formData.append("user", user);

    saveData("/auth/set-password",formData)
      .then((response) => {
        //TODO: Create sweet alert
        console.log("Response", response);
      })
      .catch((err) => {
        //TODO: Create sweet alert to display err
        console.log("Response", err);
      });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto w-40" src={unaMano} alt="Your Company" />
        <h2 className="mt-2 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Enter your new password
        </h2>
      </div>
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={sendPassword}
        >
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
          <div className="my-2">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="current-password"
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
              className="relative block w-full rounded-md border-0 p-2 my-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
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
      </div>
    </div>
  );
}
