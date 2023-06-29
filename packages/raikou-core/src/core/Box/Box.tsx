// import { styled } from '@raikou/styled-system/jsx'
import React, { forwardRef } from 'react';
import { createPolymorphicComponent } from '../factory';

export type Mod = Record<string, any> | string;
export type BoxMod = Mod | Mod[] | BoxMod[];

export interface BoxProps {
  /** Class added to root element, if applicable */
  className?: string;

  /** Inline style added to root component element, can subscribe to theme defined on RaikouProvider */
  style?: React.CSSProperties;
}

export interface BoxComponentProps extends BoxProps {
  /** Variant passed from parent component, sets `data-variant` */
  variant?: string;

  /** Size passed from parent component, sets `data-size` if value is not number like */
  size?: string | number;

  /** Element modifiers transformed into `data-` attributes, for example, `{ 'data-size': 'xl' }`, falsy values are removed */
  mod?: BoxMod;
}

interface BoxProps2 {
  [key: string]: any;
}

type CssProps = {
  [key: string]: string | number;
};

// function filterValidCssProps(props: BoxProps2): { styleProps: CssProps; rest: BoxProps2 } {
//   const validCssProps: CssProps = {};
//   const nonCssProps: BoxProps2 = {};

//   for (const prop in props) {
//     if (CSS.supports(prop, props[prop])) {
//       validCssProps[prop] = props[prop];
//     } else {
//       nonCssProps[prop] = props[prop];
//     }
//   }

//   return { styleProps: validCssProps, rest: nonCssProps };
// }

const _Box = forwardRef<HTMLDivElement, BoxComponentProps & { component: any; className: string }>(
  ({ component, style, className, variant, mod, size, ...others }, ref) => {
    // const {styleProps, rest} = filterValidCssProps(others)
    const Element = component || 'div';

    // const StyledElement = styled(Element, styleProps)

    // document.documentElement.setAttribute("data-raikou-color-scheme", "dark")

    return (
      <Element ref={ref} className={className} style={{...style}} {...others} />
    )
})

_Box.displayName = '@raikou/core/Box';

export const Box = createPolymorphicComponent<'div', BoxComponentProps>(_Box);
