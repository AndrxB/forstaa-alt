import React, { useEffect, useState } from "react";
import { cn } from "../ui/utils";
import { Divider } from "../ui/divider";
import { A, H1 } from "../ui/typography";
import { AlignJustify, ArrowRight, CornerDownRight } from "lucide-react";
import SoMeButton from "./SoMeButton";

type CollapseableMenuProps = {
    title?: string;
    children?: React.ReactNode
    className?: string
}
export const CollapseableMenu = ({
    title = "Forstå Alt",
    children,
    className
}: CollapseableMenuProps) => {
    const [visible, setVisibility] = useState(false)

    useEffect(() => {
    document.body.classList.toggle('overflow-hidden', visible);
  }, [visible]);

    return(
        <div className={cn("flex z-999 mx-[20px] flex-row-reverse", className)}>
            <AlignJustify 
                size={50}
                className={cn("z-1000 cursor-pointer")}
                onClick={() => setVisibility(!visible)}
            />
    
            {visible && 
                <div className="absolute items-start justify-start p-[20px] w-full h-screen flex flex-col gap-5 top-0 left-0 z-50 -translate-y-8" id="primary">
                    <div>
                        <A className="text-[50px] cursor-pointer hover:font-bold" href="/">
                            <H1>
                                {title}
                            </H1>                        
                        </A>
                        <Divider className="-translate-x-10 w-5/7"/>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full gap-10 mt-20">
                        {children}
                    </div>
                    <div className="flex flex-row gap-3 absolute bottom-[20px] right-[20px]">
                        <SoMeButton size={40}/>
                    </div>
                </div>
            }
        </div>
    )
}

type CollapseableMenuItemProps = {
    children?: React.ReactNode
    isFirst?: boolean
    gap?: number
    className?: string
}
export const CollapseableMenuItem = ({
    isFirst = false,
    gap = 10,
    children,
    className
}: CollapseableMenuItemProps) => {
    return(
        <div className={cn("flex flex-col w-full items-center", cn(className, `gap-${gap}`))}>
            { isFirst ? <Divider className="w-1/2 translate-x-0.5"/> : null }
            <div className="flex flex-row items-center gap-5">
                <CornerDownRight />
                {children}
            </div>
            <Divider className="w-1/2 translate-x-0.5"/>
        </div>
    )
}