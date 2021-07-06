import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

export const Social = () => {
    return(
        <div className="social">
            <div className="container">
                <div className="social__title">
                    <p>#ojjo_jewerly</p>
                </div>
                <div className="social__title2">
                    <p>Мы в социальных сетях</p>
                </div>
                <div className="social__content">
                    <div className="social__content-row">
                        <div className="social__video" style={{backgroundImage: 'url(https://sun9-62.userapi.com/impg/Tx_9Tu4QVJ-ohQ4WVTiYmWeEDy7s_AG6MCT9Ig/_arhuB8uhBQ.jpg?size=1110x600&quality=96&sign=a058c8f0b25e52eb6d5a6092894cf296&type=album)'}}>
                            <FontAwesomeIcon icon={faPlayCircle} color='#fff' />
                        </div>
                        <img src="https://sun9-70.userapi.com/impg/HKALxic1-0y7mCjtokuE1-SFqe1nkpgxWqqHCA/hHj629X_60s.jpg?size=556x600&quality=96&sign=9de089ee76dfe5e341e12774e59ce3be&type=album" alt="alt" className='social__photo' />
                        <img src="https://sun9-35.userapi.com/impg/1ooF6VOtxUewgQfsW4ZCmE_TP6HPDGmsTMVKTg/nmX7hPAX5ws.jpg?size=554x600&quality=96&sign=71e5d8c35ac3651b5c48105b2b2872b4&type=album" alt="alt" className='social__photo' />
                    </div>
                    <div className="social__content-row">
                        <img src="https://sun9-63.userapi.com/impg/fiTOHGhGB37mWBQb9Xp3xDSBFCtuDJoK3T3caA/1VpjYL1nXsE.jpg?size=556x600&quality=96&sign=1a18fa2977b4b8fadd6ad06c173e2a72&type=album" alt="alt" className="social__photo" />
                        <img src="https://sun9-22.userapi.com/impg/VyKOGX25eImPUwnj4z80ruz9Ru0eQ5JVEBKMXg/GzlhByg1zHw.jpg?size=554x600&quality=96&sign=e2805d89a002b691f48de64e4dc2482c&type=album" alt="alt" className="social__photo" />
                        <div className="social__video" style={{backgroundImage: 'url(https://sun9-3.userapi.com/impg/HwhDpDY4_OMKUUNZ_BAtS4i6NsT50c8Tn9Gqow/Z0j93hMp5Ro.jpg?size=1110x600&quality=96&sign=2296fe6fe294cc0d1f08b789a96f6f5c&type=album)'}}>
                            <FontAwesomeIcon icon={faPlayCircle} color='#fff'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}