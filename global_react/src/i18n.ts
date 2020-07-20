import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      login: "Login",
      content: "Content",
      "Invalid login or password, please type again":
        "Invalid login or password, please type again",
      "error, review the fields": "error, review the fields rrr",
      "login plus username": "Usuario: {{username}}",
      REQUIRED: "Mandatory field"
    }
  },
  zh: {
    translation: {
      login: "登录",
      content: "内容"
    }
  },
  es: {
    translation: {
      login: "Introduzca credenciales",
      "Invalid login or password, please type again":
        "Usuario o clave no validos, porfavor intentelo de nuevo",
      "error, review the fields": "Error, revise los campos por favor",
      "login plus username": "Usuario: {{username}}",
      REQUIRED: "Campo obligatorio"
    }
  }
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng:'en',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });


export default i18n;




 