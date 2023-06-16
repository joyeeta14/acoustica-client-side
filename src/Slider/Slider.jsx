import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Fade } from "react-awesome-reveal";

const Slider = () => {
  return (
    <div className="mt-10">
<Fade>
<div className="text-5xl font-bold text-center">
        Basic Chords Diagram
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper ms-60 mt-20"
      >
        <SwiperSlide>
          <img className="w-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLulRI8npUv25pW1_db7z2YTq2HqhSYS-8Q&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwu3xrrIX9sDTSPc_bLHEySLXwNaxFJYEKtAp8cRMp2Ujd6F43FL_czgpgI72Xe2zyZo&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="pt-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZIi6ebf7MVDOlQK-tSiPwlDU7zzqZkhlLiw&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="pt-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIukhYqboDnN8ez19lEKs8FnpDjfN5nNJoUg&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqWQR_yXsPiWi9-SwhZDQdHnKw2ZfCEB9pOQ&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="pt-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYj66ydR7ySkYN3Z0byvwJR1OKNfp5nX8jcw&usqp=CAU" alt="" />
        </SwiperSlide>
      </Swiper>
</Fade>
    </div>
  );
};

export default Slider;

