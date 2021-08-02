import styled from "styled-components";

interface Props {
  alt: string,
  src: string,
  children: any,
  rev?: boolean,
}

const Slides = ({alt, src, children, rev}:Props) => {
  return <Container rev={rev}>
    <P>
      {children}
    </P>
    <Image src={src} alt={alt} rev={rev}/>
  </Container>;
};

const Container = styled.div<any>`
  display: grid;
  padding: 1rem 5vw;
  align-items: center;
  justify-self: center;
  justify-items: center;
  grid-gap: 32px;
  margin-top: 120px;
  z-index: 200;
  
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: column;
  }
`;

const Image = styled.img<any>`
  display: grid;
  width: 100%;
  min-width: 300px;
  min-height: 300px;
  height: 100%;
  object-fit: contain;
  transform: ${props => `rotate(${props.rev ? "2" : "-2"}deg)`};
  
  @media screen and (min-width: 768px) {
    order: ${props => props.rev ? "2" : "-1"};
    
  }
`;

const P = styled.div`
  display: grid;
  color: white;
  max-width: 500px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.8;
  text-shadow: 0px 0px 3px #000;


`;



export default Slides;
