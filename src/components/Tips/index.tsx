import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
  //tips
  const { state } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    workTime: <span>Foque por <b>{state.config.workTime}min.</b></span>,
    shortBreakTime: <span>Descanse por <b>{state.config.shortBreakTime}min.</b></span>,
    longBreakTime: <span><b>Descanso longo</b></span>
  }

  const tipsForNoActiveTask = {
    workTime: <span>Póximo cilco é de <b>{state.config.workTime}min.</b></span>,
    shortBreakTime: <span>Próximo cilco é de <b>{state.config.shortBreakTime}min.</b></span>,
    longBreakTime: <span>Próximo descanso será <b>longo</b></span>
  }

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}