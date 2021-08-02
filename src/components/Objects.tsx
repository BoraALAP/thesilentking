import styled from "styled-components";

interface Props {
  start?:Boolean,
  end?:Boolean,
  up?:Boolean,
  down?:Boolean,
  src?:string
  size?:Number
}

const Objects = ({src, start,end, up, down, size = 200 }: Props) => {
  return <Container start={start} end={end} up={up} down={down}><ImageS size={size} src={src}/></Container>;
};

const Container = styled.div<any>`
  display: grid;
  justify-content: ${props => props.start ? "start" : props.end ? "end": "center"};
  align-content: ${props => props.up ? "start" : props.down ? "end": "center"};
  width: 100vw;
  @media screen and (min-width: 768px) {
    
    height: 150px;
    
  }
  `;

const ImageS = styled.img<any>`
  display: grid;
  height: 100%;
  width: ${props => `${props.size}px`};
  
`;


export default Objects;
