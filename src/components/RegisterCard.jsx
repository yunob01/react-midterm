import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import { FormInput, FormError, AuthFormLayout } from "@/components/common";
import { useRegisterWithEmailPassword } from "@/react-query";

const RegisterCard = ({ redirect }) => {
    const { mutate, isLoading, isError, error } = useRegisterWithEmailPassword();
    const [formError, setFormError] = useState("");

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
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
        setFormError(""); // 清除舊錯誤

        if (formData.password !== formData.confirmPassword) {
            setFormError("Passwords do not match");
            return;
        }

        if (formData.password.length < 6) {
            setFormError("Password must be at least 6 characters");
            return;
        }

        if (!formData.agreement) {
            setFormError("Please accept the agreement");
            return;
        }

        mutate(
            { ...formData, redirect },
            {
                onError: (error) => {
                    switch (error.code) {
                        case "auth/email-already-in-use":
                            setFormError("This email is already registered. Please log in instead.");
                            break;
                        case "auth/invalid-email":
                            setFormError("Invalid email format.");
                            break;
                        case "auth/weak-password":
                            setFormError("Password is too weak.");
                            break;
                        default:
                            setFormError("An unexpected error occurred. Please try again.");
                            console.error(error); // optional: for debugging
                            break;
                    }
                },
            }
        );
    };


    return (
        <div className="bg-content-text text-primary font-serif shadow-md rounded-xl px-6 py-10 mb-20 max-w-md mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Create Account</h2>

            <form onSubmit={onFinish} className="space-y-4">
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
                    value={formData.confirmPassword}
                    onChange={onChange}
                />
                <div className="flex items-center space-x-2 text-sm">
                    <input
                        type="checkbox"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={onChange}
                        className="rounded"
                    />
                    <label htmlFor="agreement" className="text-secondary-text">I have known the agreement</label>
                </div>

                {formError && <p className="text-red-500 text-sm text-center">{formError}</p>}

                <button
                    type="submit"
                    className="block mx-auto bg-primary text-content-text text-sm font-semibold px-6 py-2 rounded-xl border border-primary transition hover:bg-transparent hover:text-primary"
                    disabled={isLoading}
                >
                    {isLoading ? "Creating..." : "Create your account"}
                </button>

                <p className="text-sm mt-2 text-center">
                    Already have an account?{" "}
                    <Link
                        to={`/auth/login?redirect=${redirect}`}
                        className="text-primary underline hover:text-opacity-80"
                    >
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterCard;
