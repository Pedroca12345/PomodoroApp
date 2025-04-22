import { ReactNode, useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TImerWorkerManager";
import { TaskActionsTypes } from "./taskActions";

type TaskContextProviderProps = {
  children: ReactNode;
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();


  worker.onmessage((event) => {
    const countDownSeconds = event.data
    console.log(countDownSeconds);

    if (countDownSeconds <= 0) {
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
    console.log(state);

    if (!state.activeTask) {
      console.log('worker terminado por falta de active task')
      worker.terminate();
    }

    worker.postMessage(state);
  }, [worker, state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}