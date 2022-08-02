/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const Login = () => {

    return (
        
<div className='container-login'>
<img src="/logo.svg" alt="Logo Fiap" className='logo'/>
<form>
    <div className='input'>
        <img src="/mail.svg" alt="Informe seu login" />
        <input type="text" placeholder="Login"></input>
    </div>
</form>
<form>
    <div className='input'>
    <img src="/lock.svg" alt="Informe sua senha" />
        <input type="password" placeholder="Senha"></input>
            </div>
            <button>Login</button>
</form>

</div>
        
    );
}