import { UncontrolledCarousel } from 'reactstrap'

import styles from './Carousel.module.css'
import { carouselInfo } from '../../constants/components/carousel'

const MyCarousel = (props) => {
    const {
        slides = carouselInfo,
        style={}
    } = props

    return (
        <UncontrolledCarousel className={styles.carousel} style={style}
        items={slides}             
        />
    )
}

export default MyCarousel