import { DateTime } from 'luxon';

export function arrayToString(array: string[], separator = ', '): string {
  return array.join(separator) + '.';
}

export function formatExperience(initialDate: string, finalDate?: string): string {
  finalDate = finalDate || new Date().toISOString();
  const startDate = DateTime.fromISO(initialDate);
  const endDate = DateTime.fromISO(finalDate);

  const diff = endDate.diff(startDate, ['years', 'months']);

  const years = Math.floor(diff.years);
  const months = Math.floor(diff.months);

  const yearsPart = years === 0 ? '' : `${years} year(s)`;
  const monthsPart = months === 0 ? '' : `${months} months(s)`;

  return `${yearsPart} ${monthsPart}`;
}

/**
 * Format date to 'MMM yyyy' considering the local time zone
 * @param dateString 'yyyy-MM-dd' format
 * @returns string
 */
export function formatDate(dateString?: string) {
  if (dateString === undefined) return 'Current';
  // Automatically uses viewer's timezone
  return DateTime.fromISO(dateString).toFormat('MMM yyyy');
}

/**
 * Format months number to years and months
 * @param months number
 * @returns string
 */
export function formatMonthsToYears(months: number) {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const parts = [];

  if (years > 0) {
    parts.push(`${years}yr${years > 1 ? 's' : ''}`);
  }

  if (remainingMonths > 0) {
    parts.push(`${remainingMonths}mo${remainingMonths > 1 ? 's' : ''}`);
  }

  return parts.join(' ');
}
