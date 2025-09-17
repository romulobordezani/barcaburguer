// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock web components @assemble-lib
vi.mock('@assemble-lib/theme-provider', () => ({
  themeContext: {}, // or a mock function/context if needed
}));
vi.mock('@assemble-lib/theme-pluto', () => ({}));

if (!AbortSignal.timeout) {
  AbortSignal.timeout = ms => {
    const controller = new AbortController();
    setTimeout(() => controller.abort(new DOMException('TimeoutError')), ms);
    return controller.signal;
  };
}

if (!AbortSignal.any) {
  AbortSignal.any = vi.fn();
}
