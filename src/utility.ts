import { SITE_URL_BASE } from "./consts";

export function relative_url(url: string): string {
  return `${SITE_URL_BASE}${url}`;
}
