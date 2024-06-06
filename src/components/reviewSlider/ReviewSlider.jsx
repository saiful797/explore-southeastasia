import { Pagination, A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';

const ReviewSlider = () => {
    return (
        <Swiper
            modules={[ Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{delay: 3000}}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                
                <div className="card-body card-compact bg-lime-100 w-full ">
                    <div className='mx-auto'>
                        <figure><img className='w-20 h-20 rounded-full' src="https://i.postimg.cc/bJfBjqLy/profile-1.jpg" alt="spot" /></figure>
                    </div>
                    <div className="space-y-3 mx-auto w-2/3">
                        <h2 className="card-title">Abu Sufiyan</h2>
                        <p>
                            <strong>Review: </strong>Southeast Asia exceeded all my expectations! From the vibrant street life of Bangkok to the serene beauty of Luang Prabang, every corner offered something unique. It's a region brimming with diverse cultures, delicious food, and stunning landscapes.
                        </p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-400" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-400"/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card-body card-compact bg-lime-100 w-full">
                    <div className='mx-auto'>
                        <figure><img className='w-20 h-20 rounded-full' src="https://i.postimg.cc/wT44jXFb/profile-2.jpg" alt="spot" /></figure>
                    </div>
                    <div className="space-y-3 mx-auto w-2/3">
                        <h2 className="card-title">Mike Southi</h2>
                        <p>
                            <strong>Review: </strong>Exploring Southeast Asia was a dream come true. The ancient temples of Angkor Wat in Cambodia and the picturesque beaches of Thailand left me mesmerized. I can't wait to return and discover more hidden gems in this enchanting part of the world.
                        </p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-400"/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card-body card-compact bg-lime-100 w-ful">
                    <div className='mx-auto'>
                        <figure><img className='w-20 h-20 rounded-full' src="https://i.postimg.cc/76PSzcZ1/profile-3.jpg" alt="spot" /></figure>
                    </div>
                    <div className="space-y-3 mx-auto w-2/3">
                        <h2 className="card-title">Margaret Nataliya</h2>
                        <p>
                            <strong>Review: </strong>Southeast Asia is a paradise for adventurers. From trekking in the jungles of Borneo to snorkeling in the clear waters of the Philippines, the region offers endless opportunities for thrilling experiences. It's a must-visit for anyone seeking adventure and natural beauty.
                        </p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-400"/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card-body card-compact bg-lime-100">
                    <div className='mx-auto'>
                        <figure><img className='w-20 h-20 rounded-full' src="https://i.postimg.cc/NML5Bw0n/profile-4.jpg" alt="spot" /></figure>
                    </div>
                    <div className="space-y-3 mx-auto w-2/3">
                        <h2 className="card-title">Adam Smith</h2>
                        <p>
                            <strong>Review: </strong>My trip to Southeast Asia was unforgettable. The bustling markets of Ho Chi Minh City and the tranquil rice fields of Bali provided a perfect balance. This region truly captivates with its rich history, friendly people, and stunning landscapes.
                        </p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default ReviewSlider;