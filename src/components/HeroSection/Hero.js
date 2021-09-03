import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core"
import { useHistory } from "react-router"
import styles from "../HeroSection/Hero.module.css"
import { Button } from "../../Utilities/Button"
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])

export default function Hero() {
  const history = useHistory()
  return (
    <>
      <Swiper
        centeredSlides={false}
        autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.backHero}>
            <div>
              <h1 className={styles.educConsult}>Education Consultation</h1>
              <Button
                onClick={() => history.push("./education")}
                className={styles.btnstyled}
                target="blank"
              >
                Click Me!
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.backHero2}>
            <div>
              <h1 className={styles.educConsult}>Build & Development</h1>
              <Button
                onClick={() => history.push("./build-dev")}
                className={styles.btnstyled}
                target="blank"
              >
                Click Me!
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
