import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__links">
                        <p>Полезные ссылки</p>
                        <ul>
                            <li>
                                <span>Доставка</span>
                            </li>
                            <li>
                                <span>Оплата</span>
                            </li>
                            <li>
                                <span>Акции</span>
                            </li>
                            <li>
                                <span>Политика безопасности</span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__payment">
                        <p>Оплата</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                        <div className="footer__buttons">
                            <button>
                                <span>
                                    <img src="https://sun9-83.userapi.com/impg/by76IXYUDNm8jd-HJl7qYtaj6x7kCSiw7n46gA/-cqw3YnGxVI.jpg?size=90x60&quality=96&sign=c4f7e0601770cba46726986510c5e173&type=album" alt="alt" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="footer__contacts">
                        <p className='footer__contacts-title'>Контакты</p>
                        <ul>
                            <li>
                                <span>
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                </span>
                                <p>8 (812) 234-56-55</p>
                            </li>
                            <li>
                                <span>
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                </span>
                                <p>8 (812) 234-56-55</p>
                            </li>
                            <li>
                                <span>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <p>ojjo@ojjo.ru</p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__social">
                        <p className="footer__social-title">Социальные сети</p>
                        <p className="footer__paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque
                        </p>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}