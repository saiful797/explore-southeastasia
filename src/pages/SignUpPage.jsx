import {  useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/firebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

const SignUpPage = () => {

    const {createUser, updateUserProfile} =  useContext(AuthContext);
    // Navigation Process
    const navigate = useNavigate()

    const [showPassword, setShowPassword]=useState(false);
    const {register ,reset , handleSubmit} = useForm();

    const onSubmit = (data) =>{
        // console.log(data);
        const {name, email, password, imageURL } = data;

        if(password.length < 6){
            Swal.fire({
                title: 'Error!',
                text: 'Password should be at least 6 characters or longer!',
                icon: 'error',
                confirmButtonText: 'OK',
            })
            return;
        }

        else if(!/[A-Z]/.test(password)){
            Swal.fire({
                title: 'Error!',
                text: 'Your password should have at least one Uppercase and Lowercase character!',
                icon: 'error',
                confirmButtonText: 'OK',
            })
            return;
        }

        else if(!/[a-z]/.test(password)){
            Swal.fire({
                title: 'Error!',
                text: 'Your password should have at least one Uppercase and Lowercase character!',
                icon: 'error',
                confirmButtonText: 'OK',
            })
            return;
        }

        createUser(email, password).then(() => {
            Swal.fire({
                title: 'Success!',
                text: 'Account Create Successfully!',
                icon: 'success',
                confirmButtonText: 'OK',
            })
            updateUserProfile(name, imageURL).then(() => {
                navigate(location?.state || '/');
            })
        })
        reset();
    }
  
    return (
        <div className="min-h-screen mt-1 bg-[url('https://i.postimg.cc/RZfqJkDy/1213.jpg')] bg-no-repeat bg-cover">
            
            <Helmet>
                <title>Explore Southeast Asia | Sign Up</title>
            </Helmet>

            <div className="hero-content flex-col">
                <div className="text-center mb-2">
                    <h1 className="text-5xl mt-5 font-bold text-white">Create an Account</h1>
                </div>
                <div className="shadow-2xl shadow-black rounded-lg w-full max-w-sm bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-medium">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name..." name="name" className="input input-bordered" {...register("name")} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-medium">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email..." name="email" className="input input-bordered" {...register("email")} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-medium">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Enter your photo url..." name="imageURL" {...register("imageURL")} className="input input-bordered"/>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="text-lg font-medium">Password</span>
                            </label>
                            <input type={showPassword? "text":"password"} placeholder="Password..." name="password" className="input input-bordered" {...register("password")} required />
                            <span className="top-[60px] right-5  absolute" onClick={()=>setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        <div className="form-control mt-4">
                            <button  className="btn btn-outline font-bold text-xl">Register</button>
                        </div>
                        <div className="flex justify-center gap-5">
                            <h1>Have an account?</h1>
                            <Link to="/login"><p className="text-sky-400 font-bold hover:text-black link link-hover"> Sign In </p></Link>
                        </div>
                    </form>
                </div>
            </div>
            <ScrollToTop />
        </div>
    );
};

export default SignUpPage;