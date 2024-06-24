'use client'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

const NewProduct: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [userToken, setUserToken] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem('userSession');
      setUserToken(JSON.parse(userToken!));
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== 'undefined' && !userToken) {
      alert("necesitas iniciar sesion para acceder a esta pagina");
      router.push("/login");
    }
  }, [userToken, router]);

  return (
    <div>
      <h1>Nuevo componente</h1>
    </div>
  )
}

export default NewProduct;