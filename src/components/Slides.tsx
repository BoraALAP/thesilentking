import styled from "styled-components";

interface Props {
  alt: string,
  src: string,
  children: any,
  rev?: boolean,
}

const Slides = ({alt, src, children, rev}:Props) => {
  return <Container rev={rev}>
    <Image src={src} alt={alt} rev={rev}/>
    <P>
      {children}
    </P>
  </Container>;
};

const Container = styled.div<any>`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-self: center;
  justify-items: center;
  grid-gap: 32px;
  grid-template-columns: 1fr 1fr;

  margin-top: 120px;
  z-index: 200;
`;

const Image = styled.img<any>`
  display: grid;
  width: 100%;
  min-width: 300px;
  min-height: 300px;
  height: 100%;
  object-fit: contain;
  transform: ${props => `rotate(${props.rev ? "-2" : "2"}deg)`};
  order: ${props => props.rev ? "2" : "-1"};
`;

const P = styled.div`
  display: grid;
  color: white;
  max-width: 500px
`;



export default Slides;
