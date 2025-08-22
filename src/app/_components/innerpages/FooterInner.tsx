import { ROUTING } from "@/constants/routing"
import Link from "next/link"

export const FooterInner = () => {
  return (
    <footer className="container-fluid footerinner">
      <div className="container">
        <ul className="list-unstyled d-flex justify-content-center mainLink">
          <li>
            <Link href={ROUTING.about}>About us</Link>
          </li>
          <li>
            <Link href={ROUTING.happy_stories}>Happy Stories</Link>
          </li>
          <li>
            <Link href={ROUTING.plan}>Plans</Link>
          </li>
          <li>
            <Link href={ROUTING.locate_us}>Locate Us</Link>
          </li>
          <li>
            <Link href={ROUTING.privacy_policy}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={ROUTING.terms_condition}>Terms & Conditions</Link>
          </li>
          <li>
            <Link href={ROUTING.blog}>Blog</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}