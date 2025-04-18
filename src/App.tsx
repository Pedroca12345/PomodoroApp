import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { Home } from './pages/Home';


import './styles/globals.css';
import './styles/themes.css';

export function App() {


  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
