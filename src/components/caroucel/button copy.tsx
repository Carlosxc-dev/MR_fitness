import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

import img1 from '../../assets/galeria/academia01.jpeg'
import img2 from '../../assets/galeria/academia02.jpeg'
import img3 from '../../assets/galeria/academia03.jpeg'

export default function Caroucel() {
    return(
        <CCarousel controls indicators>
            <CCarouselItem>
                <CImage className="d-block w-100" src={img1} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={img2} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={img3} alt="slide 3" />
            </CCarouselItem>
        </CCarousel>

    )
}