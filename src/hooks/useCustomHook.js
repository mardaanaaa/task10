import { renderHook, act } from '@testing-library/react-hooks';
import useCustomHook from '../useCustomHook';

describe('useCustomHook', () => {
    test('should increment counter', () => {
        const { result } = renderHook(() => useCustomHook());

        act(() => {
            result.current.incrementCounter();
        });

        expect(result.current.counter).toBe(1);
    });

    test('should reset counter', () => {
        const { result } = renderHook(() => useCustomHook());

        act(() => {
            result.current.incrementCounter();
            result.current.resetCounter();
        });

        expect(result.current.counter).toBe(0);
    });
});
