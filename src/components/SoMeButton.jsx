import Instagram from '../assets/instagram.png'
import LinkedIn from '../assets/linkedin.png'


export default function SoMeButton({ constraints, src, alt }) {

    const SoMes = {
        "Instagram" : {
            "SocialMedia" : "Instagram",
            "Link" : "",
            "src" : Instagram
        },
        "LinkedIn" : {
            "SocialMedia" : "LinkedIn",
            "Link" : "",
            "src" : LinkedIn
        }
    }

    return(
        <>
            {Object.entries(SoMes).map(([key, value]) => (
                <a 
                    key={key} 
                    href={value.Link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img 
                        className={constraints} 
                        src={value.src} 
                        alt={value.SocialMedia} 
                        id="SoMe-button"
                    />
                </a>
            ))}
                
        </>
    )
}