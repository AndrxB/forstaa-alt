import Image from 'next/image'
import instagram from '@/packages/assets/instagram.png'
import linkedin from '@/packages/assets/linkedin.png'

export default function SoMeButton({ constraints } : { constraints?: string }) {
    const imageSize = 30
    const SoMes = {
        "Instagram" : {
            "SocialMedia" : "Instagram",
            "Link" : "",
            "src" : instagram
        },
        "LinkedIn" : {
            "SocialMedia" : "LinkedIn",
            "Link" : "",
            "src" : linkedin
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
                    <Image 
                        className={constraints} 
                        src={value.src.src} 
                        alt={value.SocialMedia} 
                        width={imageSize}
                        height={imageSize}
                    />
                </a>
            ))}
                
        </>
    )
}