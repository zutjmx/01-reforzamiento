import { useState } from "react";

export const useCounter = (valorInicial: number = 100) => {
     
    const [valor, setValor] = useState(valorInicial);

    const acumular = (numero: number) => {
       setValor(valor + numero);
    }
    
    return {
        valor,
        acumular
    }
}
