import './styles/nonloggedin.css';
import Header from './_components/nonloggedin/Header';
import Footer from './_components/nonloggedin/Footer';
import Image from 'next/image';
import RegisterationForm from './_components/registerion-form/RegisterationForm';
export default function Home() {
    return (
        <>
            <Header />
            <main>

                <section className='container-fluid heroSection'>
                    <div className='container d-flex justify-content-end'>
                        <div className='registerationBox bg-white'>
                            <h1 className='text-center heading'>Create your profile for <strong>FREE</strong></h1>
                            <div className='mt-4'>
                                <RegisterationForm />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='container pt-5 pb-5 mb-5 mt-4'>
                        <h2 className='grayHeading text-center'>Your trusted matchmaker</h2>
                        <div className='text-center'>
                            <Image
                            src="/images/heading-deco.png"
                            alt=''
                            width={258}
                            height={18} />
                        </div>

                        <div className='row mt-5'>
                            <div className='col-md-3'>
                                <div className='matchMakercard'>
                                    <div>
                                        <Image
                                            src="/images/only-real-profile.webp"
                                            alt='real profile'
                                            width={60}
                                            height={54}
                                            className='img-fluid'
                                        />
                                    </div>
                                    <div className='cardBody'>
                                        <h3 className='title'>Only Real Profiles</h3>
                                        <p className='mb-0'>We allow only ID proof matched profiles to connect with you</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className='matchMakercard'>
                                    <div>
                                        <Image
                                            src="/images/relevantmatches.webp"
                                            alt='relevant matches'
                                            width={53}
                                            height={54}
                                            className='img-fluid'
                                        />
                                    </div>
                                    <div className='cardBody'>
                                        <h3 className='title'>Relevant Matches</h3>
                                        <p className='mb-0'>We handpick the right matches as per what you are looking for</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='matchMakercard'>
                                    <div>
                                        <Image
                                            src="/images/abpsecurity.webp"
                                            alt='security'
                                            width={54}
                                            height={54}
                                            className='img-fluid'
                                        />
                                    </div>
                                    <div className='cardBody'>
                                        <h3 className='title'>ABPWeddings Security</h3>
                                        <p className='mb-0'>We promise to keep your profile data safe</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='matchMakercard'>
                                    <div>
                                        <Image
                                            src="/images/100year.webp"
                                            alt='100 year of abp'
                                            width={54}
                                            height={54}
                                            className='img-fluid'
                                        />
                                    </div>
                                    <div className='cardBody'>
                                        <h3 className='title'>100 Years of ABP</h3>
                                        <p className='mb-0'>We are backed by the enviable legacy of the ABP group</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}
