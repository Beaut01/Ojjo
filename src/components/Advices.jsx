import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay} from '@fortawesome/free-solid-svg-icons'

export const Advices = () =>{
    return(
        <div className="advices">
            <div className="advices__title">
                <p>Полезные советы и персональные предложения</p>
            </div>
            <div className="advices__title2">
                <p>Эксклюзивная рассылка</p>
            </div>
            <div className="advices__contact">
                <ul>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faPlay} color='#fff' />
                        </span>
                        <p>Личный менеджер</p>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faPlay} color='#fff' />
                        </span>
                        <p>Доставка и оформление</p>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faPlay} color='#fff' />
                        </span>
                        <p>Индивидуальный дизайн</p>
                    </li>
                </ul>
                <div className="advices__input">
                    
                </div>
            </div>
        </div>
    )
}