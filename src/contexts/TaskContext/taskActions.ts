import { TaskModel } from "../../models/TaskModel";

export enum TaskActionsTypes {
  START_TASK = 'START_TASK',
  INTERRUPTED_TASK = 'INTERRUPTED_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLETED_TASK = 'COMPLETED_TASK',
};

export type TaskActionModel = {
  type: TaskActionsTypes.START_TASK;
  payload: TaskModel;
} | {
  type: TaskActionsTypes.INTERRUPTED_TASK;
} | {
  type: TaskActionsTypes.RESET_STATE;
} | {
  type: TaskActionsTypes.COUNT_DOWN;
  payload: {secondsRemaining: number};
} | {
  type: TaskActionsTypes.COMPLETED_TASK;
};