import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase.config";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Register = () => {
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleRegister = (e) => {
        e.preventDefault();
        setErrorMsg("");
        setSuccessMsg("");
        const email = e.target.email.value;
        const password = e.target.password.value;
        const termAndCondition = e.target.termAndCondition.checked;
        const auth = getAuth(app);
        if (password.length < 6) {
            setErrorMsg("Password must be 6 characters or more");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setErrorMsg("Password must have at least one uppercase character");
            return;
        } else if (!termAndCondition) {
            setErrorMsg("Ckeck terem & condition for Register")
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log("result ::" + result);
                setSuccessMsg("User Create Successfully")
            })
            .catch(error => {
                setErrorMsg(error.message);
                // console.log("error ::" + error.message);
            })
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className="m-auto text-center w-3/4">
            <h2>Register from here</h2>
            {/* <div className="mx-auto"> */}
            <div className="">
                <form onSubmit={handleRegister}>
                    <input className="mb-4 border-gray-300 p-2 w-1/4 bg-slate-200 rounded"
                        required type="email" name="email" id="" /> <br />
                    <div className="relative">
                        <input className="mb-4 border-gray-300 p-2 w-1/4 bg-slate-200 rounded"
                            required type={showPassword ? 'text' : 'password'} name="password" id="" />
                        <span className="absolute top-3" onClick={() => setShowPassword(!showPassword)}> {showPassword ? <FiEye></FiEye> : <FiEyeOff></FiEyeOff>}  </span>
                    </div>
                    <br />
                    <div className="text-center w-3/4">
                        <input className=" left-1" type="checkbox" name="termAndCondition" /> <br />
                    </div>

                    <input className="mb-4 px-10 py-2 w-1/4 rounded btn btn-secondary" type="submit" value="Register" /> <br />
                </form>
                {errorMsg &&
                    <p className="text-red-700 font-semibold"> {errorMsg}</p>
                }
                {successMsg &&
                    <p className="text-green-700 font-semibold"> {successMsg}</p>
                }
            </div>
        </div>
    );
};

export default Register;