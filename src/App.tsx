
import { GlobalStyle } from "./style/global";
import styled from "styled-components"
import Script4 from "./pageComponents/Script4";
import Script2 from "./pageComponents/Script2";
import Slides from "./components/Slides";

import slide1 from "./assets/images/slide1.jpeg"
import slide2 from "./assets/images/slide2.gif"
import slide3 from "./assets/images/slide3.jpeg"
import slide4 from "./assets/images/slide4.jpeg"
import slide5 from "./assets/images/slide5.jpeg"


function App() {
  return (
    <Container>
      <GlobalStyle />
      <Slides src={slide1} alt="slide 1">
      <p>
        The Silent King is a feature script with only 4 characters, in one room, around one table. It's a simple night of Dungeons & Dragons between 4 friends. But the Dungeon Master Morgan has a sinister plan for tonight's game.
        </p>
        </Slides> 
        <Slides src={slide2} alt="slide 2" rev>
        <p>
          As the group of old friends play the game, their collective imagination seeps into the reality. We never leave the table - the fantasy comes to us. 
          </p>
        </Slides> 
      <Script2 />
      <Slides src={slide3} alt="slide 3">
      <p>
        This is the first time they meet for a d&d session in over a year. We learn that Wren; the fifth member of the party and Morgan's brother, passed away a year ago; which stopped the game until tonight.
        </p>

<p>
  Morgan reveals his bitterness over how they seemingly abandoned Wren in his last days in the hospital. And he tells them that Wren left a message before his death. But he will only reveal what it is if they can find his character in the game - who is captured and imprisoned by the all powerful Silent King. 
  </p>
        </Slides> 
        <Slides src={slide4} alt="slide 4" rev>
        Morgan's game is a direct representation of his feelings, and as the night goes, the imagination becomes more and more real. Tonight's session is born out of his fears, frustration, and pain, and it soon becomes clear to everyone.
        </Slides> 
      <Script4 />
      <Slides src={slide5} alt="slide 5">
      The story captures what it means to find home and heart within a roleplaying game, and meditates over how we can lose our ways as we grow up, having forced to learn that nothing in life is promised.
        </Slides> 
      
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  padding: 5vw;
  justify-items: center;
  
`;


export default App;
