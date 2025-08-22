import { ROUTING } from "@/constants/routing"
import Image from "next/image"
import Link from "next/link"
import LoginModal from "../login-modal/LoginModal"

const Footer = () => {
    return (
        <>
        <footer className="nonloggedin-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h2 className="footerTitle">Quick Links</h2>
                    </div>
                    <div className="col-md-4">
                        
                        <ul className="d-flex flex-wrap footerLinkList list-unstyled">
                            <li>
                                <Link href={ROUTING.about}>
                                    About us
                                </Link>
                            </li>
                            <li>
                                |
                            </li>
                            <li>
                                <Link href={ROUTING.plan}>
                                    Plans
                                </Link>
                            </li>
                            <li>|</li>
                            <li>
                                <Link href={ROUTING.how_it_works}>How it work</Link>
                            </li>
                        </ul>

                        <ul className="d-flex mt-3 flex-wrap footerLinkList list-unstyled">
                            <li>
                                <Link href={ROUTING.locate_us}>
                                    Locate Us
                                </Link>
                            </li>
                            <li>
                                |
                            </li>
                            <li>
                                <Link href={ROUTING.terms_condition}>
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>|</li>
                            <li>
                                <Link href={ROUTING.blog}>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <p className="text-white">We are also available on</p>
                        <div className="d-flex flex-wrap">
                            <Link
                            className="pe-2" href={"https://play.google.com/store/apps/details?id=com.abp.abpweddings&referrer=utm_source%3Dwebsite%26utm_medium%3Dfooter"} target="_blank">
                                <Image
                                    src={"https://cdn.abpweddings.com/documents/aebd64315b7e58f6b7753bb485490fe5/1749119806215.webp"}
                                    width="134"
                                    height="41"
                                    alt="google play download"
                                    className="img-fluid" />
                            </Link>

                            <Link href={"https://play.google.com/store/apps/details?id=com.abp.abpweddings&referrer=utm_source%3Dwebsite%26utm_medium%3Dfooter"} target="_blank">
                                <Image
                                    src={"https://cdn.abpweddings.com/documents/1d063b051cbf6ee68651006cd532aad6/1749119801300.webp"}
                                    width="134"
                                    height="41"
                                    alt="app store download"
                                    className="img-fluid" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <LoginModal />
        </>
    )
}

export default Footer