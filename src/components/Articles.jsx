import React from 'react'

export const Articles = () => {
    return(
        <div className="articles">
            <div className="container">
                <div className="articles__title">
                    <p>Полезные статьи</p>
                </div>
                <div className="articles__title2">
                    <p>Лучшие советы по подбору дорогих подарков</p>
                </div>
                <div className="articles__cards">
                    <div className="cardA" style={{backgroundImage: 'url(https://sun9-50.userapi.com/impg/Je17_4Qg331L7VIFBOfel74Z2FplJcSv4eoLaw/DVTeYB_yLeo.jpg?size=700x740&quality=96&sign=983f95124c9f9ac94be88b5ab2b47bff&type=album)'}}>
                        <p>Как выбрать часы для своей будущей жены</p>
                    </div>
                    <div className="cardA" style={{backgroundImage: 'url(https://sun9-50.userapi.com/impg/Je17_4Qg331L7VIFBOfel74Z2FplJcSv4eoLaw/DVTeYB_yLeo.jpg?size=700x740&quality=96&sign=983f95124c9f9ac94be88b5ab2b47bff&type=album)'}}>
                        <p>Как выбрать часы для своей будущей жены</p>
                    </div>
                    <div className="cardA" style={{backgroundImage: 'url(https://sun9-50.userapi.com/impg/Je17_4Qg331L7VIFBOfel74Z2FplJcSv4eoLaw/DVTeYB_yLeo.jpg?size=700x740&quality=96&sign=983f95124c9f9ac94be88b5ab2b47bff&type=album)'}}>
                        <p>Как выбрать часы для своей будущей жены</p>
                    </div>
                </div>
                <div className="articles__button">
                    <button className='button button__articles'>
                        <span>Читать наш блог</span>
                    </button>
                </div>
            </div>
        </div>
    )
}