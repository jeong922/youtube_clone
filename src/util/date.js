import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);

export function formatAgo(date, lang = 'en_US') {
  return format(date, lang);
}

export const formatter = new Intl.NumberFormat('ko', { notation: 'compact' });

export function replaceString(str) {
  if (str == null) {
    return '';
  }
  return str
    .replaceAll(/&amp;/g, '&')
    .replaceAll(/&lt;/g, '<')
    .replaceAll(/&gt;/g, '>')
    .replaceAll(/&quot;/g, '"')
    .replaceAll(/&#039;/g, "'")
    .replaceAll(/&#39;/g, "'");
}
