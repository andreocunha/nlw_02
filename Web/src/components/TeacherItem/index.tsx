import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/54721131?s=460&u=3d3ab313b60d10b8521a0d131df9b55f0600855a&v=4" alt="Andre Cunha"/>
            <div>
                <strong>André Cunha</strong>
                <span>Eletrônica</span>
            </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de eletrônica avançada.
                <br /><br />
                Mago da tecnologia dos dias atuais
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;