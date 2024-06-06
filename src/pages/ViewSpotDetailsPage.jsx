import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

const ViewSpotDetailsPage = () => {

    const allSpots = useLoaderData();
    const {id} = useParams();

    // console.log('Spot:', allSpots);
    // console.log('ID:', id);
    const singleSpot = allSpots.find(singleSpot => singleSpot._id === id);
    // console.log(singleSpot);
    const { time, visitors, cost, description, photo, spot, location, country, seasonality } = singleSpot;

    return (
        <div className="mt-10">
            <Helmet>
                <title>View Spot Details Page</title>
            </Helmet>      
            <h1 className="text-center text-5xl font-extrabold "><span className="text-5xl font-extralight">Tourist Spot: </span><span className="text-yellow-600">{spot}</span></h1>
            <div className="mt-10  grid lg:grid-cols-2 shadow-lg shadow-black">
                <div className="w-full">
                    <img className="h-full" src={photo} alt="Tourist spot photo" />
                </div>
                <div className="p-5 space-y-4">
                    <h2 className="text-xl font-extralight">Location: <span className="text-2xl font-bold">{location}</span></h2>
                    <h3 className="text-xl font-extralight">Country: <span className="text-4xl font-bold">{country}</span></h3>
                    <div className="md:flex md:justify-between">
                        <div className="">
                            <h4 className="text-xl font-extralight">Average Cost(per person): <span className="text-2xl font-bold">${cost}</span></h4>
                            <p className="text-xl font-extralight mt-5">Seasonality: <span className="text-2xl font-bold">{seasonality}</span> </p>
                        </div>
                        <div className="">
                            <h4 className="text-xl font-extralight mt-5 md:mt-0">Time: <span className="text-2xl font-bold"> {time}</span></h4>
                            <p className="text-xl font-extralight mt-5">Average Visitors <span className="text-base">(Per Year)</span>: <span className="text-2xl font-bold">{visitors}</span></p>
                        </div>
                    </div>
                    <p className="text-justify">
                        <span className="text-2xl font-bold text-stone-600">Description:</span> {description}
                    </p>      
                </div>
            </div>
            <ScrollToTop />
        </div>
    );
};

export default ViewSpotDetailsPage;