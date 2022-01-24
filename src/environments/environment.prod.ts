
import pack from '../../package.json';
export const environment = {
  production: true
};

const api = {
  // url: "api.cee.sigilo.digital"
  // url: "https://cee-sistema-api-service-hxwfjtgxqq-uc.a.run.app"
  // url: "http://192.168.137.1:3000"
  // url: "http://10.2.0.90:3000"
  url: "http://localhost:3000"
}

const app = {
  version: pack.version
  // version: "0.0.4b"
}

const user = {
  defaultPassword: "1234567890"
}

const contact = {
  phone: {
      ddi: 55,
      ddd: 63,
      number: 988887777
  }
}

export const ENV = {
  api,
  app,
  user,
  contact
}