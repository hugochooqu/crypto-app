import {AiFillCloseCircle} from 'react-icons/ai'
import pics from '../../assets/Untitled.png'
import Modal from "../UI/modal"

import classes from './download.module.css'

const Download = (props) => {
    return(
        <Modal onClose={props.onClose}>
            <div>
                <AiFillCloseCircle onClick={props.onClose} size='20px' style={{position:"relative", left:"95%"}}/>
            </div>
            <div className={classes.download}>
                <h1>Scan the code to download to your android and ios devices</h1>
                <img src={pics} alt='qr-code'  />
            </div>
            
        </Modal>
    )
}

export default Download;