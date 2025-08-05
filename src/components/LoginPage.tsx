import React from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface LoginPageProps {
  userType: 'athlete' | 'scout' | 'admin';
  onBack: () => void;
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ userType, onBack, onLogin }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8 self-start"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        {/* User Type Identifier */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 border border-purple-600/30 rounded-lg px-4 py-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-purple-300 text-sm font-medium">
              Logging in as {userType === 'athlete' ? 'Athlete' : userType === 'scout' ? 'Scout' : 'KEE Admin'}
            </span>
          </div>
        </div>

        {/* Logo */}
        <div className="mb-8">
          <img src="/keelogo.png" alt="KEE" className="h-16" />
        </div>

        {/* Welcome Text */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-gray-400 text-lg">
            Sign in to your account to continue your journey
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 bg-gray-800 border border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
              />
              <span className="text-sm text-gray-300">Remember me</span>
            </label>
            <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="flex-1 border-t border-gray-700"></div>
          <span className="px-4 text-gray-400 text-sm">or</span>
          <div className="flex-1 border-t border-gray-700"></div>
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <button className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
            <div className="w-5 h-5 bg-white rounded"></div>
            <span>Continue with Google</span>
          </button>
          <button className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
            <div className="w-5 h-5 bg-blue-600 rounded"></div>
            <span>Continue with Facebook</span>
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Don't have an account?{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
              Sign up here
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Image/Branding */}
      <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Player Image */}
        <div className="absolute inset-0">
          <img 
            src="/Section.png" 
            alt="K2S Athlete"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;