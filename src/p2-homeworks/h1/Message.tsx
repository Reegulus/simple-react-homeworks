import React from 'react';
import s from './Message.module.css';

export type MessageDataPropsType = {
    name: string,
    message: string,
    time: string
}

export function Message(props: MessageDataPropsType) {
   /* let messageObj = {
        name: Steve

    }*/
    return (

        <div className={s.body}>
            <div className={s.imgItem}>
                <img src='https://avatanplus.com/files/resources/original/57b3fe6c4059a1569719d6e8.png' alt=""/>
            </div>
            <div className={s.block_content}>
                <div className={s.nameItem}>
                    {props.name}
                </div>
                <div className={s.messageItem}>
                    {props.message}
                </div>
                <div className={s.timeItem}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}



