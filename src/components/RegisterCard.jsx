import { useState } from "react";
import { Link } from "react-router";
import { Mail, Lock, User } from "lucide-react";
import { FormInput, FormError, AuthFormLayout } from "@/components/common";
import { useRegisterWithEmailPassword } from "@/react-query";

const RegisterCard = ({ redirect }) => {
    const { mutate, isLoading, isError, error } = useRegisterWithEmailPassword();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        ConfirmPassword: "",
        agreement: false,
    });

    const onChange = (e) => {
    const { name, type, checked, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
        }));
    };

    const onFinish = (e) => {
        e.preventDefault();
        if (formData.password !== formData.rePassword) {
        alert("Passwords do not match");
        return;
        }
        if (!formData.agreement) {
        alert("Please accept the agreement");
        return;
        }
        mutate({ ...formData, redirect });
    };

  return (
    <AuthFormLayout onSubmit={onFinish}>
        <FormInput
            label="Your Name"
            name="username"
            type="text"
            placeholder="Vinyl"
            icon={User}
            value={formData.username}
            onChange={onChange}
        />
        <FormInput
            label="Account Number"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            icon={Mail}
            value={formData.email}
            onChange={onChange}
        />
        <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="At least 8 characters"
            icon={Lock}
            value={formData.password}
            onChange={onChange}
        />
        <FormInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            icon={Lock}
            value={formData.ConfirmPassword}
            onChange={onChange}
        />
        <FormInput
            label="I have read the agreement"
            name="agreement"
            type="checkbox"
            value={formData.agreement}
            onChange={onChange}
        />
        <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create your account"}
        </button>
        <p className="text-sm mt-2">
            Already have an account? <Link to={`/auth/login?redirect=${redirect}`} className="link link-primary">Login</Link>
        </p>
        {isError && <FormError error={error} />}
    </AuthFormLayout>

  );
};

export default RegisterCard;