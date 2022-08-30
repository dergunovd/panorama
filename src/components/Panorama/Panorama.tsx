import React, { FC } from 'react';
// @ts-ignore
import { Pannellum } from 'pannellum-react';
import { Config } from './Panorama.types';

/* https://github.com/farminf/pannellum-react */
export const Panorama: FC<Config> = (config) => (
  <Pannellum
    width={config.width ?? '100%'}
    height={config.height ?? '100%'}
    image={config.image}
    pitch={config.pitch}
    yaw={config.yaw}
    hfov={config.hfov}
    title={config.title}
    author={config.author}
    maxHfov={config.maxHfov}
    minHfov={config.minHfov}
    maxPitch={config.maxPitch}
    minPitch={config.minPitch}
    maxYaw={config.maxYaw}
    minYaw={config.minYaw}
    autoRotate={config.autoRotate}
    compass={config.compass}
    preview={config.preview}
    previewTitle={config.previewTitle}
    previewAuthor={config.previewAuthor}
    autoLoad={config.autoLoad}
    orientationOnByDefault={config.orientationOnByDefault}
    showZoomCtrl={config.showZoomCtrl}
    keyboardZoom={config.keyboardZoom}
    disableKeyboardCtrl={config.disableKeyboardCtrl}
    mouseZoom={config.mouseZoom}
    draggable={config.draggable}
    showFullscreenCtrl={config.showFullscreenCtrl}
    showControls={config.showControls}
    hotspotDebug={config.hotspotDebug}
  >
    {config.spots?.map((spot) => (
      <Pannellum.Hotspot
        type={spot.type}
        pitch={spot.pitch}
        yaw={spot.yaw}
        text={spot.text}
      />
    ))}
  </Pannellum>
);
