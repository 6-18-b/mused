/**
 * NOTE: This file is ignored from git tracking. In a CI environment it is
 * generated by firebase-ci or build/create-config.js based on config in
 * .firebaserc (see .travis.yml). This is done so that environment specific
 * settings can be applied.
 */

export const env = 'development'

// Config for firebase
export const firebase = {
  apiKey: 'AIzaSyCY_VC2xu33yHj9ONapPtCEQ1w1cHL_DNM',
  authDomain: 'mused-1111.firebaseapp.com',
  databaseURL: 'https://mused-1111.firebaseio.com',
  projectId: "mused-1111",
  storageBucket: 'mused-1111.appspot.com'
}

// Config for react-redux-firebase
// For more details, visit http://react-redux-firebase.com/docs/api/enhancer.html
export const reduxFirebase = {
  userProfile: 'users', // root that user profiles are written to
  enableLogging: false, // enable/disable Firebase Database Logging
  useFirestoreForProfile: true, // Save profile to Firestore instead of Real Time Database
  // updateProfileOnLogin: false // enable/disable updating of profile on login
  // profileDecorator: (userData) => ({ email: userData.email }) // customize format of user profile
}

export default { env, firebase, reduxFirebase }
