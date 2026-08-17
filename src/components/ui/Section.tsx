

import {
  forwardRef,
  ReactNode,
} from "react";
import clsx from "clsx";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

const Section = forwardRef<HTMLElement, SectionProps>(
  function Section(
    {
      id,
      children,
      className,
    },
    ref
  ) {
    return (
      <section
        ref={ref}
        id={id}
        className={clsx(
          "py-24",
          className
        )}
      >
        {children}
      </section>
    );
  }
);

export default Section;