import { DateTime } from 'luxon';

export function arrayToString(array: string[], separator = ', '): string {
  return array.join(separator) + '.';
}

export function formatDuration(startDate: string, endDate: string | null): string {
  endDate = endDate || new Date().toISOString();
  const d1 = DateTime.fromISO(startDate);
  const d2 = DateTime.fromISO(endDate);

  const diff = d2.diff(d1, ['years', 'months']);

  const years = Math.floor(diff.years);
  const months = Math.floor(diff.months);

  const yearsPart = years === 0 ? '' : `${years} year(s)`;
  const monthsPart = months === 0 ? '' : `${months} months(s)`;

  return `${yearsPart} ${monthsPart}`;
}

/**
 * @deprecated use formatDuration instead
 */
export function formatExperience(date1: string, date2?: string): string {
  // FIXME: converting dateString to JSDate is a workaround, dates must be
  //        formatted with an standard string format in ./src/data/positions.ts
  //        i.e: ISO 8601 -> '2023-03-07T16:35:37.504Z'
  const d1 = new Date(date1);
  const d2 = date2 === undefined ? new Date() : new Date(date2);

  const startDate = DateTime.fromJSDate(d1);
  const endDate = DateTime.fromJSDate(d2);
  const diff = endDate.diff(startDate, ['years', 'months']);

  const years = Math.floor(diff.years);
  const months = Math.floor(diff.months);

  return `${years === 0 ? '' : `${years} year(s)`}  ${months === 0 ? '' : `${months} months(s)`
    }`;
}

export function formatDate(dateString?: string) {
  if (dateString === undefined) return 'Current';
  // FIXME: converting dateString to JSDate is a workaround, dates must be
  //        formatted with an standard string format in ./src/data/positions.ts
  //        i.e: ISO 8601 -> '2023-03-07T16:35:37.504Z'
  const date = new Date(dateString);
  return DateTime.fromJSDate(date).toFormat('MMM yyyy');
}
