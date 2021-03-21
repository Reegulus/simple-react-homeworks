import React from 'react';
import s from './Message.module.css';

export type MessageDataPropsType = {
    name: string,
    message: string,
    time: string
}

export function Message(props: MessageDataPropsType) {

    return (

        <div className={s.message}>
            <div>
                <img src='https://avatanplus.com/files/resources/original/57b3fe6c4059a1569719d6e8.png' alt=""/>
            </div>
            <div className={s.block_content}>
                <div>
                    {props.name}
                </div>
                <div>
                    {props.message}
                </div>
                <div>
                    {props.time}
                </div>
            </div>
        </div>
    )
}



