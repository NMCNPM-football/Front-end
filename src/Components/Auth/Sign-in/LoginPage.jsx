import {FormProvider, useForm} from 'react-hook-form';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import PATHS from "../../../const/paths";
import {showError, showInfo} from '../../FlashMessage/flashMessageSlice';
import {getProfile, logout, setLoginSuccess} from '../../../store/userSlice';
import TextInput from "../../../Components/TextInput";

export default function SignIn() {
  // const {t} = useTranslation();
  const methods = useForm();
  const navigate = useNavigate()
  const isLogin = useSelector((state) => !!state.user.refreshToken)
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin) {
      navigate(PATHS.HOMEPAGE)
    }
  }, [isLogin, navigate])

  const onSubmit = async (data) => {
    try {
      // Make a POST request to the login endpoint
      const response = await fetch('http://localhost:8888/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Get the result from the response
      const result = await response.json();

      // Dispatch the setLoginSuccess action with the accessToken
      dispatch(setLoginSuccess({ accessToken: result.data.accessToken, refreshToken: result.data.refreshToken }))
      dispatch(getProfile())
      dispatch(showInfo({message: "Login successfully"}))

      // Fetch the profile data
      const profileResponse = await fetch('http://localhost:8888/profile', {
        headers: {
          'Authorization': `Bearer ${result.data.accessToken}`
        }
      });

      if (!profileResponse.ok) {
        throw new Error('Failed to fetch profile');
      }

      const profileData = await profileResponse.json();

      // Check the position and navigate to the appropriate dashboard
      if (profileData.data.position === 'Admin') {
        localStorage.setItem('user', JSON.stringify({ email: profileData.data.email, role: 'admin' }));
        navigate('/admin-dashboard');
      } else {
        localStorage.setItem('user', JSON.stringify({ email: profileData.data.email, role: 'user' }));
        navigate('/user-dashboard');
      }

    } catch (error) {
      const {message} = error
      dispatch(showError({message}))
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <FormProvider {...methods}>
            <form className="space-y-6" onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="relative -space-y-px rounded-md shadow-sm">
                <div
                  className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300"/>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <TextInput

                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <TextInput
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </FormProvider>
          <p className="text-center text-sm leading-6 text-gray-500">
            Not a member?{' '}
            <button className="your-button-classes">
              <Link to={PATHS.SIGN_UP} className="font-semibold text-indigo-600 hover:text-indigo-500">
                Sign up
              </Link>
            </button>
          </p>
        </div>
      </div>
    </>
  )
}
