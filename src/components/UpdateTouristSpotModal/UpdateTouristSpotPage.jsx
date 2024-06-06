import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from '../scrollToTop/ScrollToTop';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const UpdateTouristSpotPage = () => {

    const navigate = useNavigate();
    const  id= useParams();
    // console.log('From Updated Page: ',id);

    const [specificSpot, setSpecificSpot] = useState([]);
    useEffect(() => {
        fetch(`https://explore-southeast-aisa-server.vercel.app/singleSpot/${id.id}`)
        .then(res => res.json())
        .then(data => {
            setSpecificSpot(data);
        })
    },[id]);

    const {spot, location, country, seasonality, time, cost, visitors, photo, description} = specificSpot;

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const spot = form.spot.value;
        const location = form.location.value;
        const country = form.country.value;
        const seasonality = form.seasonality.value;
        const time = form.time.value;
        const cost = parseInt(form.cost.value) + 1000;
        const visitors = form.visitors.value;
        const photo = form.photo.value;
        const description = form.description.value;

        const data ={spot, location, country, seasonality, time, cost, visitors, photo,description}


        fetch(`https://explore-southeast-aisa-server.vercel.app/updateSpot/${id.id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
          .then(res => res.json())
          .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourist Spot Updated Successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                })
                
                navigate('/myList')
            }
          })
    }

    return (
        <div className="p-5 md:p-16 shadow-xl">
            <Helmet>
                <title>Update Tourist Spot Modal</title>
            </Helmet>

            <h1 className="text-2xl md:text-5xl font-extrabold mb-5 text-center">Update a Tourist Spot</h1>
            
            <form onSubmit={handleSubmit}>
                {/* form spot name and location row */}
                <div className="md:flex gap-5 md:mb-8">
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Spot Name</span>
                        </label>
                        <input type="text" name="spot" defaultValue={spot} placeholder="Enter Tourists Spot Name..." className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Spot Location</span>
                        </label>
                        <input type="text" name="location" defaultValue={location} placeholder="Enter Spot Location..." className="input input-bordered" required />
                    </div>
                </div>

                {/* form country name and seasonality row */}
                <div className="md:flex gap-5 md:mb-8">
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Country Name:</span>
                        </label>
                        <input type="text" name="country"  defaultValue={country} placeholder="Enter Country Name..." className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Seasonality</span>
                        </label>
                        <input type="text" name="seasonality" defaultValue={seasonality} placeholder="Enter Season Name(ex. summer)..." className="input input-bordered" required />
                    </div>
                </div>

                {/* form Travel Time and Average Cost row */}
                <div className="md:flex gap-5 md:mb-8">
                <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Travel Time</span>
                        </label>
                        <input type="text" name="time" defaultValue={time}  placeholder="Enter Travel Time(ex. 7 days)..." className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Average Cost</span>
                        </label>
                        <input type="number" name="cost" defaultValue={cost}  placeholder="Enter Average Cost $(US Dollar)..." className="input input-bordered" required />
                    </div>
                </div>

                {/* form Total Visitors Per Year and Spot Photo URL row */}
                <div className="md:flex gap-5 md:mb-8">
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Total Visitors Per Year</span>
                        </label>
                        <input type="text" name="visitors" defaultValue={visitors} placeholder="Enter total Visitors Per Year.." className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2 mb-5 md:mb-0">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Spot Photo URL</span>
                        </label>
                        <input type="url" name="photo" defaultValue={photo} placeholder="Enter Tourist Spot Photo URL..." className="input input-bordered" required />
                    </div>

                </div>

                {/* Short Description row */}
                <div className="mb-5 md:mb-8">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Short Description</span>
                    </label>
                    <textarea name='description' defaultValue={description} placeholder="Enter Spot Short Description..." className="textarea textarea-bordered textarea-lg w-full" required ></textarea>
                </div>

                <input type="submit" value="UPDATE SPOT" className="btn w-full bg-black text-white" />
            </form>
            <ToastContainer />
            <ScrollToTop />
        </div>
    );
};

UpdateTouristSpotPage.propTypes={
    id: PropTypes.string,
}

export default UpdateTouristSpotPage;