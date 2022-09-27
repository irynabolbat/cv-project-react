import React, {useRef, useState} from 'react';
import style from './Contact.module.css'
import {EnvelopeOpenFill, Github, Linkedin, Telegram} from "react-bootstrap-icons";
import Title from "../Base/Title/Title";
import emailjs from 'emailjs-com'
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {validateUserEmail} from "../../utils";
import Button from "../Base/Button/Button";
import Input from "../Base/Input/Input";

const Contact = () => {
    const [emailValid, setEmailValid] = useState(true);
    const [emailError, setEmailError] = useState("");

    const [nameError, setNameError] = useState("")
    const [subjectError, setSubjectError] = useState("")
    const [messageError, setMessageError] = useState("")

    const formRef = useRef();
    const nameRef = useRef()
    const emailRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()

    const handleInvalidForm = (e) => {
        switch (e.target.id) {
            case "nameForm": {
                setNameError("*Write your name")
                break
            }
            case "emailForm": {
                validateUserEmail(e, setEmailValid, setEmailError)
                break
            }
            case "subjectForm": {
                setSubjectError("*Write your subject")
                break
            }
            case "messageForm": {
                setMessageError("*Write your message")
                break
            }
            default:
                break
        }
    }

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_jq1fthr', 'template_a9mzgzm', formRef.current, 'Crzi82NFlieMUfurU')
            .then((result) => {
                toast('Thank you for your email!🙂')
                e.target.reset()
            }, (error) => {
                toast.error('Error:', error.text)
            });
    }
    return (
        <div className={style.wrapper}>
            <Title text={'Get in'} pickOutText={'touch'} backText={'Contact'}/>
            <div className={style.contact_wrapper}>
                <ul className={style.contact_icons}>
                    <li className={style.icon_box}>
                        <a href='mailto:irinabolbat@gmail.com' target="_blank"><EnvelopeOpenFill
                            className={style.icon}/></a>
                    </li>
                    <li className={style.icon_box}>
                        <a href='https://www.linkedin.com/in/iryna-bolbat-011204209/' target="_blank"><Linkedin
                            className={style.icon}/></a>
                    </li>
                    <li className={style.icon_box}>
                        <a href='https://github.com/irinabolbat' target="_blank"><Github
                            className={style.icon}/></a>
                    </li>
                    <li className={style.icon_box}>
                        <a href='https://t.me/irina_bolbat' target="_blank"><Telegram className={style.icon}/></a>
                    </li>
                </ul>


                <div>
                    <form ref={formRef} onSubmit={sendEmail}
                          onInvalid={handleInvalidForm}
                          className={style.input_wrapper}>
                        <div className={style.input_container}>
                            <Input type={'text'} name={'name'} id={'nameForm'} inputRef={nameRef}
                                   placeholder={"Your name"}
                                   label={"Your name"} showError={nameError !== ""} errorMessage={nameError}
                                   onChange={(event) => event.target.value !== "" ? setNameError('') : setNameError(nameError)}/>

                            <Input type={'email'} name={'email'} id={'emailForm'} inputRef={emailRef}
                                   placeholder={"Your email"}
                                   label={"Your email"}
                                   showError={!emailValid}
                                   errorMessage={emailError}
                                   onChange={(event) => validateUserEmail(event, setEmailValid, setEmailError)}/>
                        </div>

                        <Input type={'text'} name={'subject'} id={'subjectForm'} inputRef={subjectRef}
                               placeholder={"Your subject"}
                               label={"Your subject"} showError={subjectError !== ""} errorMessage={subjectError}
                               onChange={(event) => event.target.value !== "" ? setSubjectError('') : setSubjectError(subjectError)}/>

                        <Input type={'text'} name={'message'} id={'messageForm'} inputRef={messageRef}
                               placeholder={"Your message"}
                               label={"Your message"} showError={messageError !== ""} errorMessage={messageError}
                               extraClass={style.contact_message} inputType={'textarea'}
                               onChange={(event) => event.target.value !== "" ? setMessageError('') : setMessageError(messageError)}/>
                        <div className={style.contact_submit}>
                            <Button text={'Send message'} icon={<Telegram className={style.contact_icon}/>}
                                    iconExtraClass={style.icon} type={'submit'}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;