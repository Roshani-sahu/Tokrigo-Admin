import { Mail, EyeOff } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F2F7FF] px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">

        {/* Logo */}
        <img
          src="/logo.png"
          alt="Tokrigo Logo"
          className="h-10 mb-12"
        />

        {/* Heading */}
        <h2 className="text-xl font-medium text-gray-800 mb-1">
          Welcome back.
        </h2>

        <p className="text-[13px] text-[#363636] mb-6 ">
          Discover Limitless Choices and Unmatched Convenience
        </p>

        <form className="space-y-4">

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
<span className="absolute left-3 top-[55%] -translate-y-1/2 text-gray-400 text-sm tracking-widest">
  ***
</span>            <input
              type="password"
              placeholder="Password"
              className="w-full pl-11 pr-11 py-3 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <EyeOff className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer" />
          </div>

          {/* Forgot */}
          <div className="text-end text-sm text-gray-500 cursor-pointer">
            Forget Password?
          </div>

          {/* Button */}
          <button className="w-full bg-green-600 text-white py-3 rounded-sm font-medium hover:bg-green-700 transition">
            Sign in
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;
