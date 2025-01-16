import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css"

const Thanks = ( { dataProp } ) => {
  return (
    <div className="thanks-container">
      <h2>Falta Pouco...</h2>
      <p><bold>{`${dataProp.name}`},</bold> a sua opinião é muito importante e concede <bold>10% de desconto</bold> em uma proxima compra!</p>
      <p>Para concluir sua avaliação, clique no botão ENVIAR</p>
      <h3>Aqui está o resumo da sua avaliação:</h3>
      <br/>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
        <p>{`${dataProp.review}`}</p>
      </p>
      <br/>
      <p className="review-data">
      <span>Comentário:</span>
      <p>{`${dataProp.comment}`}</p>
      </p>
    </div>
  )
}

export default Thanks