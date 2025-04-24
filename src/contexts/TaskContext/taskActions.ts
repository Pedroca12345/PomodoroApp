import { TaskModel } from "../../models/TaskModel";
import { TaskStateModel } from "../../models/TaskStateModel";

export enum TaskActionsTypes {
  START_TASK = 'START_TASK',
  INTERRUPTED_TASK = 'INTERRUPTED_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLETED_TASK = 'COMPLETED_TASK',
  CHANGE_SETTINGS = 'CHANGE_SETTINGS',
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
} | {
  type: TaskActionsTypes.CHANGE_SETTINGS;
  payload: TaskStateModel['config'],
};