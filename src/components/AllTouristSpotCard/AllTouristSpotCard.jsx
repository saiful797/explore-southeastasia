import PropTypes from 'prop-types'
import { Link} from 'react-router-dom';

const AllTouristSpotCard = ({touristSpot}) => {
    const {_id, photo, cost, seasonality, spot, time} = touristSpot;

    return (
        <div className={`w-[320px] h-[550px] glass mt-10 shadow-2xl mx-auto`}>
            <figure><img className='w-full h-60' src={photo} alt="tourist spot photo"/></figure>
            <div className="card-body flex flex-col">
                <div className='text-xl h-40 space-y-3'>
                    <h3>Spot Name: <span className='font-bold'>{spot}</span></h3>
                    <h5>Average Cost: <span className='font-bold'>${parseInt(cost)-1000}</span></h5>
                    <p>travel time: <span className='font-bold'>{time}</span></p>
                    <p>Seasonality: <span className='font-bold'>{seasonality}</span></p>
                </div>
                <div className='mt-10 flex justify-center items-center w-full'>
                    <Link to={`/viewDetails/${_id}`} className='w-full'>  
                        <button className="btn btn-sm btn-outline  w-full">View Details</button> 
                    </Link>
                </div>
            </div>
        </div>
    );
};

AllTouristSpotCard.propTypes ={
    touristSpot: PropTypes.object.isRequired,
}
export default AllTouristSpotCard;