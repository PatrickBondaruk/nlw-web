import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';


function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis">
            <form id="search-teachers">

                <Input name="subject" label="Matéria"/>

                <Input name="weekday" label="Dia da Semana"/>

                <Input type="time" name="time" label="hora"/>

            </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />

            </main>
            

        </div>
        



    )
}

export default TeacherList