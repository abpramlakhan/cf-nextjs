"use client"
import { useGlobalContext } from '@/app/_lib/context';
import Modal from 'react-bootstrap/Modal';
import '../../styles/loginmodal.css'

const LoginModal = () => {
    const {isLoginModalOpen} = useGlobalContext();
    const handleLoginVia = () =>{
        console.log("changed");
        
    }
    return (
        <Modal 
        show={isLoginModalOpen} 
        // onHide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex'>
                    <div className='me-4'>
                        <input id='loginvaiotp'
                        value="byotp"
                        className='loginRation'
                        onChange={handleLoginVia} hidden type='radio' name='loginVia' />
                        <label className='loginRationOption' htmlFor='loginvaiotp'>Login via OTP</label>
                    </div>
                    <div>
                        <input id='ihaveapassowrd'
                        onChange={handleLoginVia}
                        className='loginRation'
                        value="bypassword" hidden type='radio' name='loginVia' />
                        <label className='loginRationOption' htmlFor='ihaveapassowrd'>I have a password</label>
                    </div>
                </div>

                <div className='mt-4'>
                    <input type='text' className='underlineInput' placeholder="Enter Email/Profile ID/Phone" />
                    <input type='password' className='underlineInput mt-2' placeholder="Enter Password" />
                </div>

                <div className='mt-4 text-center'>
                    <button className='btn loginNowBtn'>LOGIN NOW</button>
                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <p>Footer</p>
            </Modal.Footer> */}
        </Modal>
    )
}

export default LoginModal