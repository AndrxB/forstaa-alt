import { A, H1 } from "../ui/typography"
import { cn } from "../ui/utils"
import { CollapseableMenu, CollapseableMenuItem } from "../components/collapseableMenu"

type HeaderProps = {
  children? : React.ReactNode
  className? : string
}
export const Header = ({children, className} : HeaderProps) => {
    return(
        <header className='relative flex flex-col gap-10 w-full top-15'>
            <SubHeader className='relative flex flex-row gap-10 justify-between px-[20px]'>
                <div className='relative flex flex-row max-[768px]:collapse'>
                    <div>link</div>
                    <div>link</div>
                </div>
                <div className='text-[50px] z-999 w-full items-center absolute left-1/2 -translate-y-10 -translate-x-1/2 flex flex-col max-[768px]:items-start px-[20px]'>
                    <H1 href="/">Forstå Alt</H1> 
                    <div className='flex flex-row text-[15px] w-1/2 justify-center gap-4 text-center max-[768px]:collapse'>
                        <A className='cursor-pointer hover:font-bold' href='/services'>Services</A>
                        <A className='cursor-pointer hover:font-bold' href='/coaching'>Coaching</A>
                        <A className='cursor-pointer hover:font-bold' href='/om-mig'>Om mig</A>
                    </div>
                </div>

                

                <button className="z-1000 max-[768px]:collapse" onClick={() => console.error("not implemented")}>Kontakt mig</button>
            </SubHeader>
            <SubHeader className={cn("relative flex", className)}> {children} </SubHeader>

            <CollapseableMenu className="absolute min-[768px]:collapse -translate-y-5.5 w-full">
                <CollapseableMenuItem isFirst={true}>
                    <A className='cursor-pointer hover:font-bold' href='/services'>Services</A>
                </CollapseableMenuItem>
                <CollapseableMenuItem>
                    <A className='cursor-pointer hover:font-bold' href='/coaching'>Coaching</A>
                </CollapseableMenuItem>
                <CollapseableMenuItem>
                    <A className='cursor-pointer hover:font-bold' href='/om-mig'>Om mig</A>
                </CollapseableMenuItem>
            </CollapseableMenu>
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