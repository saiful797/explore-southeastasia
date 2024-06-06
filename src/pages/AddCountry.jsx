import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";


const AddCountry = () => {

    const {register ,reset , handleSubmit} = useForm();

    const onSubmit = (newCountry) => {

        // console.log(newCountry);

        fetch('https://explore-southeast-aisa-server.vercel.app/addCountry', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(newCountry)
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
        <div className="p-5 md:p-16 shadow-2xl">
            <Helmet>
                <title>Add Country</title>
            </Helmet>

            <h1 className="text-2xl md:text-5xl p-3 bg-slate-200  font-extrabold mb-5 text-center">Add a Country</h1>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Country name row */}
                <div className="mb-5 md:mb-8">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Country Name:</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter country name..." className="input input-bordered w-full" {...register("name")} required />
                </div>

                {/* Short Description row */}
                <div className="mb-5 md:mb-8">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Photo URL:</span>
                    </label>
                    <input type="url" name="photo" placeholder="Enter country photo  URL..." className="input input-bordered w-full" {...register("photo")} required />
                </div>

                {/* Short Description row */}
                <div className="mb-5 md:mb-8">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Short Description:</span>
                    </label>
                    <textarea type="text" name="description" placeholder="Enter country short description..." className="textarea textarea-bordered textarea-lg w-full" {...register("description")} required ></textarea>
                </div>

                <input type="submit" value="ADD COUNTRY" className="btn w-full bg-black text-white" />
            </form>
            <ScrollToTop />
        </div>
    );
};

export default AddCountry;