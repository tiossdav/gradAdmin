import { useState } from "react";
import axios from "axios";
// @ts-expect-error: TypeScript cannot validate the imported module due to missing type definitions
import { loginAdmin } from "../api/index.js";
import grad_icon from "../assets/icon/grad_icon.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const data = await loginAdmin(email, password);

      if (data?.status === "ok") {
        const token = data.data.token;
        localStorage.setItem("authToken", token);
        navigate("/"); // or wherever you want
      } else {
        setErrorMsg(
          data?.message || "Login failed. Please check your credentials."
        );
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMsg(
          error.response?.data?.message || "An error occurred during login."
        );
      } else {
        setErrorMsg("An unexpected error occurred during login.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-purple-900 h-screen flex items-center justify-center">
      <div className="absolute top-[53px] left-[89px] bottom-[53px]">
        <img src={grad_icon} alt="" className="h-full object-contain" />
      </div>
      <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg h-auto w-[436px] bg-white p-3">
        <h3 className="montserrat font-bold text-xl tracking-normal leading-8">
          Admin Login
        </h3>
        <form onSubmit={handleLogin} className="w-full">
          <div className="w-full flex flex-col gap-[16px] justify-center  p-4">
            <div className=" login-button">
              <label className="email" htmlFor="email">
                Email
              </label>
              <input
                className="border border-gray-300 shadow outline-none focus:outline-none w-full block mt-1.5 py-[6px] px-[12px] rounded-sm"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="w-full login-button">
              <label htmlFor="password">Password</label>
              <input
                className="border border-gray-300 shadow outline-none focus:outline-none w-full block mt-1.5 py-[6px] px-[12px] rounded-sm"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="h-5">
              {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
            </div>
            <button
              className="w-full py-[6px] px-[12px] text-white login-button border border-purple-900 bg-purple-900 rounded-lg outline-none active:scale-95 transition transform duration-200 ease-in-out"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
