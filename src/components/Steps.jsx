import "./Steps.css"
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai"
import { FiSend } from "react-icons/fi"

//Desestruturando a prop, para que a mesma já seja usada como váriavel de mesmo nome. A Prop tem como objetivo passar o valor de um elemento pai, para um elemento filho
const Steps = ({ currentStepProp }) => {
    return (
        <div className="steps">
            <div className="step active">
                <p>identificação</p>
                <AiOutlineUser />
            </div>
            <div className={`step ${currentStepProp === 1 ? "active" : ""}`}>
                <p>Avaliação</p>
                <AiOutlineStar />
            </div>
            <div className={`step ${currentStepProp === 2 ? "active" : ""}`}>
                <p>Envio</p>
                <FiSend />
            </div>

        </div>
    )
}

export default Steps