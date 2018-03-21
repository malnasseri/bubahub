// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
     apiKey: "AIzaSyAc_DFINnWztmjommlmQCb7EVf62eH4POg",
    authDomain: "bubahub-1.firebaseapp.com",
    databaseURL: "https://bubahub-1.firebaseio.com",
    projectId: "bubahub-1",
    storageBucket: "bubahub-1.appspot.com",
    messagingSenderId: "182625067004"
  }
};
