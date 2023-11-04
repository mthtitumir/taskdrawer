"use client"
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";


const LoginForm = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signIn, googleLogin } : any = useAuth() || {};
    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const { replace, refresh } = useRouter();

    const onSubmit = async (data: any) => {
        const { email, password } = data;
        console.log(data);
        
        try {
            const user = await signIn(email, password);
            startTransition(() => {
                refresh();
                replace(from);
            });
        } catch (error) {
            console.log(error);

        }
    };

    const handleGoogleLogin = async () => {
        try {
            const { user } = await googleLogin();
            startTransition(() => {
                refresh();
                replace(from);
            });
        } catch (error) {
            console.error(error);

        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2 mx-auto">
            <div className="fji flex-col mx-auto ">
                <div className="mb-3">
                    <label htmlFor="email" className="text-lg">
                        Email
                    </label> <br />
                    <input
                        type="email"
                        placeholder="email"
                        id="email"
                        name="email"
                        className="bg-inherit border border-gray-500 px-2 py-1 rounded "
                        autoComplete="email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && (
                        <span className="text-red-500 text-base mt-1">
                            Please enter a valid email address.
                        </span>
                    )}
                </div>
                <div className="">
                    <label htmlFor="password" className="text-lg">
                        Password
                    </label> <br />
                    <div className="flex justify-between items-center">
                        <input
                            type={show ? "text" : "password"}
                            placeholder="password"
                            id="password"
                            name="password"
                            className="bg-inherit border border-gray-500 px-2 py-1 rounded "
                            autoComplete="new-password"
                            {...register("password", { required: true, minLength: 6 })}
                        />
                        {/* <p onClick={handleShow} className="-ml-14 cursor-pointer">{show ? <AiFillEye className="text-2xl"></AiFillEye> : <AiFillEyeInvisible className="text-2xl"></AiFillEyeInvisible>}</p> */}
                    </div>

                    {errors.password && (
                        <span className="text-red-500 text-base mt-1">
                            Please enter a password.
                        </span>
                    )}
                </div>
                <div className="mt-6">
                    <button className="px-3 py-1 border bg-inherit text-white rounded" type="submit">
                        Login
                    </button>
                </div>

                <p className="mt-3">
                    Don&apos;t have an account?
                    <Link className=" underline ml-1" href="/signup">
                        Signup
                    </Link>
                </p>
                {/* google login  */}
                <button
                    onClick={handleGoogleLogin}
                    type="button"
                    className="fji gap-2 px-3 py-2 mt-5 border rounded mx-auto"
                >
                    <FcGoogle className="text-xs " /> <span className="text-xs">Continue with google</span>
                </button>
            </div>
        </form>
    );
};

export default LoginForm;