
import {NavBar} from "component/navbar";
import {FormProvider, useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {PATHS} from "const";
import UserService from "services/user"
import {showError, showInfo} from 'component/flash_message/flashMessageSlice';
import TextInput from "component/text_input";

export default function SignUp() {
  const methods = useForm();
  const navigate = useNavigate()
  const isLogin = useSelector((state) => !!state.user.refreshToken)
  const dispatch = useDispatch();

  useEffect( () => {
    if(isLogin) {
      navigate(PATHS.HOMEPAGE)
    }
  }, [isLogin, navigate])

  const onSubmit = async (data) => {
    try {
      if(data.password !== data.passwordConfirm) {
        throw new Error("Passwords do not match")
      }
      await UserService.register(data);
      dispatch(showInfo({message: "Register successfully"}))
      navigate(PATHS.SIGN_IN)
    } catch (error) {
      const {message} = error
      dispatch(showError({message}))
    }
  }


  return (
      <>
        <NavBar></NavBar>
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
            />
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
              <FormProvider {...methods}>
                <form className="space-y-6" onSubmit={methods.handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <TextInput
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <TextInput
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Confirm Password
                  </label>
                  <div className="mt-2">
                    <TextInput
                        id="passwordConfirm"
                        name="passwordConfirm"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                </div>

                <div>
                  <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign up
                  </button>
                </div>
                </form>
              </FormProvider>

            </div>

          </div>
        </div>
      </>
  )
}
