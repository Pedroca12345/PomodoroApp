import { PlayCircleIcon } from 'lucide-react';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { DefaultInput } from './components/DefaultInput';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';

import './styles/globals.css';
import './styles/themes.css';

export function App() {

  return (
    <>
      <Container>
        <Heading>
          <Logo />
        </Heading>
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action="">
          <div className="formRow">
            <DefaultInput 
            labelText='Tarefa:' 
            id='taskInput' 
            type='text'
            placeholder='Digite o nome da tarefa'
            />
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="formRow">
            <Cycles />
          </div>
          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon/>} color='purple'/>
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>

    </>
  );
}
