import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { FiSend } from "react-icons/fi"

//Components
import UserForm from "./components/UserForm"
import ReviewForm from "./components/ReviewForm"
import Thanks from "./components/Thanks"
import Steps from "./components/Steps"

//Hooks
import { useFormHook } from "./hooks/useFormHook"
import { useState } from "react"

import './App.css'

const formTemplate = {

  name:"",
  email: "",
  review: "",
  comment: "",

}

function App() {

  const [data, setData] = useState(formTemplate)

  //Function com objetivo de receber os valores 'key' e 'value' de outros components, mantendo as outras propriedades de 'data' sem alterações.
  //Ex: (key=name : value=dataProp.name )
  //name: Pedro
  const updateFieldHandler = (key, value) => {

    setData((prev) => {

      return {...prev, [key]: value}

    })

  }

  //As props "dataProp" e "updateFieldHandlerProp" tem como objetivo capturar os valores de elementos filhos, para que possam ser preenchidos no objeto 'formTemplate', que por sua vez está com os valores inseridos dentro da váriavel 'data'
  const formComponents = [<UserForm dataProp={data} updateFieldHandlerProp={updateFieldHandler} />, <ReviewForm dataProp={data} updateFieldHandlerProp={updateFieldHandler}/>, <Thanks dataProp={data} />]

  //Hook com objeto desestruturado, para que os valores das propriedades do hook useFormHook sejam exportadas para o app.jsx com variáveis de mesmo nome, assim simplificando o código.
  const { currentStep, currentComponent, changeStep, isLastStep, isFistStep } = useFormHook(formComponents)

  return (
    <div className='app'>

      <div className="header">
        <h1>Formulário Multistep React-JS</h1>
        <p>Ficamos felizes com a sua compra, utilize o formulário para uma avaliação rápida</p>
      </div>

      <div className="form-container">
     
        {/* Component 'Step' é chamado usando sua prop 'currentStepProp'. A prop recebe o valor da propriedade 'currentStep', do hook useFormHook */}
        <Steps currentStepProp={currentStep}/>


        {/* chamada função changeStep, que utiliza currentStep como argumento. Toda vez que o fom for submitado, adiciona 1 ao indice, fazendo assim com que o currentComponent seja alterado */}
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>

          <div className="inputs-container">{currentComponent}</div>

          <div className="actions">

            {/* Lógica usada para avaliar se é o primeiro botão do formulário, utilizando a propriedade 'isLastStep'. Caso NÃO seja o primeiro passo do formulário, então deve-se mostrar o botao de volta */}
            {!isFistStep && (
              <button type="button" onClick={(e) => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span >Voltar</span>
              </button>
            )}

            {/* Lógica usada para avaliar se é o ultimo botão do formulário, utilizando a propriedade 'isLastStep' */}
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}

          </div>

        </form>
      </div>

    </div>


  )

}

export default App
