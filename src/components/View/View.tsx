import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Panorama, Config } from '../Panorama';

export const View: FC = () => {
  const { id } = useParams();
  const [config, setConfig] = useState<Config | null>(null);

  useEffect(() => {
    fetch(`/config/${id}.json`)
      .then((res) => res.json())
      .then(setConfig);
  }, [id]);

  return config ? (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Panorama {...config} />
    </div>
  ) : null;
};
