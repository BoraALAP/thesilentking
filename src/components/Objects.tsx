import styled from "styled-components";

interface Props {
  start?:Boolean,
  end?:Boolean,
  up?:Boolean,
  down?:Boolean,
  src?:string
  size?:Number
  height?:Number
}

const Objects = ({src, start,end, up, down, size = 200, height = 150 }: Props) => {
  return <Container start={start} end={end} up={up} down={down} height={height}><ImageS size={size} src={src}/></Container>;
};

const Container = styled.div<any>`
  display: grid;
  justify-content: ${props => props.start ? "start" : props.end ? "end": "center"};
  align-content: ${props => props.up ? "start" : props.down ? "end": "center"};
  width: 100vw;
  height: ${props => `${props.height}px`};
  @media screen and (min-width: 768px) {
    
    height: ${props => `calc(${props.height}px / 2)`};
    
  }
  `;

const ImageS = styled.img<any>`
  display: grid;
  height: 100%;
  width: ${props => `${props.size}px`};
  
`;


export default Objects;
