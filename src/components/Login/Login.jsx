import { useState } from "react";
import { auth } from "./firebase";
import { toastError, toastSuccess } from "../../utils/toast";
import {GoogleAuthProvider} from 'firebase/auth'
// import { GithubAuthProvider } from "firebase/auth";
import netflix from '../../assets/images/Vector.svg'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
  
    try {
      const request = auth.signInWithEmailAndPassword(email, password);
      await request;
      request.then((result) => {
        let accessToken = result.user.multiFactor.user.accessToken;
        let refreshToken = result.user.multiFactor.user.stsTokenManager.refreshToken;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        setEmail("");
        setPassword("");
        toastSuccess("User Signed In Successfully");
      });
    } catch (error) {
      toastError(error.message);
      event.preventDefault(false);
    }
  };
  
  const handleSignUp = async (event) => {
    event.preventDefault();
  
    try {
      const request = auth.createUserWithEmailAndPassword(email, password);
      await request;
      request.then((result) => {
        let accessToken = result.user.multiFactor.user.accessToken;
        let refreshToken = result.user.multiFactor.user.stsTokenManager.refreshToken;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        setEmail("");
        setPassword("");
        toastSuccess("User Signed Up Successfully");
      });
    } catch (error) {
      toastError(error.message);
      event.preventDefault(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await auth.signInWithPopup(provider);
      let accessToken = result.user.multiFactor.user.accessToken;
      let refreshToken = result.user.multiFactor.user.stsTokenManager.refreshToken;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      toastSuccess("User Signed In Successfully");
    } catch (error) {
      toastError(error.message);
    }
  };  
  // const handleGithubSignIn = async () => {
  //   const provider = new GithubAuthProvider();
  //   try {
  //     const result = await auth.signInWithPopup(provider);
  //     let accessToken = result.user.multiFactor.user.accessToken;
  //     let refreshToken = result.user.multiFactor.user.stsTokenManager.refreshToken;
  //     localStorage.setItem('accessToken', accessToken);
  //     localStorage.setItem('refreshToken', refreshToken);
  //     toastSuccess("User Signed In Successfully");
  //   } catch (error) {
  //     toastError(error.message);
  //   }
  // };

  
  

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center  mx-auto md:h-screen lg:py-0">
      <img src={netflix} alt="" className="my-4" />
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  onChange={handleEmailChange}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={handlePasswordChange}
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <button
                onClick={handleSignIn}
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login
              </button>
              <button
                onClick={handleSignUp}
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Register
              </button>
              <button
                onClick={handleGoogleSignIn}
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign In with Google
              </button>
              {/* <button
                onClick={handleGithubSignIn}
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign In with GitHub
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
