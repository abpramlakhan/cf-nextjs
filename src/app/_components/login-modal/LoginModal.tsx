"use client"
import { useGlobalContext } from '@/app/_lib/context';
import Modal from 'react-bootstrap/Modal';
import '../../styles/loginmodal.css'
import React, { useState } from 'react';
import { countryCodeExt } from '@/constants/application';
import Select from 'react-select';
import { loginTheUser } from '@/app/_services/login';
import { isValidEmail, isValidMobileNumber } from '@/app/_helper/helper';
import ErrorMsg from '../utils/ErrorMsg';

const LoginModal = () => {
    const { isLoginModalOpen } = useGlobalContext();
    const [loginBy, setloginBy] = useState<string>("byotp");
    const [phonenumber, setphonenumber] = useState<string>("")
    const [formInputData, setformInputData] = useState<{
        emailidphone: string;
        password: string;
    }>({
        emailidphone: '',
        password: ''
    });
    const [havePasswordTypeErrorMsg, sethavePasswordTypeErrorMsg] = useState<{
        emailidphone: string;
        password: string;
    }>({
        emailidphone: '',
        password: ''
    })


    const handleLoginVia = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setloginBy(value);
    }

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const errorMsg = {
            emailidphone: '',
            password: ''
        }
        setformInputData(prev => {
            return { ...prev, [name]: value }
        })

        if (name === "emailidphone") {

            if (!isValidMobileNumber || !isValidEmail) {
                errorMsg.emailidphone = 'Please enter valid Email ID or Profile ID or Phone No'
            } else {
                errorMsg.emailidphone = ''
            }

        }
        if (name === "password" && !value) {
            errorMsg.password = 'Please provide a password'
        }else{
            errorMsg.password = ''
        }

        sethavePasswordTypeErrorMsg(errorMsg)
    }

    const phoneNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setphonenumber(value)
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
                <form action={loginTheUser}>
                    <div className='d-flex'>
                        <div className='me-4'>
                            <input id='loginvaiotp'
                                value="byotp"
                                className='loginRation'
                                checked={loginBy === "byotp"}
                                onChange={handleLoginVia} hidden type='radio' name='loginVia' />
                            <label className='loginRationOption' htmlFor='loginvaiotp'>Login via OTP</label>
                            
                        </div>
                        <div>
                            <input id='ihaveapassowrd'
                                onChange={handleLoginVia}
                                className='loginRation'
                                checked={loginBy === "bypassword"}
                                value="bypassword" hidden type='radio' name='loginVia' />
                            <label className='loginRationOption' htmlFor='ihaveapassowrd'>I have a password</label>
                            
                        </div>
                    </div>

                    <div className='mt-4'>
                        {loginBy === "byotp" ?
                            <>
                                <div className='d-flex doubleGroupedInput'>
                                    <div>
                                        <Select
                                            className="phonenumberlist"
                                            classNamePrefix="select"
                                            getOptionValue={(option) => `${option.id}`}
                                            getOptionLabel={option => `+${option.label}`}
                                            // defaultValue={colourOptions[0]}
                                            // isDisabled={isDisabled}
                                            // isLoading={isLoading}
                                            isClearable={false}
                                            // isRtl={isRtl}
                                            isSearchable={true}
                                            name="color"
                                            options={
                                                countryCodeExt
                                            }
                                        />
                                    </div>
                                    <div>
                                        <input type='text'
                                            inputMode="numeric"
                                            id='phonenumber' className='form-control border-0 rounded-0 shadow-none' placeholder="Enter Mobile Number"
                                            name="phonenumber"
                                            onChange={phoneNumberHandler}
                                            value={phonenumber}
                                            aria-label='Enter Mobile Number'
                                        />
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <input type='text' className='underlineInput'
                                    name='emailidphone'
                                    aria-label='Enter Email/Profile ID/Phone'
                                    placeholder="Enter Email/Profile ID/Phone"
                                    onChange={inputChangeHandler}
                                    value={formInputData.emailidphone} />
                                    {havePasswordTypeErrorMsg?.emailidphone && <ErrorMsg msg={havePasswordTypeErrorMsg.emailidphone} />}

                                <input type='password'
                                    name='password'
                                    onChange={inputChangeHandler}
                                    value={formInputData.password}
                                    aria-label='enter password' className='underlineInput mt-2' placeholder="Enter Password" />
                                    {havePasswordTypeErrorMsg?.password && <ErrorMsg msg={havePasswordTypeErrorMsg.password} />}
                            </>
                        }
                    </div>

                    <div className='mt-4 text-center'>
                        <button className='btn loginNowBtn' type="submit">LOGIN NOW</button>
                    </div>
                </form>
            </Modal.Body>
            {/* <Modal.Footer>
                <p>Footer</p>
            </Modal.Footer> */}
        </Modal>
    )
}

export default LoginModal