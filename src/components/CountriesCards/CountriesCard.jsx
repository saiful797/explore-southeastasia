import { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

const CountriesCard = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://explore-southeast-aisa-server.vercel.app/addCountry')
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            setCountries(data);
          })
    },[])
    // console.log(countries);
    
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6 place-items-center">
            {
                countries.map(country => <CountryCard key={country._id} country={country} />)
            }
        </div>
    );
};

export default CountriesCard;