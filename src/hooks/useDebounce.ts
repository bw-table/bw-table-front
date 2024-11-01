import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const debouncedHandler = debounce(() => {
      setDebouncedValue(value);
    }, delay);

    debouncedHandler();

    return () => {
      debouncedHandler.cancel();
    };
  }, [value, delay]);

  return debouncedValue;
};
