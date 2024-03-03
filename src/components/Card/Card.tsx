import Link from 'next/link'
import { CardContainer } from './CardStyles'

const Card = ({data, he}) => {
  return (
    <CardContainer $cardHeight={he} $dataa={data} >
      <Link href="/" style={{height: "100%", display: "block"}}>
        {data}
      </Link>
    </CardContainer>
  )
}

export default Card;