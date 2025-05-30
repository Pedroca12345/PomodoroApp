import { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { getNextCycle } from "../../utils/getCycle";
import { initialTaskState } from "./initialTaskState";
import { TaskActionModel, TaskActionsTypes } from "./taskActions";

export function taskReducer(state: TaskStateModel, action: TaskActionModel): TaskStateModel {
  switch (action.type) {
    case TaskActionsTypes.START_TASK: {

      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionsTypes.INTERRUPTED_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0, // Conferir depois
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptedDate: Date.now() };
          }
          return task;
        })
      };
    }
    case TaskActionsTypes.RESET_STATE: {
      return { ...initialTaskState };
    }
    case TaskActionsTypes.COUNT_DOWN: {
      return {
        ...state,
         secondsRemaining: action.payload.secondsRemaining,
         formattedSecondsRemaining: formatSecondsToMinutes(action.payload.secondsRemaining),
      };
    }
    case TaskActionsTypes.COMPLETED_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0, // Conferir depois
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, completeDate: Date.now() };
          }
          return task;
        })
      };
    }
    case TaskActionsTypes.CHANGE_SETTINGS: {
      return { ...state, config: { ...action.payload } };
    }
    
  }


  return state;
}