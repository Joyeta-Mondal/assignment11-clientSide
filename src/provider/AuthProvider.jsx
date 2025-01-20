// import { createContext, useEffect, useState } from "react";
// import app from "../../src/firebase/firebase.init.js";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";

// export const AuthContext = createContext();
// const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  //   const [user, setUser] = useState(null);
  //   // loading when refreshed
  //   const [loading, setLoading] = useState(true);
  //   //   create new user
  //   const createNewUser = (email, password) => {
  //     setLoading(true);
  //     return createUserWithEmailAndPassword(auth, email, password);
  //   };
  //   // observer to observe if a user is logged in, signed up or signed out. This only executes once.
  //   useEffect(() => {
  //     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  //       setUser(currentUser);
  //       setLoading(false);
  //     });
  //     return () => {
  //       unSubscribe();
  //     };
  //   }, []);
  //   //   user login
  //   const userLogin = (email, password) => {
  //     setLoading(true);
  //     return signInWithEmailAndPassword(auth, email, password);
  //   };
  //   //   log out
  //   const logOut = () => {
  //     setLoading(true);
  //     return signOut(auth);
  //   };
  //   const authInfo = {
  //     user,
  //     setUser,
  //     createNewUser,
  //     userLogin,
  //     logOut,
  //     loading,
  //   };
  //   return (
  //     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  //   );
};

export default AuthProvider;
