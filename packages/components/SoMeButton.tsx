import Image from 'next/image'


export default function SoMeButton({ constraints } : { constraints?: string }) {

    const SoMes = {
        "Instagram" : {
            "SocialMedia" : "Instagram",
            "Link" : "",
            "src" : '/instagram.png'
        },
        "LinkedIn" : {
            "SocialMedia" : "LinkedIn",
            "Link" : "",
            "src" : '/linkedin.png'
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
                        src={value.src} 
                        alt={value.SocialMedia} 
                        width={20}
                        height={20}
                    />
                </a>
            ))}
                
        </>
    )
}