import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

import styles from "./Card.module.css"
import { cardInfo as info } from '../../constants/components/card'

const MyCard = (props) => {
    const {
        cardInfo={}
    } = props

    const {
        title,
        subtitle,
        imgCard,
        height,
        alt,
        message,
        btn,
        style
    } = { ...info, ...cardInfo }

    return (
        <Card className={styles.card} style={style}>
            <img src={imgCard} alt={alt} height={height} style={{borderRadius:"7px 7px 0 0"}}/>
            <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6" >
                    {subtitle}
                </CardSubtitle>
                <CardText>{message}</CardText>
                <Button href={btn.href} onClick={btn.onclick}>
                    {btn.title}
                </Button>
            </CardBody>
        </Card>
    )
}

export default MyCard