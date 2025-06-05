import { Mail, Lock } from "lucide-react";
import { useSignInWithEmailPassword } from "@/react-query";
import { remember, selectIsRemember } from "@/redux/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FormInput, FormError, AuthFormLayout } from "@/components/common";
import { useNavigate } from "react-router-dom";

const LoginCard = ({ redirect }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutate, isLoading, isError, error } = useSignInWithEmailPassword();
  const isRemember = useSelector(selectIsRemember);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFinish = (e) => {
    e.preventDefault();
    mutate(
      { ...formData, redirect },
      {
        onSuccess: () => {
          navigate("/");
        },
      }
    );
  };

  return (
    <div className="bg-content-text text-primary font-serif shadow-md rounded-xl px-6 py-10 max-w-md mx-auto mb-20">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Log in</h2>

      <form onSubmit={onFinish} className="space-y-4">
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

        <div className="flex items-center space-x-2 text-sm">
          <input
            type="checkbox"
            name="remember"
            checked={isRemember}
            onChange={(e) => dispatch(remember(e.target.checked))}
            className="rounded"
          />
          <label htmlFor="remember" className="text-secondary-text">Remember me</label>
        </div>

        <div className="flex justify-end">
          <Link to="/auth/login" className="text-sm underline text-secondary-text hover:text-primary">Forgot password?</Link>
        </div>

        <button
          type="submit"
          className="block mx-auto bg-primary text-content-text text-sm font-semibold px-6 py-2 rounded-xl border border-primary transition hover:bg-transparent hover:text-primary"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Log in"}
        </button>

        <p className="text-sm mt-2 text-center">
          Have an account?{" "}
          <Link
            to={`/auth/register?redirect=${redirect}`}
            className="text-primary underline hover:text-opacity-80"
          >
            Register now
          </Link>
        </p>

        {isError && <FormError error={error} />}
      </form>
    </div>
  );
};

export default LoginCard;
