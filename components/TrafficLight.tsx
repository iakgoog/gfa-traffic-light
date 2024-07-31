import React from 'react';

type TrafficLightProps = {
  display: string;
};

export const TrafficLight = ({ display }: TrafficLightProps) => {
  return <h3>{display}</h3>;
};
