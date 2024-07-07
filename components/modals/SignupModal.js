import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase";
import { useEffect, useState } from "react";
import { setUser } from "@/redux/userSlice";
import { useRouter } from "next/router";

export default function SignupModal() {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  async function handleSignUp() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser, {
      displayName: name,
      photoUrl: `./assets/profilePictures/pfp${Math.ceil(Math.random() * 6)}.png`
    });

    router.reload
  }

  async function handleGuestSignIn(){
    await signInWithEmailAndPassword(auth, "guest203945@gmail.com", "123456")
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      console.log(currentUser);
      dispatch(
        setUser({
          username: currentUser.email.split("@")[0],
          name: currentUser.displayName,
          email: currentUser.email,
          uid: currentUser.uid,
          photoUrl: currentUser.photoURL,
        })
      );
      //handle redux actions(1:45:11)
    });

    return unsubscribe;
  }, []);
  return (
    <>
      <button
        className=" bg-white border border-white text-black
  w-[100px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openSignupModal())}
      >
        Sign Up
      </button>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
      >
        <div
          className=" w-[90%] h-[600px] bg-black text-white
        md:w-[560px] md:h-[600px] border border-gray-700 
        rounded-lg flex justify-center"
        >
          <div className="w-[90%] mt-8 flex flex-col">
            <button 
            onClick={handleGuestSignIn}
            className="bg-white text-black w-full font-bold text-lg p-2 rounded-md">
              Sign In as Guest
            </button>
            <h1 className=" text-center mt-4 font-bold text-lg">or</h1>
            <h1 className=" text-center mt-4 font-bold text-4xl">
              Create your account
            </h1>
            <input
              placeholder="Full Name"
              className=" h-10 rounded-md bg-transparent border
             border-gray-700 p-6 mt-8"
              type={"text"}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Email"
              className=" h-10 rounded-md bg-transparent border
             border-gray-700 p-6 mt-8"
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="password"
              className=" h-10 rounded-md bg-transparent border
             border-gray-700 p-6 mt-8"
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="bg-white text-black w-full font-bold text-lg p-2 rounded-md mt-8"
              onClick={handleSignUp}
            >
              Create account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
