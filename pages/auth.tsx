import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

type User = {
  email: string;
  password: string;
  first: string;
  last: string;
  signupTime?: string;
  loginTime?: string;
  logoutTime?: string;
};

const ADMIN_EMAIL = "admin@enkonix.in";
const ADMIN_PASSWORD = "admin123";

export const getUsers = (): User[] => {
  if (typeof window !== "undefined") {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  }
  return [];
};

const saveUsers = (users: User[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("users", JSON.stringify(users));
  }
};

const AuthPage = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const users = getUsers();

    if (isLogin) {
      // Admin login
      if (form.email === ADMIN_EMAIL && form.password === ADMIN_PASSWORD) {
        router.push("/admin-dashbord");
        return;
      }
      // User login
      const user = users.find(
        (u) => u.email === form.email && u.password === form.password,
      );
      if (user) {
        user.loginTime = new Date().toISOString();
        saveUsers(users);
        localStorage.setItem("currentUser", JSON.stringify(user));
        router.push("/home1");
      } else {
        setError("Invalid credentials");
      }
    } else {
      // Signup
      if (!form.email || !form.password || !form.firstname || !form.lastname) {
        setError("All fields required");
        return;
      }
      if (users.find((u) => u.email === form.email)) {
        setError("Email already exists");
        return;
      }
      const newUser: User = {
        email: form.email,
        password: form.password,
        first: form.firstname,
        last: form.lastname,
        signupTime: new Date().toISOString(),
        loginTime: "",
      };
      users.push(newUser);
      saveUsers(users);
      setIsLogin(true);
      setForm({ email: form.email, password: "", firstname: "", lastname: "" });
      setError("Signup successful! Please login.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="w-full max-w-md mx-auto bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-2xl border-4 border-transparent bg-clip-padding p-8 md:p-12 relative z-10 animate-gradient-border">
        <div className="flex justify-center mb-6">
          <Image
            src={"/logo-stackly.png"}
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white drop-shadow-lg">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <>
              <label
                htmlFor="firstname"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1 ml-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                value={form.firstname}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00bcd4] shadow-sm"
                required
              />
              <label
                htmlFor="lastname"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1 ml-1 mt-4"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                value={form.lastname}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00bcd4] shadow-sm"
                required
              />
            </>
          )}
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1 ml-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00bcd4] shadow-sm"
            required
          />
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1 ml-1 mt-4"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00bcd4] shadow-sm"
            required
          />
          {error && (
            <div className="text-center text-red-500 text-sm font-semibold">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-lg tracking-wide"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="mt-6 text-center">
          {!isLogin ? (
            <button className="font-semibold">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError("");
                }}
                className="text-[#00bcd4] hover:underline "
              >
                Login
              </span>
            </button>
          ) : (
            <button className="font-semibold">
              Don't have an account?{" "}
              <span
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError("");
                }}
                className="text-[#00bcd4] hover:underline "
              >
                Sign Up
              </span>{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
