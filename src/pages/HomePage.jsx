import { useLoaderData } from "react-router-dom";
import CountriesCard from "../components/CountriesCards/CountriesCard";
import FAQ from "../components/FAQ/FAQ";
import SliderSwiper from "../components/sliderSwiper/SliderSwiper";
import AllTouristSpotCard from "../components/AllTouristSpotCard/AllTouristSpotCard";
import ReviewSlider from "../components/reviewSlider/ReviewSlider";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";


const HomePage = () => {

    const allTouristsSpot = useLoaderData();
    const [text] = useTypewriter({
        words: ['Embrace the Journey, Live Fully!', 'Explore Southeast Asia!', 'Discover Next Destination with Us!', 'Explore More, Live Brighter!', "Adventure Beckons, Answer the Call!",'Travel, Thrive, Transform, Repeat!','Dream, Discover, Connect, Grow!'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 40
    });


    return (
        <div className="mt-6">
            <Helmet>
                <title>Explore southeast Asia | Home</title>
            </Helmet>
            <div className="flex justify-center items-center">
                <div className="text-sm md:text-xl font-medium font-Robot md:font-bold">
                    <span className="text-red-600">Welcome</span> !!{' '}
                    <span className="text-[#ffb219]">
                        {text}
                    </span>
                    <span>
                        <Cursor cursorStyle='|' cursorColor='red'/>
                    </span>
                </div>
            </div>
            <div className="z-[-1] mt-6">
                <SliderSwiper />
            </div>
            <div className="mt-10">
                <div className="bg-zinc-200 p-3 mb-10 shadow-md shadow-slate-500">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-center text-stone-500">Tourists Spots</h1>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
                    {
                        allTouristsSpot.map(touristSpot => <AllTouristSpotCard key={touristSpot._id} touristSpot={touristSpot} />)
                    }
                </div>
            </div>

            <div className="mt-10">
                <div className="bg-zinc-200 p-3 mb-10 shadow-md shadow-slate-500">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-center text-stone-500">Countries </h1>
                </div>
                <div className="">
                    <CountriesCard />
                </div>
                <div className="mt-20">
                    <div className="bg-zinc-200 p-3 mb-10 shadow-md shadow-slate-500">
                        <h1 className="text-2xl md:text-4xl font-extrabold text-center text-stone-500">Customer's Reviews</h1>
                    </div>
                    <ReviewSlider />
                </div>

                <div className="mt-10 text-center">
                    <div className="bg-zinc-200 p-3 mb-10 shadow-md shadow-slate-500">
                        <h1 className="text-2xl md:text-4xl font-extrabold text-center text-stone-500">FAQ</h1>
                    </div>

                    <FAQ />
                </div>
            </div>
            <ScrollToTop />
        </div>
    );
};

export default HomePage;