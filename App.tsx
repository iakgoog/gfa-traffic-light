import React, { useEffect, useRef, useState } from 'react';

import { TrafficLight } from './components/TrafficLight';

const LIGHTS = [
  {
    interval: 4000,
    display: '🔴'
  },
  {
    interval: 500,
    display: '🟡'
  },
  {
    interval: 3000,
    display: '🟢'
  }
];

export const App = () => {
  const [lightIndex, setLightIndex] = useState(0);
  const timeoutId = useRef<number | null>(null);

  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      const newIndex = lightIndex < 2
        ? lightIndex + 1
        : 0;
      setLightIndex(newIndex);
      console.log(`:: newIndex`, newIndex);
    }, LIGHTS[lightIndex].interval);

    return () => {
      timeoutId.current && clearTimeout(timeoutId.current)
    };
  }, [lightIndex]);

  return (
    <TrafficLight display={LIGHTS[lightIndex].display} />
  )
};
