import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "outline" | "white" | "cyan";

interface ButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  showArrow?: boolean;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  outline: styles.outline,
  white: styles.white,
  cyan: styles.cyan
};

export function Button({
  href,
  variant = "primary",
  children,
  showArrow = true,
  className,
  ...rest
}: ButtonProps) {
  const classes = [styles.button, variantClass[variant], className]
    .filter(Boolean)
    .join(" ");

  const isExternal = /^(https?:)?\/\//.test(href) || href.startsWith("mailto:");

  const content = (
    <>
      {children}
      {showArrow && (
        <span aria-hidden="true" className={styles.arrow}>
          →
        </span>
      )}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
