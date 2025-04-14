import { useState } from 'react';
import { Home } from './pages/Home';
import { TaskStateModel } from './models/TaskStateModel';
import { TaskContextProvider } from './contexts/TaskContext';

import './styles/globals.css';
import './styles/themes.css';



const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {

  const [state, setState] = useState(initialState);

  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
