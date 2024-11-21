import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { GeneralContainer, TitleSec2, CustomSwiper } from "./styles";



const Section2 = () => {

  return (
    <GeneralContainer>
      <TitleSec2>Titlezinho</TitleSec2>
      <CustomSwiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        navigation={{ enabled: true }}
        watchOverflow={false} // Para desativar controles quando não houver slides suficientes

       


        breakpoints={{
          1200: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </CustomSwiper>
    </GeneralContainer>
  );
};

export { Section2 };





// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import { GeneralContainer, TitleSec2, CustomSwiper } from "./styles";

// export function Section2() {
//   const [slidesPerView, setSlidesPerView] = useState(3);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 480) {
//         setSlidesPerView(1);
//       } else if (window.innerWidth < 768) {
//         setSlidesPerView(2);
//       } else {
//         setSlidesPerView(3);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <GeneralContainer>
//       <TitleSec2>Titlezinho</TitleSec2>
//       <CustomSwiper
//         modules={[Navigation, A11y]}
//         spaceBetween={10}
//         slidesPerView={slidesPerView}
//         navigation
//         loop={true}

//         breakpoints={{
//           1200: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 8,
//           },
//           480: {
//             slidesPerView: 1,
//             spaceBetween: 5,
//           },
//         }}
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//       </CustomSwiper>
//     </GeneralContainer>
//   );
// }
