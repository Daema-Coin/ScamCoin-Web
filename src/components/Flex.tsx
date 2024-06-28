import * as React from "react";
import { CSSProperties } from "styled-components";

type AsProps = {
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>;
};

type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, "as">;

type AsElementProps = AsProps & ElementProps;

export type FlexProps = {
  align?: CSSProperties["alignItems"];
  basis?: CSSProperties["flexBasis"];
  direction?: CSSProperties["flexDirection"];
  grow?: CSSProperties["flexGrow"];
  justify?: CSSProperties["justifyContent"];
  shrink?: CSSProperties["flexShrink"];
  wrap?: CSSProperties["flexWrap"];
  gap?: CSSProperties["gap"];
} & AsElementProps;

export const Flex = React.forwardRef<HTMLElement, FlexProps>(
  (
    {
      as = "div",
      align,
      basis,
      className: cln,
      direction,
      grow,
      justify,
      shrink,
      wrap,
      gap,
      children,
      style,
      ...rest
    },
    ref
  ) => {
    return React.createElement(
      as,
      {
        ...rest,
        ref,
        style: {
          display: "flex",
          alignItems: align,
          justifyContent: justify,
          flexDirection: direction,
          flexWrap: wrap,
          flexGrow: grow,
          flexShrink: shrink,
          flexBasis: basis,
          gap,
          ...style,
        },
      },
      children
    );
  }
);
