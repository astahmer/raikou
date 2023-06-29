import { filterProps } from '../../utils';
// import { useRaikouTheme } from '../RaikouThemeProvider';

export function useProps<T extends Record<string, any>, U extends Partial<T> = {}>(
  defaultProps: U,
  props: T
): T & {
  [Key in Extract<keyof T, keyof U>]-?: U[Key] | NonNullable<T[Key]>;
} {
  // const theme = useRaikouTheme();
  // const contextPropsPayload = theme.components[component]?.defaultProps;
  // const contextProps =
  //   typeof contextPropsPayload === 'function' ? contextPropsPayload(theme) : contextPropsPayload;

  return { ...defaultProps, ...filterProps(props) };
}
