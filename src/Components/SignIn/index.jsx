import {NavBar} from "component/navbar";
import {FormProvider, useForm} from 'react-hook-form';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {PATHS} from "const";
import UserService from "services/user"
import {showError} from 'Components/FlashMessage/flashMessageSlice';
import {getProfile, setLoginSuccess} from "store/userSlice";
import TextInput from "component/TextInput";

export default function SignIn() {
  // const{t} = useTranslation();
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
      const result = await UserService.login(data)
      dispatch(setLoginSuccess(result))
      dispatch(getProfile())

    } catch (error) {
      const {message} = error
      dispatch(showError({message}))
    }
  }


  return (
    <>
      <NavBar></NavBar>
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
            <Link to={PATHS.SIGN_UP} className="font-semibold text-indigo-600 hover:text-indigo-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
