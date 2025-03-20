import { Divider } from "./divider";
import { H2, H3, H4, H5 } from "./typography";
import { cn } from "./utils";

type DividerProps = {
    position?: "start" | "end";
    className?: string;
}

type SectionProps = {
    title?: string;
    subtitle?: string;
    className?: string;
    divider?: DividerProps;
    children?: React.ReactNode;
    outerClassName?: string;
}

export const Section = ( { 
    title, 
    subtitle,
    divider, 
    className,
    children,
    outerClassName
} : SectionProps ) => {
    return (
        <div className={cn("relative flex flex-col gap-20 w-auto min-[1024px]:w-[1024px]", outerClassName)}>
            <div className="gap-5 flex flex-col">
                {divider?.position === "start" && <Divider className={divider.className}/>}
                <div >
                    <H2 className="opacity-60">{title}</H2>
                    <H5>{subtitle}</H5>
                </div>
            </div>
            <div className={cn("flex items-center justify-center", className)}>{children}</div>
            {divider?.position === "end" && <Divider className={divider.className}/>}
        </div>
    )
}

type Section2Col = {
    className?: string;
    left? : React.ReactNode;
    right? : React.ReactNode;
}

export const Section2Col = ({className, left, right} : Section2Col) => {
    return(
        <div className={cn("flex align-center justify-center", className)}>
            {left}
            {right}
        </div>
    )
}

type Section3Col = {
    className?: string;
    left? : React.ReactNode;
    middle? : React.ReactNode;
    right? : React.ReactNode;
}

export const Section3Col = ({className, left, middle, right} : Section3Col) => {
    return(
        <div className={cn("flex align-center justify-center", className)}>
            <div>
                {left}
            </div>
            <div>
                {middle}
            </div>
            <div>
                {right}
            </div>
        </div>
    )
}

export const Footer = () => {
    return(
        <footer className='absolute w-screen bottom-0 px-10 flex items-center flex-row justify-end'>
          <span>Er du interreseret?</span>
          <button>kontakt mig</button>
        </footer>
    )
}

type MainProps = {
    className? : string;
    children? : React.ReactNode;
}
export const Main = ({children, className}: MainProps) => {
    return(
        <main className={cn('relative flex flex-col my-50 h-screen mx-[20px] items-center gap-10', className)}>
            {children}
        </main>
    )
}