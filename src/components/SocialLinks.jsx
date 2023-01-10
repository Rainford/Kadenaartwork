import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faDiscord, faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons'

function SocialLinks(){
    return(
        
        <ul className="social-links d-flex align-items-center ms-xl-5 ms-lg-4">
            <li><a href="/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href="https://discord.com/invite/7KKJSKCWSn" target="_blank"><FontAwesomeIcon icon={faDiscord} /></a></li>
            <li><a href="/"><FontAwesomeIcon icon={faTelegramPlane} /></a></li>
            <li><a href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
            
        </ul>
    )
}
export default SocialLinks
