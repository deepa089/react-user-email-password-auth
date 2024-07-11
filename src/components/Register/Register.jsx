
const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const auth = getAuth();

        console.log(email);
        console.log(password);
        createUser
        creatUser(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
    return (
        <div className="m-auto text-center">
            <h2>Register from here</h2>
            {/* <div className="mx-auto"> */}
            <div>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 border-gray-300 p-2 w-1/4 bg-slate-200 rounded" type="email" name="email" id="" /> <br />
                    <input className="mb-4 border-gray-300 p-2 w-1/4 bg-slate-200 rounded" type="password" name="password" id="" /> <br />
                    <input className="mb-4 px-10 py-2 w-1/4 rounded btn btn-secondary" type="submit" value="Register" /> <br />
                </form>
            </div>
        </div>
    );
};

export default Register;