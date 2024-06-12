import { useCallback, useLayoutEffect, useRef } from 'react';

type AnyFunction = (...args: any) => any;

export function useEventCallback<T extends AnyFunction>(callback?: T) {
  const ref = useRef<AnyFunction | undefined>(callback);

  useLayoutEffect(() => (ref.current = callback));

  return useCallback<AnyFunction>((...args) => ref.current?.(...args), []) as T;
}
