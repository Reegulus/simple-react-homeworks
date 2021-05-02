import React from 'react';
import s from './HW1.module.css'
import {Message} from './Message';

const messageDate = {
    avatar: 'https://avatanplus.com/files/resources/original/57b3fe6c4059a1569719d6e8.png',
    name: "Steve",
    message: 'Для чего нужен HOC React.memo? ',
    time: '22.00'
}

function HW1() {


    return (
        <div className={s.hw}>
            <hr/>
            <h2>homeworks 1</h2>
            {/*should work (должно работать)*/}
            <div className={s.message}>
                <Message
                    avatar={messageDate.avatar}
                    name={messageDate.name}
                    message={messageDate.message}
                    time={messageDate.time}

                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
        </div>
    )
}

export default HW1
