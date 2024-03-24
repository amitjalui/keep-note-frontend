import Link from 'next/link'
import { CardContainer, LinkTag, CardHeader, HeaderInput, CardBody, CardFooter } from './Card.styles'

const Card = ({data, he, id}) => {
  return (
    <CardContainer $cardHeight={he} $dataa={data} $id={id}>
      <CardHeader>
        <HeaderInput />
      </CardHeader>
      <CardBody>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
        bodysccsc<br/>
      </CardBody>
      <CardFooter>
      </CardFooter>
      <LinkTag href={`/edit-note?id=${id}`}>
      </LinkTag>
    </CardContainer>
  );
}


export default Card;