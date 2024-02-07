import React from "react";
import insta from '../../assets/photos/insta.png'
import google from '../../assets/photos/google.png'


const Reviews2 = () => {


    return (
        <>
            <div className="home-reviews2">

                <div className="CTA-wrapper">
                    <div className="review2-h2">See what else our customers are saying.</div>
                    <div className="google-insta-links">
                        <a target="_blank" href="https://www.google.com/search?q=lennon+window+cleaning+seattle+lynnwood&safe=images&hl=en&sxsrf=APwXEdfhRKzfsclL5Dt6KEBAqIKRhPsu3w%3A1687320980976&ei=lHmSZMSbO4uMur8Pud240A0&ved=0ahUKEwjEtcW9wNP_AhULhu4BHbkuDtoQ4dUDCBA&uact=5&oq=lennon+window+cleaning+seattle+lynnwood&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABMgUIIRCgAToICAAQogQQsAM6CwgAEIkFEKIEELADOgUIIRCrAkoECEEYAVCtA1jUE2CvFGgBcAB4AIABwwGIAbcKkgEDMC44mAEAoAEBwAEByAEE&sclient=gws-wiz-serp#lrd=0x68831600bba56705:0x41d13b74774dfa34,1,,,," className="social-circle"><img className='google-icon' alt="google icon" src={google} /></a>
                        <a target="_blank" href="https://www.instagram.com/lennonwindowcleaning/" className="social-circle"><img className='insta-icon' alt="instagram icon" src={insta} /></a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Reviews2