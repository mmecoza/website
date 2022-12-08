// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBcbkGWJNRN4zMwgURkwu0pj3Ke1rQ66d4',
    authDomain: 'mukuwe-moyo-engineering.firebaseapp.com',
    projectId: 'mukuwe-moyo-engineering',
    storageBucket: 'mukuwe-moyo-engineering.appspot.com',
    messagingSenderId: '350254453025',
    appId: '1:350254453025:web:4dc3ef91ac1d6434cfee60',
    measurementId: 'G-SPKXFG2R9H'
  },
  merchant:  {
      id: '10000100',
      key: '46f0cd694581a',
      destinationURL: 'https://mukuwemoyoengineering.co.za/#success',
      actionURL: 'https://sandbox.payfast.co.za/eng/process',
      notification: 'https://bella-sheek.web.app/notify/',
      store: 'BellaSheek Store'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
