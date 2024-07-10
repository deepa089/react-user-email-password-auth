const Register = () => {
    return (
        <div className="m-auto">
            <h2>Register from here</h2>
            {/* <div className="mx-auto"> */}
            <div>
                <form>
                    <input className="mb-4 border-gray-300 bg-slate-200 rounded" type="email" name="email" id="email" /> <br />
                    <input className="mb-4 border-gray-300 bg-slate-200 rounded" type="password" name="password" id="password" /> <br />
                    <input className="mb-4 px-10 py-2 bg-slate-400 rounded" type="submit" value="Register" /> <br />
                </form>
            </div>
        </div>
    );
};

export default Register;