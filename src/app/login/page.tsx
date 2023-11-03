import LoginForm from "./LoginForm";

export const metadata = {
    title: "Login | The Universal News",
};

const LoginPage = () => {
    return (
        <div className="w-full bgi fji h-screen ">
            <div className="flex flex-col w-full">
                <h1 className={`text-2xl mb-5 text-center`}>TaskDrawer Login</h1>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;