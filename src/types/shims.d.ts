declare module 'react' {
  // minimal shim so the editor/typechecker stops complaining when node_modules aren't installed
  export type SetStateAction<S> = S | ((prevState: S) => S);
  export type Dispatch<A> = (value: A) => void;
  export function useState<S = any>(initialState?: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  export function useEffect(...args: any[]): any;
  export function useRef<T = any>(value?: T): { current: T };
  export function useContext<T = any>(context: any): T;
  export function createContext<T = any>(defaultValue?: T): any;
  export type ReactNode = any;
  export const Fragment: any;
  const _default: any;
  export default _default;
}

declare module 'react-native' {
  export const View: any;
  export const Text: any;
  export const StyleSheet: { create: (styles: any) => any };
  export const Image: any;
  export const ScrollView: any;
  export const TouchableOpacity: any;
  export const TextInput: any;
  export const FlatList: any;
  export const Alert: { alert: (title?: string, message?: string, buttons?: any[], options?: any) => void };
  const _default: any;
  export default _default;
}

declare const require: any;

declare module '*.png' { const value: any; export default value; }
declare module '*.jpg' { const value: any; export default value; }
declare module '*.jpeg' { const value: any; export default value; }
