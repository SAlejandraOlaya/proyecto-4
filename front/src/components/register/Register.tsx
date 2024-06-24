'use client'
import {  useState } from "react";
import { useRouter } from "next/navigation";
import { validateRegisterForms } from "@/utils /formValidate";
import { RegisterErrorProps, RegisterProps } from "@/types/register";
import { FaUserCircle, FaEyeSlash, FaEye } from 'react-icons/fa';

const MyRegister: React.FC = () => {
  const router = useRouter();
  const initialData = {
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  };

  const [dataUser, setDataUser] = useState<RegisterProps>(initialData);
  const [errorUser, setErrorUser] = useState<RegisterErrorProps>(initialData);
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validateRegisterForms(dataUser)
    if (errors.email !== ""
      || errors.password !== ""
      || errors.name !== ""
      || errors.address !== ""
      || errors.phone !== ""
    ) {
      setErrorUser(errors)
      return false;
    }
    try {
      fetch('http://localhost:3001/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUser)
      })
        .then(async (res) => {
          if (res.status === 201) {
            alert("El usuario se ha registrado exitosamente");
            setDataUser(initialData)
            router.push("/login");
          } else {
            const parsedResponse = await res.json();
            alert(parsedResponse.message)
          }
        })
    } catch (error: any) {
      console.log({ error })
      throw new Error(error)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value
    })
  }


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100" >
      <div className="bg-white rounded-lg shadow-md p-12 mt-20 mb-20" style={{width: '500px'}}>
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label htmlFor="email" className="block mb-3 text-l font-semibold text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={dataUser.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@gmail.com"
              required
            />
            {errorUser.email && <p className="text-lg italic text-red-500">{errorUser.email}</p>}
          </div>
          <div className="mb-8 flex flex-col">
            <label htmlFor="password" className="block mb-3 text-l font-semibold text-gray-900 dark:text-white">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={dataUser.password}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 pr-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          <div className="mb-8">
            <label htmlFor="name" className="block mb-3 text-l font-semibold text-gray-900 dark:text-white">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={dataUser.name}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {errorUser.name && <p className="text-lg italic text-red-500">{errorUser.name}</p>}
          </div>
          <div className="mb-8">
            <label htmlFor="address" className="block mb-3 text-l font-semibold text-gray-900 dark:text-white">
              Dirección
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={dataUser.address}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {errorUser.address && <p className="text-lg italic text-red-500">{errorUser.address}</p>}
          </div>
          <div className="mb-8">
            <label htmlFor="phone" className="block mb-3 text-l font-semibold text-gray-900 dark:text-white">
              Teléfono
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              value={dataUser.phone}
              onChange={handleChange}
              className="bg-gray-40 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {errorUser.phone && <p className="text-lg italic text-red-500">{errorUser.phone}</p>}
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center space-y-8">
              <button
                type="submit"
                className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-l w-full sm:w-auto px-12 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Registrarse
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MyRegister;