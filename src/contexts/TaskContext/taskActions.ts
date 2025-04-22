import { TaskModel } from "../../models/TaskModel";

export enum TaskActionsTypes {
  START_TASK = 'START_TASK',
  INTERRUPTED_TASK = 'INTERRUPTED_TASK',
  RESET_STATE = 'RESET_STATE',
};

export type TaskActionModel = {
  type: TaskActionsTypes.START_TASK;
  payload: TaskModel;
} | {
  type: TaskActionsTypes.INTERRUPTED_TASK;
} | {
  type: TaskActionsTypes.RESET_STATE;
};