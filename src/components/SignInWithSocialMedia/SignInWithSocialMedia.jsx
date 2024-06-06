import { useContext } from "react";
import { AuthContext } from "../../Context/firebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const SignInWithSocialMedia = () => {
    const {googleLogin, githubLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleSocialMediaLogin = (socialMediaProvider) =>{

        socialMediaProvider().then(result =>{
            if(result.user){
                Swal.fire({
                    title: 'Success!',
                    text: 'You Login Successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                })
                navigate(location?.state || '/');
            }
        })
    }

    return (
        <div className="gap-5">

            <div className="pl-7 pr-7">
                <button className="btn btn-outline btn-success w-full text-lg font-bold" onClick= {() => handleSocialMediaLogin(googleLogin)}>
                    <FcGoogle className="text-2xl" />
                    <h1>Sign In with Google</h1>
                </button>
            </div>
            <div className="pl-7 pr-7 mt-2">
                <button className="btn btn-outline w-full text-lg font-bold" onClick= {() => handleSocialMediaLogin(githubLogin)}>
                    <FaGithub className="text-2xl"/>
                    <h1>Sign In with Github</h1>
                </button>
            </div>
            
        </div>
    );
};

export default SignInWithSocialMedia;