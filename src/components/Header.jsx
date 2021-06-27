import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faHeart } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
    return(
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__nav">
                        <div className="header__links">
                            <ul>
                                <li>Контрагентам</li>
                                <li>Дизайнерам</li>
                                <li>Вакансии</li>
                            </ul>
                        </div>
                        <div className="header__logo">
                            <p>OJJO</p>
                        </div>
                        <div className="header__icons">
                            <div className="header__search">
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </li>
                                    <li>Поиск</li>
                                </ul>
                            </div>
                            <div className="header__login">
                                <ul>
                                    <li>Вход/Регистрация</li>
                                </ul>
                            </div>
                            <div className="header__like">
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faUser} />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header__title">
                        <p>Долго, Дорого, Богато</p>
                    </div>
                    <div className="header__action">
                        <button className='button button__header' >
                            <span>Каталог изделий</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="header__separator">

            </div>
            <div className="container">
                <div className="header__rectangle">
                    <div className="header__rectangle-logo">
                        <p>Logotype</p>
                    </div>
                    <div className="header__rectangle-logo">
                        <p>Logotype</p>
                    </div>
                    <div className="header__rectangle-logo">
                        <p>Logotype</p>
                    </div>
                    <div className="header__rectangle-logo">
                        <p>Logotype</p>
                    </div>
                    <div className="header__rectangle-logo">
                        <p>Logotype</p>
                    </div>
                    <div className="header__rectangle-logo">
                        <p>Logotype</p>
                    </div>
                </div>
            </div>
        </div>
    )
}