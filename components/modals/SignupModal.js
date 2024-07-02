import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function SignupModal() {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();
  console.log(isOpen);

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
            <button className="bg-white text-black w-full font-bold text-lg p-2 rounded-md">
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
            />
            <input
              placeholder="Email"
              className=" h-10 rounded-md bg-transparent border
             border-gray-700 p-6 mt-8"
              type={"email"}
            />
            <input
              placeholder="password"
              className=" h-10 rounded-md bg-transparent border
             border-gray-700 p-6 mt-8"
              type={"password"}
            />

            <button className="bg-white text-black w-full font-bold text-lg p-2 rounded-md mt-8">
              Create account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
