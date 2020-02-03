export interface Spot {
  type: string;
  pitch: number;
  yaw: number;
  text: string;
}

export interface Config {
  width?: string;
  height?: string;
  image: string | ArrayBuffer | null;
  pitch: number;
  yaw: number;
  hfov: number;
  title: string;
  author: string;
  maxHfov: number;
  minHfov: number;
  maxPitch: number;
  minPitch: number;
  maxYaw: number;
  minYaw: number;
  autoRotate: number;
  compass: boolean;
  preview: string | ArrayBuffer | null;
  previewTitle: string;
  previewAuthor: string;
  autoLoad: boolean;
  orientationOnByDefault: boolean;
  showZoomCtrl: boolean;
  keyboardZoom: boolean;
  disableKeyboardCtrl: boolean;
  mouseZoom: boolean;
  draggable: boolean;
  showFullscreenCtrl: boolean;
  showControls: boolean;
  hotspotDebug: boolean;
  spots?: Spot[];
}
