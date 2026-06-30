import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { register as registerUser } from "../../api/auth";

export default function RegisterForm() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    const onSubmit = async (data) => {

        try {

            await registerUser(data);

            alert("Registration Successful");

            navigate("/login");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );

        }

    };

    return (

        <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-xl">

            <h2 className="text-3xl font-bold">
                Create Company
            </h2>

            <p className="mt-2 text-slate-500">
                Register your business and start using SmartERP.
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-5"
            >

                <div>

                    <label>Full Name</label>

                    <input
                        {...register("fullName", {
                            required: "Full Name is required"
                        })}
                        className="mt-2 w-full rounded-xl border p-3"
                    />

                    <p className="text-sm text-red-500">
                        {errors.fullName?.message}
                    </p>

                </div>

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

                    <label>Mobile</label>

                    <input
                        {...register("mobile")}
                        className="mt-2 w-full rounded-xl border p-3"
                    />

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

                <div>

                    <label>Company Name</label>

                    <input
                        {...register("companyName", {
                            required: "Company Name is required"
                        })}
                        className="mt-2 w-full rounded-xl border p-3"
                    />

                    <p className="text-sm text-red-500">
                        {errors.companyName?.message}
                    </p>

                </div>

                <button
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
                >
                    {isSubmitting
                        ? "Creating..."
                        : "Create Company"}
                </button>

            </form>

            <p className="mt-6 text-center">

                Already have an account?

                <Link
                    to="/login"
                    className="ml-2 font-semibold text-blue-600"
                >
                    Login
                </Link>

            </p>

        </div>

    );

}