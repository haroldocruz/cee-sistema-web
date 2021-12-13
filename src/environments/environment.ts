// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import pack from '../../package.json';
export const environment = {
    production: false
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


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
