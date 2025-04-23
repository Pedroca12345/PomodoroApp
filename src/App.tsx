import { BrowserRouter, Route, Routes } from 'react-router';
import { MessagesContainer } from './components/MessagesContainer';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';


import './styles/globals.css';
import './styles/themes.css';
import { AboutPomodoro } from './pages/AboutPomodoro';

export function App() {


  return (
    <TaskContextProvider>
      <MessagesContainer>
        <BrowserRouter>
          <Routes>

            <Route
              path='/'
              element={<Home />}
            />

            <Route
              path='/about-pomodoro/'
              element={<AboutPomodoro />}
            />

            <Route
              path='*'
              element={<NotFound />}
            />

          </Routes>
        </BrowserRouter>
      </MessagesContainer>
    </TaskContextProvider>
  );
}
