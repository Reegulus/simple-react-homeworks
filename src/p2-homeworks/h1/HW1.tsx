import React from 'react';
import { Message } from './Message';



function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1<br/>

            should work (должно работать)

            <Message
                name={"Steve"}
                message={'Для чего нужен HOC React.memo?'}
                time={'22.00'}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
