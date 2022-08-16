
export interface Level {
   title: string;
   color: string;
   icon: 'down' | 'up';
   imc: number[];
   yuorImc?: number;
}

export const levels: Level[] = [
   { title: 'Magreza', color: '#96A3Ab', icon: 'down', imc: [0, 18.5] },
   { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
   { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30] },
   { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99] },
];

export const calculateImc = (weight: number, height: number) => {
   let imc = weight / (height * height);

   for (let i in levels) {
      if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
         let copLevels: Level = { ...levels[i] };

         copLevels.yuorImc = parseFloat((imc).toFixed(2));
         return copLevels;
      }
   }

   return null;
}