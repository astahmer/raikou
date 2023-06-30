import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  PolymorphicFactory,
  RaikouColor,
  RaikouGradient,
  RaikouRadius,
  RaikouSize,
  useProps,
  createVarsResolver,
  getSize,
  getRadius,
  getThemeColor,
  useStyles,
} from '../../core';
import { css, cx } from '@raikou/styled-system/css'
import { styled } from '@raikou/styled-system/jsx'
import { badgeRoot, badgeLabel, badgeSection } from '@raikou/styled-system/recipes'
// import classes from './badge.module.css';

export interface BadgeProps extends BoxProps, StylesApiProps<BadgeFactory> {
  /** Controls `font-size`, `height` and horizontal `padding`, `'md'` by default */
  size?: RaikouSize | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `'xl'` by default */
  radius?: RaikouRadius | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
  color?: RaikouColor;

  /** Gradient configuration used when `variant="gradient"`, default value is `theme.defaultGradient` */
  gradient?: RaikouGradient;

  /** Content displayed on the left side of the badge label */
  leftSection?: React.ReactNode;

  /** Content displayed on the right side of the badge label */
  rightSection?: React.ReactNode;

  /** Determines whether Badge should take 100% of its parent width, `false` by default */
  fullWidth?: boolean;

  /** Main badge content */
  children?: React.ReactNode;
}

export type BadgeStylesNames = 'root' | 'section' | 'label';
export type BadgeVariant =
  | 'filled'
  | 'light'
  | 'outline'
  | 'dot'
  | 'transparent'
  | 'white'
  | 'default'
  | 'gradient';

export type BadgeCssVariables = {
  root:
    | '--badge-height'
    | '--badge-padding-x'
    | '--badge-fz'
    | '--badge-radius'
    | '--badge-bg'
    | '--badge-color'
    | '--badge-bd'
    | '--badge-dot-color';
};

export type BadgeFactory = PolymorphicFactory<{
  props: BadgeProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: BadgeStylesNames;
  vars: BadgeCssVariables;
  variant: BadgeVariant;
}>;

const defaultProps: Partial<BadgeProps> = {
  size: 'md',
  radius: 'xl',
  variant: 'filled',
};

const varsResolver = createVarsResolver<BadgeFactory>(
  (theme, { radius, color, gradient, variant, size }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant!,
    });

    return {
      root: {
        '--badge-height': getSize(size, 'badge-height'),
        '--badge-padding-x': getSize(size, 'badge-padding-x'),
        '--badge-fz': getSize(size, 'badge-fz'),
        '--badge-radius': getRadius(radius),
        '--badge-bg': colors.background,
        '--badge-color': colors.color,
        '--badge-bd': colors.border,
        '--badge-dot-color': variant === 'dot' ? getThemeColor(color, theme) : undefined,
      },
    };
  }
);

  const StyledElement = styled('badge', badgeRoot)
  
  export const Badge = polymorphicFactory<BadgeFactory>((_props, ref) => {
  const props = useProps(defaultProps, _props);
  const {
    // classNames,
    className,
    style,
    styles,
    // unstyled,
    vars,
    radius,
    color,
    gradient,
    leftSection,
    rightSection,
    children,
    variant,
    fullWidth,
    ...others
  } = props;

  const getStyles = useStyles<BadgeFactory>({
    name: 'Badge',
    props,
    // classes,
    className,
    style,
    // classNames,
    styles,
    // unstyled,
    vars,
    varsResolver,
  });

  const rootStyles = css(styles?.root)

  return (
    <StyledElement ref={ref} className={cx(rootStyles)} {...getStyles('root', { variant })} {...others}>
      {leftSection && (
        <span className={badgeSection()} data-position="left">
          {leftSection}
        </span>
      )}
      <span className={badgeLabel()}>{children}</span>
      {rightSection && (
        <span className={badgeSection()} data-position="right">
          {rightSection}
        </span>
      )}
    </StyledElement>
  );
})

Badge.displayName = '@raijou/core/Badge';
