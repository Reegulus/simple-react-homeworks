import React from 'react';
import { Message } from './Message';

const messageDate = {
    avatar: 'https://avatanplus.com/files/resources/original/57b3fe6c4059a1569719d6e8.png',
    name: "Steve",
    message: 'Для чего нужен HOC React.memo? ',
    time: '22.00'
}

function HW1() {


    return (
        <div >
            <hr/>
            homeworks 1<br/>

            should work (должно работать)

            <Message
                avatar={messageDate.avatar}
                name={messageDate.name}
                message={messageDate.message}
                time={messageDate.time}

            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
