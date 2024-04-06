import Link from 'next/link'
import { CardContainer, LinkTag, CardHeader, HeaderInput, CardBody, CardFooter } from './Card.styles'
import { Note } from '@/types/notes'
import { FC } from 'react';

interface CardProps {
  data: Note
}

const Card: FC<CardProps> = ({ data }) => {
  
  return (
    <CardContainer $cardHeight={data.content.length} $data={data} >
      <CardHeader>
        <HeaderInput />
      </CardHeader>
      <CardBody>
        {data.content}
      </CardBody>
      <CardFooter>
      </CardFooter>
      <LinkTag href={`/edit-note?id=${data.id}`}>
      </LinkTag>
    </CardContainer>
  );
}


export default Card;