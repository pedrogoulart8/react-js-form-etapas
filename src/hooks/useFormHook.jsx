import { useState } from "react";

export function useFormHook (steps) {

    const [currentStep, setCurrentStep] = useState(0)

    function changeStep(i, e) {

        if(e) e.preventDefault()

        //Caso o indice seja menor que zero ou maior ou igual ao numero total de "steps", retorna sem fazer nada
        if(i < 0 || i >= steps.length) return

        setCurrentStep(i)

    }


    return{

        //Indice 
        currentStep,

        //Propriedade criada para inserir um indice dentro do argumento 'steps', que será usado em app.jsx. O objeto 'formComponents', que tem como propriedades as etapas do formulario, será usado no argumento 'steps' e assim poderemos saber qual etapa atual do formulário.
        //Ex: formComponents[0], formComponents[1]...
        currentComponent: steps[currentStep],
        changeStep,

        //Propriedade criada para identificar o ultimo passo do formulário
        isLastStep: currentStep + 1 === steps.length ? true : false,
        isFistStep: currentStep === 0 ? true : false,
    }

}