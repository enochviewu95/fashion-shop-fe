import { Link, useNavigate } from "react-router-dom";
import unaMano from "../../assets/logo/una_mano.png";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import swal from "sweetalert";
import { useSignupMutation } from "../../redux/services/auth";
import LoadingComponent from "../../components/widgets/LoadingComponent";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userInfo, setUserInfo] = useState(new FormData());
  const [skip, setSkip] = useState(true);
  const [signup, { isFetching }] = useSignupMutation(userInfo, { skip });

  const {
    buttonBackground,
    buttonHoverBackground,
    primaryTextColor,
    secondaryTextColor,
  } = useContext(ThemeContext);

  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (password !== confirmPassword) {
      swal({
        title: "Registration failed!",
        text: "Passwords do not match",
        icon: "warning",
        button: "Okay",
      });
      return;
    }

    userInfo.set("firstname", firstName);
    userInfo.set("lastname", lastName);
    userInfo.set("email", email);
    userInfo.set("password", password);
    setSkip(false);

    try {
      const response = await signup(userInfo);
      navigate("/auth");
    } catch (err) {
      console.log("Error", err);
    }
  };

  if (isFetching) {
    return <LoadingComponent />;
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto w-40"
            src={unaMano}
            alt="Your Company"
            loading="lazy"
          />
          <h2 className="mt-2 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Register an account
          </h2>
        </div>
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={register}
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
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  onChange={(event) => setLastName(event.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(event) => setConfirmPassword(event.target.value)}
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
                Sign up
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
    </>
  );
}
