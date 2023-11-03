import AuthContext from "@/contexts/AuthContext";
import auth, { googleProvider } from "@/firebase/firebase.auth";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<firebase.User | null>(null);
    console.log(user, "from auth provider");
    
    const [loading, setLoading] = useState<boolean>(true);

    const createUser = (email: string, password: string) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email: string, password: string) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser:any) => {
            setUser(authUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const value:any = {
        user,
        loading,
        createUser,
        signIn,
        googleLogin,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
