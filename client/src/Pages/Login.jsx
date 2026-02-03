import { useState } from "react";

const Login = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleForm = async (e) => {
        e.preventDefault(); // prevent page reload
        setError("");

        // Basic frontend validation
        if (!name.trim() || !password.trim()) {
            setError("All fields are required.");
            return;
        }
        // try {
        //     setLoading(true);

        //     // Simulated API request (replace with real backend call)
        //     const response = await fakeLoginApi(name, password);

        //     console.log("Login success:", response);

        //     // Example: save token
        //     localStorage.setItem("token", response.token);

        //     // Example: redirect
        //     // navigate("/dashboard");

        // } catch (err) {
        //     setError(err.message);
        // } finally {
        //     setLoading(false);
        // }
    };

    return (
        <form onSubmit={handleForm} className="login-form">
            <div className="form-body">
                <div className="form-logo">
                    <img src="/logo.png" alt="Company Logo" />
                </div>

                <div className="form-input">
                    <input
                        type="text"
                        placeholder="Username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={loading}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                        required
                    />
                </div>

                {error && <p className="error-text">{error}</p>}

                <div className="form-buttons">
                    <button className="login-btn" type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>

                    <a href="/forgot-password">Forgot Password?</a>
                </div>
            </div>
        </form>
    );
};

export default Login;

// -----------------------
// MOCK API FUNCTION
// -----------------------
// const fakeLoginApi = (username, password) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (username === "admin" && password === "1234") {
//                 resolve({
//                     token: "fake-jwt-token",
//                     user: { name: username }
//                 });
//             } else {
//                 reject(new Error("Invalid username or password"));
//             }
//         }, 1000);
//     });
// };
