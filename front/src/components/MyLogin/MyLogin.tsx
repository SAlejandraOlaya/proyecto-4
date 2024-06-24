'use client'
import { LoginErrorProps, LoginProps } from "@/types/login";
import { validateLoginForms } from "@/utils /formValidate";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaUserCircle, FaEyeSlash, FaEye } from 'react-icons/fa';

const MyLogin: React.FC = () => {
    const router = useRouter();

    const loginData = {
        email: '',
        password: '',
    };

    const [dataUser, setDataUser] = useState<LoginProps>(loginData);
    const [errorUser, setErrorUser] = useState<LoginErrorProps>(loginData);
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const errors = validateLoginForms(dataUser)
        if (errors.email !== ""
            || errors.password !== ""
        ) {
            setErrorUser(errors)
            return false;
        }
        try {
            fetch('http://localhost:3001/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataUser)
            })
                .then(async (res) => {
                    console.log({res})
                    if (res.status === 200) {
                        const { token, user } = await res.json();
                        localStorage.setItem("userSession", JSON.stringify({ token: token, userData: user }));
                        alert("Te has logeado correctamente")
                        router.push("/");
                    } else {
                        const parsedResponse = await res.json();
                        alert(parsedResponse.message)
                    }
                })
        } catch (error: any) {
            throw new Error(error)
        }
    }
    const handleCrearCuentaClick = () => {
        router.push("/register");
    }

    return (
        <div className="flex justify-center items-center  bg-white min-h-[100vh]">
          <div className="bg-white rounded-lg shadow-md p-12 max-w-5xl mt-4">
            <div className="flex justify-center mb-8">
              <FaUserCircle size={64} className="text-blue-500" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <label htmlFor="email" className="block mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={dataUser.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="example@gmail.com"
                  required
                />
                {errorUser.email && <p className="text-lg italic text-red-500">{errorUser.email}</p>}
              </div>
              <div className="mb-8 flex flex-col">
                <label htmlFor="password" className="block mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={dataUser.password}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 pr-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="xxxxxxxx"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      {showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
                    </button>
                  </div>
                </div>
                {errorUser.password && <p className="text-lg italic text-red-500">{errorUser.password}</p>}
              </div>
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center space-y-8">
                  <button
                    type="submit"
                    className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-l w-full sm:w-auto px-12 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Iniciar Sesión
                  </button>
                  <a
                    href="/register"
                    onClick={handleCrearCuentaClick}
                    className="text-blue-700 font-semibold text-l hover:underline"
                  >
                    Crear cuenta
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
      export default MyLogin;