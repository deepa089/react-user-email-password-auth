import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase.config";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [showPassword, setShowPassword] =useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        setErrorMsg("");
        setSuccessMsg("");
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        const auth = getAuth(app);
        if(password.length < 6){
            setErrorMsg("Password must be 6 characters or more");
            return;
        } else if(!/[A-Z]/.test(password)){
            setErrorMsg("Password must have at least one uppercase character");
            return;
        } 

        signInWithEmailAndPassword(auth, email,password)
        .then(result => {
            console.log("result ::" + result);
            setSuccessMsg("User Login Successfully")
        })
        .catch(error => {
            setErrorMsg(error.message);
            // console.log("error ::" + error.message);
        })
    }
    // const handleShowPassword = () => {
    //     setShowPassword(!showPassword)
    // }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="form-control relative">
                                <input type={showPassword ? 'text' : 'password'}  name="password" placeholder="password" className="input input-bordered" required />
                                <span className="absolute top-4 right-3" onClick={() => setShowPassword(!showPassword)}> {showPassword ? <FiEye></FiEye> : <FiEyeOff></FiEyeOff> }  </span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    { errorMsg &&
                        <p className="text-red-700 font-semibold"> {errorMsg}</p>
                    }
                { successMsg &&
                        <p className="text-green-700 font-semibold"> {successMsg}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;