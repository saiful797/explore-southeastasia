import { Helmet } from "react-helmet-async";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

const AboutPage = () => {
    
    return (
        <div className="p-10 mt-10 shadow-xl text-justify">
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <h1 className="text-center text-3xl font-bold">About Us</h1>
            <div className="h-[1px] bg-black mb-5"></div>
            <p>
                <strong>Welcome to Explore Southeast Asia</strong>, your gateway to the enchanting wonders of Bangladesh, Thailand, Indonesia, Malaysia, Vietnam, and Cambodia. Each country in this diverse region offers its own unique blend of cultural richness, natural beauty, and historical significance, inviting travelers on a journey of discovery and adventure.
            </p>
            <br />
            <p>
                In Bangladesh, embark on a voyage along the winding rivers of the Sundarbans, home to the world's largest mangrove forest and the elusive Bengal tiger. Explore the ancient ruins of Paharpur, a UNESCO World Heritage site, or wander through the bustling streets of Dhaka, where vibrant markets and colorful rickshaws abound.
            </p>
            <br />
            <p>
                Thailand beckons with its bustling cities, pristine beaches, and ancient temples. Discover the majestic beauty of Ayutthaya, the former capital of the Kingdom of Siam, or immerse yourself in the vibrant street food culture of Bangkok. Relax on the palm-fringed shores of Phuket or Phi Phi Islands, where crystal-clear waters and swaying coconut palms create a picture-perfect paradise.
            </p>
            <br />
            <p>
                Indonesia boasts a tapestry of cultures, landscapes, and experiences waiting to be explored. Trek through the dense jungles of Sumatra in search of orangutans, or dive into the turquoise waters of Raja Ampat, home to some of the world's most biodiverse coral reefs. Discover the ancient temples of Borobudur and Prambanan in Java, or unwind on the idyllic beaches of Bali, where vibrant ceremonies and lush rice terraces await.
            </p>
            <br />
            <p>
                Malaysia offers a fusion of cultures and cuisines, from the bustling streets of Kuala Lumpur to the tranquil tea plantations of the Cameron Highlands. Explore the colonial charm of Georgetown in Penang, or venture into the ancient rainforests of Taman Negara National Park, one of the oldest tropical rainforests on Earth. Dive into the underwater paradise of Sipadan Island, where colorful coral reefs and exotic marine life await beneath the waves.
            </p>
            <br />
            <p>
                Vietnam's rich history and stunning landscapes are sure to captivate the imagination. Explore the ancient town of Hoi An, with its lantern-lit streets and well-preserved architecture, or cruise along the emerald waters of Halong Bay, where limestone karsts rise majestically from the sea. Dive into the bustling streets of Ho Chi Minh City, formerly known as Saigon, where vibrant markets, ornate temples, and a buzzing nightlife await.

            </p>
            <br />
            <p>
                In Cambodia, marvel at the awe-inspiring temples of Angkor Wat, a UNESCO World Heritage site that stands as a testament to the country's rich history and cultural heritage. Discover the vibrant capital of Phnom Penh, where ancient traditions blend seamlessly with modern life, or unwind on the pristine beaches of Sihanoukville and Koh Rong.
            </p>
            <br />
            <p>
                With its rich tapestry of cultures, breathtaking landscapes, and unforgettable experiences, Southeast Asia is a destination like no other. Join us on an unforgettable journey as we explore the hidden gems and iconic landmarks of this magical region together.
            </p>

            <ScrollToTop />
        </div>
    );
};

export default AboutPage;