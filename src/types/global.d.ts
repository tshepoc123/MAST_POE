// Allow importing image assets without TS errors
declare module '*.png' {
  const value: any;
  export default value;
}
