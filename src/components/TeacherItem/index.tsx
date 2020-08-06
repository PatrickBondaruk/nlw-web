import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://pbs.twimg.com/profile_images/1283091136412868609/d4qChoip_400x400.jpg" alt=""/>
                        <div>
                            <strong>Jethro Diggle</strong>
                            <span>
                                Bard Sorcerer
                            </span>
                        </div>
                    </header>
                    <p>
                        The Real Bard tha likes to pew pew and bling bling. <br /><br />
                        Very happy and talkative Bard
                    </p>
                    <footer>
                        <p>Preço Hora<strong> 80Gp
                        </strong>

                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="ZapZap"/>
                            Entrar em contato
                        </button>
                    </footer>
         </article>
    )


}

export default TeacherItem;