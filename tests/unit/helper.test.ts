import { afterEach, describe, expect, it, vi } from 'vitest';
import { elapsedTime, elapsedTimeString } from '@/helper/helper';

/** The first of a month, `month` counted from 1. */
const month = (year: number, month: number) =>
  new Date(Date.UTC(year, month - 1));

afterEach(() => {
  vi.useRealTimers();
});

describe('elapsedTime', () => {
  it('counts the first and the last month, as LinkedIn does', () => {
    expect(elapsedTime(month(2023, 6), month(2023, 6))).toEqual({
      years: 0,
      months: 1
    });
    expect(elapsedTime(month(2023, 6), month(2023, 8))).toEqual({
      years: 0,
      months: 3
    });
  });

  it('carries the months across the turn of a year', () => {
    expect(elapsedTime(month(2021, 8), month(2024, 6))).toEqual({
      years: 2,
      months: 11
    });
    expect(elapsedTime(month(2024, 7), month(2025, 5))).toEqual({
      years: 0,
      months: 11
    });
  });

  it('makes twelve months a year', () => {
    expect(elapsedTime(month(2024, 1), month(2024, 12))).toEqual({
      years: 1,
      months: 0
    });
    expect(elapsedTime(month(2023, 1), month(2024, 12))).toEqual({
      years: 2,
      months: 0
    });
  });

  it('runs a present role up to the current month', () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date(Date.UTC(2026, 9, 23)));

    expect(elapsedTime(month(2025, 6), 'Present')).toEqual({
      years: 1,
      months: 5
    });
  });
});

describe('elapsedTimeString', () => {
  it('names one year or month in the singular', () => {
    expect(elapsedTimeString(month(2025, 10), month(2026, 10))).toBe(
      '1 yr 1 mo'
    );
    expect(elapsedTimeString(month(2023, 6), month(2023, 6))).toBe('1 mo');
  });

  it('names more in the plural', () => {
    expect(elapsedTimeString(month(2021, 8), month(2024, 6))).toBe(
      '2 yrs 11 mos'
    );
  });

  it('leaves out a part that is zero, without stray spaces', () => {
    expect(elapsedTimeString(month(2024, 7), month(2025, 5))).toBe('11 mos');
    expect(elapsedTimeString(month(2023, 1), month(2024, 12))).toBe('2 yrs');
  });
});
