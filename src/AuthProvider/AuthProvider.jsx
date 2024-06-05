import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const addToCart = (product) => {
    //check if the product is already in the cart
    if (user?.email) {
      const exist = cart.find((p) => p._id === product._id);
      const filteredCard = cart.filter((p) => p._id !== product._id);
      let newCart = [];
      if (!exist) {
        newCart = [...cart, { ...product, quantity: 1 }];
      } else {
        newCart = [...filteredCard, { ...exist, quantity: exist.quantity + 1 }];
      }
      setCart(newCart);
      toast.success("Product added to cart");
    } else {
      toast.error("Please login to add product to cart");
    }
  };
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth).then(() => setUser(null));
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unscubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        console.log(currentUser);
      } else {
        setLoading(false);
      }
    });
    return () => {
      return unscubcribe();
    };
  }, []);

  const authInfo = {
    user,
    googleLogin,
    createUser,
    signIn,
    logout,
    loading,
    cart,
    setCart,
    addToCart,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
