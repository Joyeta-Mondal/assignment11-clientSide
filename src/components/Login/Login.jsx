// import { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  //   const { signInUser, signInWithGoogle } = useContext(AuthContext);
  //   const navigate = useNavigate();
  //   const handleLogin = (e) => {
  //     e.preventDefault();
  //     const email = e.target.email.value;
  //     const password = e.target.password.value;
  //     signInUser(email, password)
  //       .then((result) => {
  //         console.log(result.user);
  //         e.target.reset();
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         console.log("ERROR!", error.message);
  //       });
  //   };
  //   const handleGoogleSignIn = () => {
  //     signInWithGoogle()
  //       .then(() => {
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //       });
  //   };
  //   return (
  //     <div className="card text-center bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
  //       <h1 className="text-3xl font-bold">Login now!</h1>
  //       <form onSubmit={handleLogin} className="card-body">
  //         <div className="form-control">
  //           <label className="label">
  //             <span className="label-text">Email</span>
  //           </label>
  //           <input
  //             type="email"
  //             name="email"
  //             placeholder="email"
  //             className="input input-bordered"
  //             required
  //           />
  //         </div>
  //         <div className="form-control">
  //           <label className="label">
  //             <span className="label-text">Password</span>
  //           </label>
  //           <input
  //             type="password"
  //             name="password"
  //             placeholder="password"
  //             className="input input-bordered"
  //             required
  //           />
  //           <label className="label">
  //             <a href="#" className="label-text-alt link link-hover">
  //               Forgot password?
  //             </a>
  //           </label>
  //         </div>
  //         <div className="form-control mt-6">
  //           <button className="btn btn-primary">Login</button>
  //         </div>
  //       </form>
  //       <p className="mb-4 ml-4">
  //         New to this website? Please
  //         <Link className="text-blue-600 hover:text-blue-400" to="/register">
  //           {" "}
  //           Register.
  //         </Link>
  //       </p>
  //       <p>
  //         <button onClick={handleGoogleSignIn} className="btn btn-ghost">
  //           Sign in with Google
  //         </button>
  //       </p>
  //     </div>
  //   );
};

export default Login;
