import { useState } from 'react';

export default function useOnline() {
  const [isOnline, setIsOnline] = useState(false);

  window.addEventListener('online', function () {
    setIsOnline(true);
  });
  window.addEventListener('offline', function () {
    setIsOnline(false);
  });
  return isOnline;
}
