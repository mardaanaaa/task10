import { renderHook, act } from '@testing-library/react-hooks';
import useCustomHook from './useCustomHook';

test('should return initial value and update it', () => {
    const { result } = renderHook(() => useCustomHook());

    expect(result.current.value).toBe(0);

    act(() => {
        result.current.increment();
    });

    expect(result.current.value).toBe(1);
});
