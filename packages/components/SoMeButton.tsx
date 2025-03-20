import Image from 'next/image'
import linkedin from '@/packages/assets/linkedin.svg'
import instagram from '@/packages/assets/instagram.svg'
import facebook from '@/packages/assets/facebook.svg'


export default function SoMeButton({ constraints, size = 25 } : { constraints?: string, size?: number }) {
    const SoMes = {
        "Instagram" : {
            "SocialMedia" : "Instagram",
            "Link" : "",
            "Icon" : instagram
        },
        "Facebook" : {
            "SocialMedia" : "Facebook",
            "Link" : "",
            "Icon" : facebook
        },
        "LinkedIn" : {
            "SocialMedia" : "LinkedIn",
            "Link" : "",
            "Icon" : linkedin
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
                    className={constraints}
                >
                    <Image 
                        src={value.Icon} 
                        alt={value.SocialMedia} 
                        width={size} 
                        height={size} 
                    />
                </a>
            ))}
                
        </>
    )
}