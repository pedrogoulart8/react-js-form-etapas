import "./ReviewForm.css"

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";


const ReviewForm = ({ dataProp, updateFieldHandlerProp }) => {
  return (

    <div className="review-form">

      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value="Insatisfeito" name="review" required 
          
          //Função utilizada para preencher o valor da propriedade 'review', dentro do objeto 'formTemplate, que se encontra dentro da váriavel 'data'
          onChange={(e) => updateFieldHandlerProp("review", e.target.value ) }
          />

          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="Regular" name="review" required 
          onChange={(e) => updateFieldHandlerProp("review", e.target.value ) }
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>


        <label className="radio-container">
          <input type="radio" value="Satisfeito" name="review" required 
          onChange={(e) => updateFieldHandlerProp("review", e.target.value ) }
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="Muito Satisfeito" name="review" required 
          onChange={(e) => updateFieldHandlerProp("review", e.target.value ) }
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="cooment"
          value={dataProp.comment || ""}
          id="comment"
          placeholder="Conte como foi a sua experiência com o produto..."
          required

          onChange={(e) => updateFieldHandlerProp("comment", e.target.value)}
        ></textarea>
      </div>

    </div>

  )
}

export default ReviewForm