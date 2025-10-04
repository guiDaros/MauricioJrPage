import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importando as imagens
import img1 from "../../assets/sec2assets/1.png";
import img2 from "../../assets/sec2assets/2.png";
import img3 from "../../assets/sec2assets/3.png";
import img4 from "../../assets/sec2assets/4.png";
import img5 from "../../assets/sec2assets/5.png";
import img6 from "../../assets/sec2assets/6.png";
import img7 from "../../assets/sec2assets/7.png";
import img8 from "../../assets/sec2assets/8.png";
import img9 from "../../assets/sec2assets/9.png";
import img10 from "../../assets/sec2assets/10.png";
import img11 from "../../assets/sec2assets/11.png";


import { GeneralContainer, TitleSec2, CustomSwiper, SlideCard, SlidesWrapper } from "./styles";

const Section2 = () => {
  return (
    <GeneralContainer>
      <TitleSec2>Resultados de quem já experimentou o método</TitleSec2>
      <CustomSwiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        spaceBetween={100}
        slidesPerView={1}
        watchOverflow={true}
        breakpoints={{
          1200: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 6,
          },
        }}
      >
        <SlidesWrapper>
          <SwiperSlide>
            <SlideCard>
              <img src={img1} alt="" />
            </SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>
              <img src={img2} alt="" />
            </SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>
              <img src={img3} alt="" />
            </SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>
              <img src={img4} alt="" />
            </SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>
              <img src={img5} alt="" />
            </SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>
              <img src={img6} alt="" />
            </SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>
              <img src={img7} alt="" />
            </SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>
              <img src={img8} alt="" />
            </SlideCard>
          </SwiperSlide>
           <SwiperSlide>
            <SlideCard>
              <img src={img9} alt="" />
            </SlideCard>
          </SwiperSlide>
           <SwiperSlide>
            <SlideCard>
              <img src={img10} alt="" />
            </SlideCard>
          </SwiperSlide>
           <SwiperSlide>
            <SlideCard>
              <img src={img11} alt="" />
            </SlideCard>
          </SwiperSlide>
        </SlidesWrapper>
      </CustomSwiper>
    </GeneralContainer>
  );
};

export { Section2 };
