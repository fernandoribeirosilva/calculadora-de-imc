import { useState } from 'react';
import styles from './App.module.css';
import leftArrowImage from './assets/leftarrow.png';
import { GridItem } from './components/GridItem'

import { calculateImc, Level, levels } from './helpers/imc';

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(weightField, heightField));
    } else {
      alert('Digite todos os campos.');
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <>
      <main className={styles.main}>
        <header>
          <h2>IMC</h2>
          powered by Fernando
        </header>
        <section className={styles.container}>
          <div className={styles.leftSide}>
            <h1>Calcule o seu IMC</h1>
            <p>
              IMC é a sigla para Índice de Massa Corporal, parâmetro adotado pela
              Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
            </p>

            <input
              type="number"
              placeholder="Digite a sua altura. EX 1.5 (em metros)"
              value={heightField > 0 ? heightField : ''}
              onChange={e => setHeightField(parseFloat(e.target.value))}
              disabled={toShow ? true : false}
            />

            <input
              type="number"
              placeholder="Digite o sua peso. EX 75.3 (em kg)"
              value={weightField > 0 ? weightField : ''}
              onChange={e => setWeightField(parseFloat(e.target.value))}
              disabled={toShow ? true : false}
            />

            <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
          </div>
          <div className={styles.rightSide}>
            {!toShow &&
              <div className={styles.grid}>
                {levels.map((item, key) => (
                  <GridItem key={key} item={item} />
                ))}
              </div>
            }
            {toShow &&
              <div className={styles.rightBig}>
                <div className={styles.rightArrow} onClick={handleBackButton}>
                  <img src={leftArrowImage} alt={`icon-${leftArrowImage}`} width={25} />
                </div>
                <GridItem item={toShow} />
              </div>
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default App
