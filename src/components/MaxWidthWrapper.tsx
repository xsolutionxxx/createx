import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
    className,
    children,
}: { 
    className?: string
    children: ReactNode
}) => {
    return (
        <div
            className={cn(
                "mx-auto w-full h-full max-w-[1250px] px-2.5",
                className
            )}>
            {children}
        </div>
    )
};

export default MaxWidthWrapper;