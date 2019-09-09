import React, { FC } from 'react';
// @ts-ignore
import { Pannellum } from 'pannellum-react';

import myImage from '../assets/images/pano2.jpg';

/* https://github.com/farminf/pannellum-react */

const Panorama: FC = () => (
  <Pannellum
    width="100vw"
    height="100vh"
    image={myImage}
    pitch={10}
    yaw={180}
    hfov={110}
    title="360° Panorama example"
    author={"<span>univay. (Dmitry Dergunov)<br /><a class=\"link\" href=\"https://t.me/dergunov_dmitry\">Получить альфа-доступ</a></span>"}
    autoLoad
    onLoad={() => {
      console.log('panorama loaded');
    }}
  >
    <Pannellum.Hotspot type="info" pitch={-5} yaw={-60} text="TV" />

    <Pannellum.Hotspot type="info" pitch={2} yaw={-172} text="Big window" />

    <Pannellum.Hotspot type="info" pitch={-12} yaw={112} text="King-Size bed" />

    <Pannellum.Hotspot type="info" pitch={0} yaw={23} text="Big mirror" />

    <Pannellum.Hotspot type="info" pitch={-10} yaw={26} text="Table" />
  </Pannellum>
);

export default Panorama;
