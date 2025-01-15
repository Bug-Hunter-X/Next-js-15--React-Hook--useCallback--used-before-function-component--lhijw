```javascript
// pages/aboutSolution.js
import { useCallback } from 'react';

export default function About() {
  const memoizedCallback = useCallback(() => {
    console.log('This is a memoized callback');
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}
```