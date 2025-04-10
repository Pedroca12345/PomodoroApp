import { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  durationMinutes: number;
  startDate: number;
  completeDate: number | null;
  interruptedDate: number | null;
  type: keyof TaskStateModel['config'];
};