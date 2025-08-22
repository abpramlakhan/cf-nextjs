import Image from "next/image";

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Image
            src={'/images/about.webp'}
            alt="about abpweddings"
            width={510}
            height={880}
            className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>About us</h2>
          <h3>Where Real People and Real Relationships Exist</h3>
          <p>
            <strong>
              Decades of matchmaking expertise, exemplified by &apos; Patrapatri &apos; (matrimonial classifieds) got reinvented online in the form of ABPweddings.com.As society evolved,the decision making pertaining to marriage became collaborative.The joy of customised search, shortlisting and sharing with all relevant members of family and extended family became convenient with the click of a button.But, the apprehension of fake profiles and false claims remained.ABPweddings.com attempts to remove this concern of yours as the ethos of this matrimonial site from ABP Group stands for TRUST!
            </strong>
          </p>

          <p>ABPWeddings.com makes submission of a photo ID mandatory for any user who would like to connect with other users registered on the site.The documents submitted are moderated manually to match the information provided.Hence the profiles here are trustworthy unlike other matrimonial sites.One can be certain that one is communicating with a genuine person and not a fictitious profile!ABPWeddings has also attempted to create a credible profile base by introducing the concept of Trust Score.A user gets the Trust Score by successful submission of documents such as photo ID, address proof, educational qualification certificates, employment/income proof, divorce documents (if any) and other relevant documents.</p>

          <p>Registration, here, is absolutely free.One has to pay only when one is required to contact others.Registration can be done online as well as offline.The offline channels being a dedicated callcentre, exclusive stores and authorised classifieds agents of ABP.</p>

          <p>We uphold your trust in the highest esteem and our entire effort revolves around valuing that!After all, we believe in Real people. Real Relationships.</p>

          <div>
            <button className="alert alert-danger">Register</button>
          </div>
        </div>
      </div>

    </div>
  )
}
