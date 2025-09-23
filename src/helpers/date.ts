import { DateTime } from 'luxon';

/**
 * Calculate the number of months between two dates
 * @param startDate 'yyyy-MM-dd' format
 * @param endDate 'yyyy-MM-dd' format or null
 * @returns number
 */
export function calculateMonthsBetween(startDate: string, endDate: string | null): number {
  const start = DateTime.fromISO(startDate);
  const end = endDate ? DateTime.fromISO(endDate) : DateTime.now();

  const diff = end.diff(start, 'months');
  return Math.floor(diff.months);
}
