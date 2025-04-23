import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionsTypes } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../Tips";
import { showMessage } from "../../adapters/showMessage";

export function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>(null);
  const { state, dispatch } = useTaskContext();


  //ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dismiss();

    if(taskNameInput.current === null) return;

    const taskName: string = taskNameInput.current.value.trim();

    if(!taskName) {
      showMessage.warning('digite o nome da tarefa!!!');

      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptedDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType
    };

    dispatch({ type: TaskActionsTypes.START_TASK, payload: newTask });

    showMessage.succes("Tarefa iniciada!");
  }

  function handleInterruptTask () {
    showMessage.dismiss();
    showMessage.warning('Tarefa interrompida');
    dispatch({ type: TaskActionsTypes.INTERRUPTED_TASK });
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action="">

      <div className="formRow">
        <DefaultInput
          labelText='Tarefa:'
          id='taskInput'
          type='text'
          placeholder='Digite o nome da tarefa'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className="formRow">
        <Tips />
      </div>

      {state.currentCycle !== 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}
      

      <div className="formRow">
        {!state.activeTask ? (
          <DefaultButton
            aria-label="Iniciar nova tarefa"
            title="Iniciar nova tarefa"
            type="submit" 
            icon={<PlayCircleIcon />} 
            color='purple'
            key={'start_task'} 
          />
          ) : (
            <DefaultButton
            aria-label="Interromper tarefa atual"
            title="Interromper tarefa atual"
            type="button" 
            icon={<StopCircleIcon />} 
            color='red'
            onClick={handleInterruptTask}
            key={'stop_task'}
          />
          )}
      </div>

    </form>
  );
}