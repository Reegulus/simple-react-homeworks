import React from 'react';
import s from './Message.module.css';

export type MessagePropsType = {
    avatar: string
    name: string,
    message: string,
    time: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
                <img src={props.avatar} className={s.avatar}/>

            <div className={s.messageСorner}/>

            <div className={s.block_content}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.text}>
                    {props.message}
                </div>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}



