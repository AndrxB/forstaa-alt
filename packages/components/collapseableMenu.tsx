import React, { useEffect, useState } from "react";
import { cn } from "../ui/utils";
import Image from 'next/image'
import bars from '@/packages/assets/bars-staggered.png'
import { Divider } from "../ui/divider";
import { A } from "../ui/typography";

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
        <div className={cn("flex z-999 mx-[20px] -top-0.5 right-0 flex-row-reverse", className)}>
            <Image 
                src={bars.src}
                alt="bars"
                width={40}
                height={40}
                className={cn("z-1000 cursor-pointer")}
                onClick={() => setVisibility(!visible)}
            />
    
            {visible && 
                <div className="absolute items-start justify-start p-[20px] w-full h-screen flex flex-col gap-5 bg-slate-800 top-0 left-0 z-50 -translate-y-9 translate-x-5">
                    <div>
                        <A className="text-[50px] cursor-pointer hover:font-bold" href="/">{title}</A>
                        <Divider className="-translate-x-10 w-5/7"/>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full gap-10 mt-20">
                        {children}
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
            { isFirst && <Divider className="w-1/2"/> }
            {children}
            <Divider className="w-1/2"/>
        </div>
    )
}