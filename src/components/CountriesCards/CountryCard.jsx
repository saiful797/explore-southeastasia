import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const CountryCard = ({country}) => {
    // console.log(country)
    const {description, name, photo} = country;
    
    return (
       <Link to={`/specificCountry/${name}`}>
            <button>
                <div className="card shadow-2xl w-[345px] h-[580px] bg-zinc-800 text-white">
                    <figure>
                        <img className='w-full h-60' src={photo} alt="Country photo"/>
                    </figure>
                    <div className="p-2">
                        <h2 className="card-title mt-3 mb-2">{name}</h2>
                        <p className='text-justify'>{description}</p>
                    </div>
                </div>
            </button>
       </Link>

        
    );
};

CountryCard.propTypes={
    country: PropTypes.object
}
export default CountryCard;