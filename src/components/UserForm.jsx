import React from 'react'

const UserForm = ({ dataProp, updateFieldHandlerProp }) => {

  return (

    <div>

      <div className='form-control'>
        <label htmlFor="name">Nome</label>
        {/* "..|| "" utilizado para que o console nao alerte erro antes do valor preenchido " */}
        <input type="text" value={dataProp.name || ""} name='text' id='text' placeholder='Digite seu nome'
          required

          //Chamada uma função dentro de onChange, que tem como objetivo preencher os argumentos (key, value), que serão utilizados no elemento pai.
          //'e' é o objeto do input. target tem como função voce selecionar qual propriedade de 'e' vc quer selecionar. Caso queira selecionar o value, então: e.target.value
          onChange={(e) => updateFieldHandlerProp("name", e.target.value)}

        />
      </div>

      <div className='form-control'>
        <label htmlFor="email">E-mail</label>
        <input type="email" value={dataProp.email || ""} name='email' id='email' placeholder='Digite seu e-mail'
          required 
          onChange={(e) => updateFieldHandlerProp("email", e.target.value)}
          />
      </div>


    </div>

  )
}

export default UserForm