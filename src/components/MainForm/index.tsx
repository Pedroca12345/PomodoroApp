import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>(null);
  const { setState } = useTaskContext();

  function handleCreateNewTask (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if(taskNameInput.current === null) return;

    const taskName: string = taskNameInput.current.value.trim();

    if(!taskName) {
      alert('digite o nome da tarefa!!!');

      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptedDate: null,
      duration: 1,
      type: "workTime"
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: 1, //Conferir depois
        secondsRemaining, // Conferir depois
        formattedSecondsRemaining: '00:00', // Conferir depois
        tasks: [...prevState.tasks, newTask],
      };
    });
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
        />
      </div>
      <div className="formRow">
        <p>Próximo intervalo é de min.</p>
      </div>
      <div className="formRow">
        <Cycles />
      </div>
      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} color='purple' />
      </div>
    </form>
  );
}