import { DateTime } from 'luxon';

/**
 * Format duration between two dates into a human-readable string
 * @param startDate - The start date in ISO format
 * @param endDate - The end date in ISO format, or null for current date
 * @returns A formatted string representing the duration (e.g., "2 years 3 months")
 */
export function formatDuration(startDate: string, endDate: string | null): string {
  endDate = endDate || new Date().toISOString();
  const d1 = DateTime.fromISO(startDate);
  const d2 = DateTime.fromISO(endDate);

  const diff = d2.diff(d1, ['years', 'months']);

  const years = Math.floor(diff.years);
  const months = Math.floor(diff.months);

  const yearsPart = years === 0 ? '' : `${years} year${years > 1 ? 's' : ''}`;
  const monthsPart = months === 0 ? '' : `${months} month${months > 1 ? 's' : ''}`;

  const parts = [yearsPart, monthsPart].filter(part => part !== '');
  return parts.join(' ');
}

/**
 * Format date to 'MMM yyyy' considering the local time zone
 * @param dateString 'yyyy-MM-dd' format
 * @returns string
 */
export function formatDateFromISO(dateString?: string): string {
  if (dateString === undefined) return 'Current';
  // Automatically uses viewer's timezone
  return DateTime.fromISO(dateString).toFormat('MMM yyyy');
}

/**
 * Format URL for display by removing protocol and optional www prefix.
 * Keeps the canonical URL untouched for href usage.
 */
export function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '');
}
