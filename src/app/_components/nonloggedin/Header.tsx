import Image from "next/image"
import Link from "next/link"
import LoginHeaderButton from "../utils/LoginButton"

const Header = () => {
    return (
        <header className='header-nonLoggedIn w-100'>
            <div className='toppanel w-100'>
                <div className='container d-flex justify-content-between align-items-center position-relative'>
                    <div>

                    </div>

                    <div className='d-flex'>
                        <div className='langSelector d-flex align-items-center me-3'>
                            <Image
                                src={'https://cdn.abpweddings.com/documents/6187e2536868129cb13ddd18836ec776/1749119820639.webp'}
                                height={25}
                                width={25}
                                alt='' />

                            <span className='ms-2'>English</span>
                        </div>

                        <button type='button' className='btn btn-outline-light text-white headerContactBtn'>Contact Us</button>
                        <LoginHeaderButton 
                        className="btn btn-danger text-white ms-3" />
                    </div>

                    <div className='logo bg-white position-absolute top-0 start-0 p-3'>
                        <Link href={'/'}>
                            <Image
                                src={'https://cdn.abpweddings.com/documents/8d8a8a59f510ccc87cb314fc6acf64b0/1749119825787.webp'}
                                width={234}
                                height={130}
                                alt='ABP Weddings Logo | Matrimony Site For Bengali and Marathi People' />
                        </Link>
                    </div>
                </div>




            </div>

        </header>
    )
}

export default Header