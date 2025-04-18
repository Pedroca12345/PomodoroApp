import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function MainForm() {
  const { setState } = useTaskContext();

  function handleClick () {
    setState(prevState => {
      return {
        ...prevState,
        formattedSecondsRemaining: "22:00"
      }
    })
  }

  return (
    <form className='form' action="">

      <button type="button" onClick={handleClick}>Clicar</button>

      <div className="formRow">
        <DefaultInput
          labelText='Tarefa:'
          id='taskInput'
          type='text'
          placeholder='Digite o nome da tarefa'
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