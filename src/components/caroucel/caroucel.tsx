import { Swiper, SwiperSlide } from 'swiper/react'
import { Conteiner } from "./style"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"


import img1 from '../../assets/galeria/academia01.jpeg'
import img2 from '../../assets/galeria/academia02.jpeg'
import img3 from '../../assets/galeria/academia03.jpeg'
import img4 from '../../assets/galeria/academia04.jpeg'
import img5 from '../../assets/galeria/academia05.jpeg'
import img6 from '../../assets/galeria/academia07.jpeg'
import img7 from '../../assets/galeria/academia08.jpeg'
import img8 from '../../assets/galeria/academia09.jpeg'
import img9 from '../../assets/galeria/academia10.jpeg'
import img10 from '../../assets/galeria/academia11.jpeg'
import img11 from '../../assets/galeria/academia06.jpeg'
import logo from '../../assets/logowhite.jpeg'
import video from '../../assets/videoo.mp4'
import { Navigation, Pagination } from 'swiper/modules'

export default function Caroucel() {

    const slides = [video, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]

    return (
        <Conteiner>
            <Swiper
                className='content'
                modules={[Navigation, Pagination]}
                navigation
                pagination
                loop

            >
                {slides.map((slide, index) => (
                    <SwiperSlide>
                        {
                            index == 0 ?

                                <video className='video' controls autoPlay poster={logo}>
                                    <source src={slide} type="video/mp4"/>
                                </video>
                                :
                                <img src={slide} alt={slide} />
                        }
                    </SwiperSlide>
                ))}
            </Swiper>
        </Conteiner>
    )
}