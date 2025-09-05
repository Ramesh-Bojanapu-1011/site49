import React, { useState } from "react";
import { useRouter } from "next/router";
import { User2 } from "lucide-react";

type User = {
  email: string;
  password: string;
  name?: string;
  signupTime?: string;
  loginTime?: string;
};

const ADMIN_EMAIL = "admin@enckonix.in";
const ADMIN_PASS = "admin123";

const getUsers = (): User[] => {
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
  const [form, setForm] = useState({ email: "", password: "", name: "" });
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
      if (form.email === ADMIN_EMAIL && form.password === ADMIN_PASS) {
        localStorage.setItem("adminLoginTime", new Date().toISOString());
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
      if (!form.email || !form.password || !form.name) {
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
        name: form.name,
        signupTime: new Date().toISOString(),
        loginTime: "",
      };
      users.push(newUser);
      saveUsers(users);
      setIsLogin(true);
      setForm({ email: form.email, password: "", name: form.name });
      setError("Signup successful! Please login.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="w-full max-w-md mx-auto bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-2xl border-4 border-transparent bg-clip-padding p-8 md:p-12 relative z-10 animate-gradient-border">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-primary-500 to-cyan-400 shadow-lg">
            <User2 />
          </span>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white drop-shadow-lg">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm"
            required
          />
          {error && (
            <div className="text-center text-red-500 text-sm font-semibold">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-tr from-primary-500 to-cyan-400 text-white font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-lg tracking-wide"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <button
            className="text-primary-500 hover:underline font-semibold"
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
            }}
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
