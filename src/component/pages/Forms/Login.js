import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authFunction } from "../../../AuthProvider/AuthProvider";
import { getToken } from "../../../api/saveUser";
import LoaderText from "../../Shared/Spinner/LoaderText";


const Login = () => {
  const [isLoading,setIsLoading]= useState(false)
  const {signInUser,googleSingIn} = authFunction
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const hadleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    setIsLoading(true)
    signInUser(email,password)
    .then(result=>{
     getToken(email)
     .then(data=>{
      if(data?.token){
        localStorage.setItem("task-token", data.token);
        toast.success('Successfully loggedIn')
        navigate(from, { replace: true });
      }
      })
    })

  };

    const handleGoogle = ()=>{
    googleSingIn()
    .then(result=>{
      const user = result.user
      getToken(user.email)
     .then(data=>{
      if(data?.token){
        localStorage.setItem("task-token", data.token);
        toast.success('Successfully loggedIn')
        navigate(from, { replace: true });
      }
      })
    })
    .catch(err=>{
        const message = err.message.split("/")[1].replace(/[-)]/g, " ");
      setError(message);
    })
}


  return (
    <div className="flex justify-center items-center min-h-[80vh] mt-6">
      <div className="w-full max-w-md p-8 space-y-3 text-gray-800 border border-slate-200 shadow-xl shadow-slate-300">
      {error && (
          <p className="text-red-700 bg-red-100 font-bold capitalize p-2">
            {error}
          </p>
        )}
        <div className="flex items-center gap-3 mb-5">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Sing in your account
          </h2>
          <div className="h-[2px] w-1/3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-1" />
        </div>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] rounded inline-block">
          <button
            className="bg-white flex items-center rounded gap-5  px-2 py-1"
            aria-label="Sign Up with google"
              onClick={handleGoogle}
          >
            <svg
              width={19}
              height={20}
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                fill="#4285F4"
              />
              <path
                d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                fill="#34A853"
              />
              <path
                d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                fill="#FBBC05"
              />
              <path
                d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                fill="#EB4335"
              />
            </svg>
            Sign in with google
          </button>
        </div>
        <form action="" onSubmit={hadleSubmit} className="space-y-5 pt-3">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded p-[1px]">
            <input
              className="w-full px-4 py-3 text-gray-800 border focus:outline-none rounded "
              type="email"
              name="email"
              placeholder="jhondoe@gmail.com"
              required
            />
          </div>
          <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded p-[1px] flex items-center justify-center">
            <input
              className="w-full px-4 py-3 text-gray-800 border focus:outline-none rounded "
              type={`${isOpen ? "text" : "password"}`}
              name="password"
              placeholder="********"
              required
            />
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="absolute right-3 text-slate-500 hover:cursor-pointer "
            >
              {isOpen ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>

          <div className="mt-8">
            <button
              className="focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 text-base font-semibold leading-none text-slate-700 focus:outline-none bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 border rounded py-4 w-full hover:from-purple-200 hover:via-pink-200 hover:to-indigo-200"
              type="submit"
            >
              {isLoading ? <LoaderText /> : "Sign in"}
            </button>
          </div>
        </form>
        <p className="text-base font-medium leading-none text-gray-800">
          Don't have any account?{" "}
          <Link
            to="/signup"
            className="text-base font-bold leading-none underline text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer"
          >
            {" "}
            create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
