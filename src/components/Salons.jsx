import React from 'react'

export const Salons = () => {
    return(
        <div className="salons">
            <div className="container">
                <div className="salons__title">
                    <p>Не знаете, что выбрать?</p>
                </div>
                <div className="salons__title2">
                    <p>Посетите наши салоны в Москве!</p>
                </div>
                <div className="salons__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deserunt natus inventore nihil asperiores ducimus, eveniet doloribus, soluta magnam aspernatur excepturi ullam libero est quidem! Laboriosam voluptatum suscipit dignissimos vitae.</p>
                </div>
                <div className="salons__button">
                    <button className='button button__salons'>
                        <span>Наши салоны</span>
                    </button>
                </div>
            </div>
        </div>
    )
}