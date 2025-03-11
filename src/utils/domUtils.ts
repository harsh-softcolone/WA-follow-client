import { MOUNT_POINTS } from "@/constants/domConstants";

import { PRODUCTION_HOSTNAME } from "@/constants/domConstants";

export const isProduction = (): boolean => {
  return window.location.hostname === PRODUCTION_HOSTNAME;
};

export const getMountPoint = (): HTMLElement | null => {
  const elementId = isProduction()
    ? MOUNT_POINTS.PRODUCTION
    : MOUNT_POINTS.DEVELOPMENT;

  return document.getElementById(elementId);
};
