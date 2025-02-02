"use client";

import React from "react";
import { useState } from "react";
import Main from "@/components/ui/Main";
import Button from "@/components/ui/Button";
import { login } from "@/actions/auth";
import { useSession } from "next-auth/react";

// Types
interface SocialLoginButtonProps {
  provider: "Google" | "Facebook" | "Github";
  onClick?: () => void;
  children: React.ReactNode;
  imageSrc: string;
}

interface InputFieldProps {
  type: "text" | "email" | "password";
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rightElement?: React.ReactNode;
}

interface VisibilityToggleProps {
  visible: boolean;
  onToggle: () => void;
}

interface FormData {
  email: string;
  password: string;
  remember: boolean;
}

// Social Login Button Component
const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  provider,
  onClick,
  children,
  imageSrc,
}) => (
  <Button
    variant="login"
    onClick={onClick}
    className="group flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white p-3 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-blue-100 hover:bg-blue-50 hover:shadow-md"
  >
    <img src={imageSrc} alt={`${provider} logo`} className="h-6 w-6" />
    <span className="text-black group-hover:text-blue-600">{children}</span>
  </Button>
);

// Input Field Component
const InputField: React.FC<InputFieldProps> = ({
  type,
  icon,
  placeholder,
  value,
  onChange,
  rightElement,
}) => (
  <div className="group flex items-center rounded-xl border border-gray-200 bg-gray-50 px-3 transition-all focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50">
    {icon}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-transparent px-3 py-4 text-gray-700 placeholder-gray-400 outline-none"
    />
    {rightElement}
  </div>
);

// Email Icon Component
const EmailIcon: React.FC = () => (
  <svg
    className="h-5 w-5 text-gray-400 transition-colors group-focus-within:text-blue-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

// Password Icon Component
const PasswordIcon: React.FC = () => (
  <svg
    className="h-5 w-5 text-gray-400 transition-colors group-focus-within:text-blue-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);

// Password Visibility Toggle Component
const VisibilityToggle: React.FC<VisibilityToggleProps> = ({
  visible,
  onToggle,
}) => (
  <button
    type="button"
    onClick={onToggle}
    className="text-gray-400 transition-colors hover:text-blue-500"
  >
    {visible ? (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
        />
      </svg>
    ) : (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    )}
  </button>
);

// Login Form Component
const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    remember: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    try {
      // Add your form submission logic here
      console.log("Form submitted:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-2xl p-8 shadow-2xl ring-1 ring-gray-100"
    >
      <div className="relative">
        {/* Header */}
        <div className="mb-10 text-center">
          <h4 className="text-3xl font-bold text-gray-900">
            Welcome back
            <span className="mt-2 block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-4xl text-transparent">
              Challenge Forum
            </span>
          </h4>
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <SocialLoginButton
            provider="Google"
            imageSrc="/assets/images/google-logo.png"
          >
            Continue with Google
          </SocialLoginButton>
          <SocialLoginButton
            provider="Facebook"
            imageSrc="/assets/images/facebook-logo.png"
          >
            Continue with Facebook
          </SocialLoginButton>
          <SocialLoginButton
            provider="Github"
            onClick={login}
            imageSrc="/assets/images/github-logo.png"
          >
            Continue with Github
          </SocialLoginButton>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-4 text-gray-500">
              continue with email
            </span>
          </div>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <InputField
            type="email"
            icon={<EmailIcon />}
            placeholder="Email address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <InputField
            type="password"
            icon={<PasswordIcon />}
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            rightElement={
              <VisibilityToggle
                visible={showPassword}
                onToggle={() => setShowPassword(!showPassword)}
              />
            }
          />
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={formData.remember}
              onChange={(e) =>
                setFormData({ ...formData, remember: e.target.checked })
              }
              className="h-4 w-4 rounded border-gray-300 text-blue-600 transition-colors focus:ring-2 focus:ring-blue-500"
            />
            <label className="ml-2 text-sm text-gray-600">Remember me</label>
          </div>
          <a
            href="/forgot-password"
            className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-500"
          >
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-sm font-medium text-white shadow-lg transition-all hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign in to your account
        </button>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-blue-600 transition-colors hover:text-blue-500"
          >
            Create an account
          </a>
        </p>
      </div>
    </form>
  );
};

// Main Page Component
const Page: React.FC = () => {
  const session = useSession();

  return (
    <Main>
      <div className="mx-auto mt-10 w-[50vw] min-w-fit max-w-sm bg-white">
        <LoginForm />
      </div>
    </Main>
  );
};

export default Page;
