import { ReactNode, useEffect, useReducer, useRef } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TImerWorkerManager";
import { TaskActionsTypes } from "./taskActions";
import { loadBeep } from "../../utils/loadBeep";
import { TaskStateModel } from "../../models/TaskStateModel";

type TaskContextProviderProps = {
  children: ReactNode;
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    const storagedState = localStorage.getItem('state');

    if(storagedState === null) return initialTaskState;

    const parsedStoragedState = JSON.parse(storagedState) as TaskStateModel;

    return {
      ...parsedStoragedState,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: '00:00',
    };
  });
  const playBeepRef = useRef<() => void | null>(null);

  const worker = TimerWorkerManager.getInstance();


  worker.onmessage((event) => {
    const countDownSeconds = event.data

    if (countDownSeconds <= 0) {
      if(playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null;
      }
      dispatch({
        type: TaskActionsTypes.COMPLETED_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionsTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds }
      });
    }
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));

    if (!state.activeTask) {
      worker.terminate();
    }

    if(state.activeTask) {
      document.title = `${state.formattedSecondsRemaining} - Pomodoro`;
    } else {
      document.title = 'Pomodoro';
    }
    
    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}