import { cn } from "@/packages/ui/utils";
import React from "react";

type HeadingProps = React.HTMLProps<HTMLHeadingElement> & {
  children?: React.ReactNode;
  className?: string;
  inverted?: boolean;
  variant?: "primary" | "secondary" | "muted";
};

export const H1 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, inverted, variant, ...props }, ref) => {
    return (
      <h1
        className={cn(
          "text-4xl lg:text-5xl font-extrabold text-header tracking-[1.2px] lg:leading-[45pt] leading-[41.6pt]",
          className && className,
          variant === "primary" && "text-primary"
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h1>
    );
  }
);

export const H2 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, inverted, variant, ...props }, ref) => {
    return (
      <h2
        className={cn(
          "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-header",
          className && className,
          variant === "primary" && "text-primary"
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h2>
    );
  }
);

export const H3 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, inverted, variant, ...props }, ref) => {
    return (
      <h3
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight text-header",
          variant === "primary" && "text-primary",
          className && className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h3>
    );
  }
);

export const H4 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, inverted, variant, ...props }, ref) => {
    return (
      <h4
        className={cn(
          "scroll-m-20 text-xl font-semibold tracking-wide text-header",
          className && className,
          variant === "primary" && "text-primary dark:text-primary"
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h4>
    );
  }
);
export const H5 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, inverted, variant, ...props }, ref) => {
    return (
      <h5
        className={cn(
          "scroll-m-20 text-lg font-medium tracking-wider text-header",
          className && className,
          variant === "primary" && "text-primary dark:text-primary"
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h5>
    );
  }
);
export const H6 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, inverted, variant, ...props }, ref) => {
    return (
      <h6
        className={cn(
          "scroll-m-20 text-base font-normal tracking-widest text-header",
          className && className,
          variant === "primary" && "text-primary dark:text-primary"
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h6>
    );
  }
);

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  className?: string;
  inverted?: boolean;
  variant?: "primary" | "secondary" | "muted";
}

export const P = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, className, inverted, variant, ...props }, ref) => {
    return (
      <p
        className={cn(
          "font-light text-paragraph leading-loose tracking-wider text-base dark:text-white",
          className && className,
          variant === "primary" && "text-primary dark:text-primary"
        )}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    );
  }
);

export const A = React.forwardRef<
  HTMLAnchorElement,
  React.HTMLProps<HTMLAnchorElement>
>(({ children, className, ...props }, ref) => {
  return (
    <a className={cn("text-primary", className)} ref={ref} {...props}>
      {children}
    </a>
  );
});

export const Strong = React.forwardRef<
  HTMLSpanElement,
  React.HTMLProps<HTMLSpanElement>
>(({ children, className, ...props }, ref) => {
  return (
    <strong className={cn("dark:text-white", className)} ref={ref} {...props}>
      {children}
    </strong>
  );
});

export const Em = React.forwardRef<
  HTMLSpanElement,
  React.HTMLProps<HTMLSpanElement>
>(({ children, className, ...props }, ref) => {
  return (
    <em className={cn("dark:text-white", className)} ref={ref} {...props}>
      {children}
    </em>
  );
});

export const Li = React.forwardRef<
  HTMLLIElement,
  React.HTMLProps<HTMLLIElement>
>(({ children, className, ...props }, ref) => {
  return (
    <li
      className={cn(
        "font-light text-paragraph leading-loose tracking-wider",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </li>
  );
});
