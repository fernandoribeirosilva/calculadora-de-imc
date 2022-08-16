import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

export type Props = {
   item: Level;
}

export const GridItem = ({ item }: Props) => {
   return (
      <div className={styles.main} style={{ backgroundColor: item.color }}>
         <div className={styles.gridIcon}>
            <img src={item.icon === 'up' ? upImage : downImage} alt={`icon-${item.icon}`} width="30" />
         </div>
         <div className={styles.gridTitle}>{item.title}</div>

         {item.yuorImc &&
            <div className={styles.yuorImc}>Seu IMC é de {item.yuorImc} kg/m²</div>
         }

         <div className={styles.gridInfo}>
            <>
               IMC esta entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
            </>
         </div>
      </div>
   )
}