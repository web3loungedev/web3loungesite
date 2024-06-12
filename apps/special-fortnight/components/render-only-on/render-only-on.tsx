import { PropsWithChildren, useSyncExternalStore } from 'react';
import { useEventCallback } from '../../hooks';

export type RenderOnlyOnProps = {
  device: 'mobile' | 'desktop';
};

function useIsTouchDevice() {
  const getIsTouchDeviceSnapshot = useEventCallback(
    () => 'ontouchstart' in document.documentElement
  );
  const subscribe = useEventCallback(() => {
    return () => void 0;
  });

  return useSyncExternalStore(subscribe, getIsTouchDeviceSnapshot);
}

export function RenderOnlyOn(props: PropsWithChildren<RenderOnlyOnProps>) {
  const isTouchDevice = useIsTouchDevice();

  if (
    (props.device === 'mobile' && isTouchDevice) ||
    (props.device === 'desktop' && !isTouchDevice)
  ) {
    return props.children;
  }

  return null;
}
