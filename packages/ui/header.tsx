import { A, H1 } from "../ui/typography"
import { cn } from "../ui/utils"
import { CollapseableMenu, CollapseableMenuItem } from "../components/collapseableMenu"
import SoMeButton from "../components/SoMeButton"
import { Mail } from "lucide-react"

type HeaderProps = {
  children? : React.ReactNode
  className? : string
}
export const Header = ({children, className} : HeaderProps) => {
    return(
        <header className='relative flex flex-col gap-10 w-full top-10'>
            <SubHeader className="grid grid-cols-3 px-[20px] items-center justify-between md:grid-cols-3 max-md:items-start">
                {/* Left Section (Shows Logo on Mobile) */}
                <div className="flex items-center">
                    <A href="/" className="md:hidden block">
                        <H1>Forstå Alt</H1>
                    </A>
                    <div className="hidden md:flex space-x-4">
                        <SoMeButton />
                    </div>
                </div>

                {/* Center Section (Shows Logo and Navigation on Desktop) */}
                <div className="hidden md:flex flex-col items-center w-full px-[20px]">
                    <A href="/">
                        <H1>Forstå Alt</H1>
                    </A>
                    <div className="flex flex-row text-[15px] gap-4">
                        <A className="cursor-pointer hover:font-bold" href="/services">Services</A>
                        <A className="cursor-pointer hover:font-bold" href="/coaching">Coaching</A>
                        <A className="cursor-pointer hover:font-bold" href="/om-mig">Om mig</A>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex justify-end">
                    <A href="/om-mig">
                        <button className="hidden md:block">
                            <div className="flex flex-row gap-3 align-center justify-center">
                                <Mail />
                                Kontakt mig
                            </div>
                        </button>
                    </A>
                </div>

                {/* Collapsible Menu (Visible Only on Mobile) */}
                <div className="md:hidden flex justify-end w-full">
                    <CollapseableMenu>
                        <CollapseableMenuItem isFirst={true}>
                            <A className="cursor-pointer text-[30px] hover:font-bold" href="/services">Services</A>
                        </CollapseableMenuItem>
                        <CollapseableMenuItem>
                            <A className="cursor-pointer text-[30px] hover:font-bold" href="/coaching">Coaching</A>
                        </CollapseableMenuItem>
                        <CollapseableMenuItem>
                            <A className="cursor-pointer text-[30px] hover:font-bold" href="/om-mig">Om mig</A>
                        </CollapseableMenuItem>
                    </CollapseableMenu>
                </div>
            </SubHeader>


            <SubHeader className={cn("relative flex", className)}> {children} </SubHeader>

            
        </header>
    )
}

type SubHeaderProps = {
    children? : React.ReactNode
    className? : string
}
export const SubHeader = ({children, className} : SubHeaderProps) => {
    return(
    <div className={className}>
        {children}
    </div>
    )
}