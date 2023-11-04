import Link from "next/link";
import LoginForm from "./LoginForm";

export const metadata = {
    title: "Login | TaskDrawer",
};

const LoginPage = () => {
    return (
        <div className="w-full bgi fji h-screen ">
            <div className="flex flex-col w-full">
                <h1 className={`text-2xl mb-5 text-center`}><Link href={'/'} className="hover:text-orange-600 hover:underline" title="Home">TaskDrawer</Link> Login</h1>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;