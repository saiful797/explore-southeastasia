import { useContext } from "react";
import { useForm} from "react-hook-form"
import Swal from "sweetalert2";
import { AuthContext } from "../Context/firebaseProvider/FirebaseProvider";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

const AddTourismSpotPage = () => {

    const {user} = useContext(AuthContext);
    // console.log(user);
    const {register ,reset , handleSubmit} = useForm();

    const onSubmit = (touristSpotData) => {
        const userEmail = user.email;
        // console.log('testing 1 :- ',touristSpotData.cost);
        
        touristSpotData.cost = parseInt(touristSpotData.cost)+1000;
        // console.log('testing 2:- ',touristSpotData.cost);

        const newTouristSpotData = {...touristSpotData, userEmail};
        // console.log(newTouristSpotData);
        
        fetch('https://explore-southeast-aisa-server.vercel.app/touristSpot', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(newTouristSpotData)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourist Spot Added Successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                })
                reset();
            }  
        })
    }
   
    return (
        <div className="p-5 md:p-12 shadow-2xl">
            <Helmet>
                <title>Add Tourist Spot</title>
            </Helmet>

            <h1 className="text-2xl md:text-5xl p-3 bg-slate-200  font-extrabold mb-5 text-center">Add a Tourist Spot</h1>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* form user name and email row */}
                <div className="md:flex gap-5 md:mb-8">
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">User Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Your Name..." className="input input-bordered" {...register("name")} required />
                    </div>
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">User Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Your Email..." className="input input-bordered" {...register("email")} required />
                    </div>
                </div>

                {/* form spot name and location row */}
                <div className="md:flex gap-5 md:mb-8">
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Spot Name</span>
                        </label>
                        <input type="text" name="spot" placeholder="Enter Tourists Spot Name..." className="input input-bordered" {...register("spot")} required />
                    </div>
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Spot Location</span>
                        </label>
                        <input type="location" name="location" placeholder="Enter Spot Location..." className="input input-bordered" {...register("location")} required />
                    </div>
                </div>

                {/* form Seasonality and Average Cost row */}
                <div className="md:flex gap-5 md:mb-8">
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Country Name</span>
                        </label>
                        <input type="text" name="country" placeholder="Enter Country Name..." className="input input-bordered" {...register("country")}  required />
                    </div>

                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Seasonality</span>
                        </label>
                        <input type="text" name="seasonality" placeholder="Enter Season Name(ex. summer)..." className="input input-bordered" {...register("seasonality")} required />
                    </div>
                </div>

                {/* form Travel Time and Total Visitors row */}
                <div className="md:flex gap-5 md:mb-8">
                <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Average Cost</span>
                        </label>
                        <input type="number" name="cost" placeholder="Enter Average Cost $(US Dollar)..." className="input input-bordered" {...register("cost")}  required />
                    </div>

                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Travel Time</span>
                        </label>
                        <input type="text" name="time" placeholder="Enter Travel Time(ex. 7 days)..." className="input input-bordered" {...register("time")} required />
                    </div>
                </div>

                {/* form Seasonality and Average Cost row */}
                <div className="md:flex gap-5 md:mb-8">
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Total Visitors Per Year</span>
                        </label>
                        <input type="number" name="visitors" placeholder="Enter total Visitors Per Year.." className="input input-bordered" {...register("visitors")}required />
                    </div>

                    {/* Photo row */}
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Photo URL</span>
                        </label>
                        <input type="url" name="photo" placeholder="Enter Tourist Spot Photo URL..." className="input input-bordered" {...register("photo")} required />
                    </div>
                </div>

                {/* Short Description row */}
                <div className="mb-5 md:mb-8">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Short Description</span>
                    </label>
                    <textarea type="text" name="description" placeholder="Enter Spot Short Description..." className="textarea textarea-bordered textarea-lg w-full" {...register("description")} required ></textarea>
                </div>

                <input type="submit" value="ADD SPOT" className="btn w-full bg-black text-white" />
            </form>
            <ScrollToTop />
        </div>
    );
};

export default AddTourismSpotPage;