import { cn } from "./utils"

export const Divider = ({className} : {className?: string}) => {
    return (<div className={cn('divider-bar -translate-x-10 h-1 ml-10 mr-10 rounded-xs bg-white w-full', className)} />)
}