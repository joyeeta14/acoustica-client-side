import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Fade } from "react-awesome-reveal";

const TopSlider = () => {
    return (
        <div className="mt-10 ">
<Fade>
<div className="text-5xl mb-20 font-bold text-center">
                Welcome to ACOUSTICA!
            </div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className="flex flex-col lg:flex-row  justify-center items-center">
                        <img className="lg:ms-10" src="https://img.freepik.com/free-vector/guitar-wooden-backround_1284-4837.jpg?size=626&ext=jpg&ga=GA1.2.563423901.1680299072&semt=ais" alt="" />
                        <div className="text-3xl font-semibold mx-20 text-center">
                            When words can't communicate
                            And expressions can't display,
                            What is there to do but sit in silence?
                            Hearing the soft tune play
                            You will rejoice on a long day
                            Some may not like it but some may
                            The sound of music will take your stress away
                            The soft tune will pass with the wind
                            It will have an everlasting effect on your mind
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="flex flex-col lg:flex-row  justify-center items-center">
                        <img className="lg:ms-10" src="https://img.freepik.com/free-vector/musical-quote-poster_460-35.jpg?size=626&ext=jpg&ga=GA1.2.563423901.1680299072&semt=ais" alt="" />
                        <div className="text-3xl font-semibold mx-20 text-center">
                            Henry Wadsworth Longfellow wrote, “Music is the universal language of mankind.” Scientists at Harvard published the most comprehensive scientific study on music as a cultural product, which supported the American poet's pronouncement and examined what features of song tend to be shared across societies
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="flex flex-col lg:flex-row   justify-center items-center">
                        <img className="lg:ms-10" src="https://img.freepik.com/free-vector/music-background-with-guitar_1284-4836.jpg?size=626&ext=jpg&ga=GA1.2.563423901.1680299072&semt=ais" alt="" />
                        <div className="text-3xl font-semibold mx-20 text-center">
                            Why listen to music?
                            Listening to (or making) music increases blood flow to brain regions that generate and control emotions. The limbic system, which is involved in processing emotions and controlling memory, “lights” up when our ears perceive music.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="flex flex-col lg:flex-row   justify-center items-center">
                        <img className=" lg:ms-10 " src="https://img.freepik.com/free-vector/music-fest-poster-with-guitar_23-2147558344.jpg?size=626&ext=jpg&ga=GA1.2.563423901.1680299072&semt=ais" alt="" />
                        <div className="text-3xl font-semibold mx-20 text-center">
                            A music festival is a community event with performances of singing and instrument playing that is often presented with a theme such as musical genre (e.g., rock, blues, folk, jazz, classical music), nationality, locality of musicians, or holiday.We welcome you t catch us on time reguarly.
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
</Fade>
        </div>
    );
};

export default TopSlider;

