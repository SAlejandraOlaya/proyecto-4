import { LoginErrorProps, LoginProps } from "@/types/login";
import { RegisterErrorProps, RegisterProps } from "@/types/register";

export function validateLoginForms(values: LoginProps): LoginErrorProps {
  let errors: LoginErrorProps = {
    email: "",
    password: "",
  };

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!values.email) {
    errors.email = "El Email es requerido";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "El Email no es válido";
  }

  if (!values.password) {
    errors.password = "La contraseña es requerida";
  }

  return errors;
}

export function validateRegisterForms(values: RegisterProps): RegisterErrorProps {
  let errors: RegisterErrorProps = {
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  }
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const addressRegrex = /^(?=.*\d)[a-zA-Z\s\d\.\,\-\/°#]+$/;
  const numberRegex = /^\d{10,}$/;


  if (!emailRegex.test(values.email)) {
    errors.email = "El Email no es válido";
  }
  if (!nameRegex.test(values.name)) {
    errors.name = 'El nombre debe iniciar con mayúscula'
  }
  if (!values.password) {
    errors.password = "La contraseña es requerida";
  }

  if (!addressRegrex.test(values.address)) {
    errors.address = "La dirección no es válida";
  }

  if (!numberRegex.test(values.phone.toString())) {
    errors.phone = "El teléfono debe tener almenos 10 numeros";
  }

  return errors
}