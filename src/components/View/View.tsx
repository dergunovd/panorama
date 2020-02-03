import React, { useEffect, useState } from 'react';
import { Panorama, Config } from '../Panorama';
import { ViewProps } from './View.types';

export const View: React.FC<ViewProps> = props => {
  const [config, setConfig] = useState<Config | null>(null);
  useEffect(() => {
    fetch(`/config/${props.match?.params.id}.json`)
      .then(res => res.json())
      .then(res => setConfig(res));
  }, []);

  return config ? (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Panorama {...config} />
    </div>
  ) : null;
};
