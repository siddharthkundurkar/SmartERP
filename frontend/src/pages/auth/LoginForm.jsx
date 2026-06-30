import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../../api/auth";
import useAuthStore from "../../auth/store/auth.store";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
const navigate = useNavigate();

const loginStore = useAuthStore((state) => state.login);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

   const onSubmit = async (data) => {

    try {

        const response = await login(data);

        loginStore({
            user: response.data.user,
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken,
        });

        navigate("/select-company");

    } catch (error) {

        alert(
            error.response?.data?.message ||
            "Login Failed"
        );

    }

};

    return (

        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

            <h2 className="text-3xl font-bold">
                Welcome Back 👋
            </h2>

            <p className="mt-2 text-slate-500">
                Login to continue.
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-5"
            >

                <div>

                    <label>Email</label>

                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required"
                        })}
                        className="mt-2 w-full rounded-xl border p-3"
                    />

                    <p className="text-sm text-red-500">
                        {errors.email?.message}
                    </p>

                </div>

                <div>

                    <label>Password</label>

                    <input
                        type="password"
                        {...register("password", {
                            required: "Password is required"
                        })}
                        className="mt-2 w-full rounded-xl border p-3"
                    />

                    <p className="text-sm text-red-500">
                        {errors.password?.message}
                    </p>

                </div>

                <button
                    className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
                >
                    Login
                </button>

            </form>

            <p className="mt-6 text-center">

                Don't have an account?

                <Link
                    to="/register"
                    className="ml-2 font-semibold text-blue-600"
                >
                    Register
                </Link>

            </p>

        </div>

    );

}