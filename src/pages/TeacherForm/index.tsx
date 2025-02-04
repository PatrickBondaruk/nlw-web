import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/TextArea';

function TeacherForm(){
    return(
       
        <div id="page-teacher-form" className="container">
        <PageHeader title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição" />
     <main>
         <fieldset>
            <legend> Seus dados</legend>

            <Input name="name" label="Nome Completo" />
            <Input name="avatar" label="Avatar" />
            <Input name="whatsapp" label="Whatsapp" />
            <Textarea name="bio" label="Biografia" />
            
        </fieldset>
           
            <fieldset>
                <legend>Sobre a aula</legend>
            <Input name="subject" label="Matéria" />
            <Input name="cost" label="Custo da hora por aula" />         

            </fieldset>


         

         <footer>
             <p>
                 <img src={warningIcon} alt="Aviso Importante"/>
                 Importante! <br />
                 Favor preencher todos os campos.             
             </p>

             <button type="button">Salvar cadastro</button>
         </footer>   

    </main>
    </div>
    );
}

export default TeacherForm