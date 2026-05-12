import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./TextLink.module.css";

interface TextLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
}

export function TextLink({ href, children, className, showArrow = true }: TextLinkProps) {
  const classes = [styles.textLink, className].filter(Boolean).join(" ");
  const isExternal = /^(https?:)?\/\//.test(href) || href.startsWith("mailto:");

  const content = (
    <>
      {children}
      {showArrow && <span aria-hidden="true"> →</span>}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
