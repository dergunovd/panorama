import React, { FC } from 'react';
// @ts-ignore
import { Pannellum } from 'pannellum-react';

import myImage from '../assets/images/pano.jpg';

/* https://github.com/farminf/pannellum-react */

const Panorama: FC = () => (
  <Pannellum
    width="100vw"
    height="100vh"
    image={myImage}
    pitch={0}
    yaw={68}
    hfov={80}
    title="360° Panorama example"
    author={
      '<span>univay. (Dmitry Dergunov)<br /><a class="link" href="https://t.me/dergunov_dmitry">Получить альфа-доступ</a><br /></span>'
    }
    autoLoad
    onLoad={() => {
      console.log('panorama loaded');
    }}
  >
    <Pannellum.Hotspot
      type="info"
      pitch={-9}
      yaw={-72}
      text="Большая варочная панель с духовкой"
    />

    <Pannellum.Hotspot
      type="info"
      pitch={-11}
      yaw={33}
      text="Диван с набором подушек"
    />

    <Pannellum.Hotspot
      type="info"
      pitch={-2}
      yaw={88}
      text="Большая летняя веранда"
    />

    <Pannellum.Hotspot
      type="info"
      pitch={-9}
      yaw={119}
      text="Стеклянная лестница"
    />

    <Pannellum.Hotspot
      type="info"
      pitch={-25}
      yaw={-59}
      text="Обеденный стол из натурального дерева"
    />

    <Pannellum.Hotspot
      type="info"
      pitch={31}
      yaw={62}
      text="Дизайнерское освещение"
    />
  </Pannellum>
);

export default Panorama;
