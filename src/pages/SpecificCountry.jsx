import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllTouristSpotCard from "../components/AllTouristSpotCard/AllTouristSpotCard";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

const SpecificCountry = () => {
    const data = useParams();
    // console.log('Country: ',data);
    const [bangladeshSpot, setBangladeshSpot] = useState([]);

    useEffect(() => {
        fetch('https://explore-southeast-aisa-server.vercel.app/touristSpot')
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            setBangladeshSpot(data);
          })

    },[])

    const spots = bangladeshSpot.filter(spot => spot.country === data.country);
    // console.log(spots);

    return (
        <div className="mt-5">
            <Helmet>
                <title>Specific Country Spots List</title>
            </Helmet>
            <div className="p-5 bg-slate-300 flex justify-center items-center">
                <h1 className="text-4xl font-DancingScript font-bold"><span className="text-white font-Robot">Country</span>: <span className="text-orange-500">{data.country}</span></h1>
            </div>

            <div className="min-h-screen grid md:grid-cols-2 lg:grid-cols-3 mx-auto">
                {
                    spots.map(spot => <AllTouristSpotCard  key={spot._id} touristSpot={spot}/>)
                }
            </div>
            <ScrollToTop />
        </div>
    );
};

export default SpecificCountry;