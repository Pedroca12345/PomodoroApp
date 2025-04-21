import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycles () {

   const { state } = useTaskContext();
   const cycleSteps = Array.from({ length: state.currentCycle });
   
   const cycleDescriptionMap = {
      workTime: "foco",
      shortBreakTime: "descanso curto",
      longBreakTime: "descanso longo"
   }

   const { 
      cycles,
      cycleDots,
      cycleDot,
   } = styles;

   return (
      <div className={cycles}>
         <span>Ciclos:</span>
         <div className={cycleDots}>
            {cycleSteps.map((_, index) => {
               const nextCycle = getNextCycle(index);
               const nextCycleType = getNextCycleType(nextCycle)
               return (
                  <span
                     key={`${nextCycleType}_${nextCycle}`}
                     className={`${cycleDot} ${styles[nextCycleType]}`}
                     aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                     title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                  ></span>
               );
            })}
            {/* <span className={`${cycleDot} ${workTime}`}></span> */}
         </div>
      </div>
   );
}