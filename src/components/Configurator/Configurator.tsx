import React, { useState } from 'react';
import styled from 'styled-components';
import { Panorama, Config } from '../Panorama';
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100vh;
`;

const Controls = styled.div`
  display: flex;
  justify-content: stretch;
  flex-direction: column;
  padding: 10px 15px;
  div {
    margin-top: 15px;
  }
`;

const PanoramaWrapper = styled.div`
  bottom: 0;
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
`;

export const Configurator: React.FC<any> = () => {
  const [config, setConfig] = useState<Config>({
    width: '100%',
    height: '100%',
    image: '/images/pano.jpg',
    pitch: 0,
    yaw: 68,
    hfov: 120,
    title: '360° Панорама',
    author: 'panorama.dergunov.net',
    minHfov: 10,
    maxHfov: 150,
    minPitch: -90,
    maxPitch: 90,
    minYaw: 0,
    maxYaw: 360,
    autoRotate: 0,
    compass: false,
    preview: '',
    previewTitle: '',
    previewAuthor: '',
    autoLoad: true,
    orientationOnByDefault: false,
    showZoomCtrl: true,
    keyboardZoom: true,
    disableKeyboardCtrl: false,
    mouseZoom: true,
    draggable: true,
    showFullscreenCtrl: true,
    showControls: true,
    hotspotDebug: false
  });

  return (
    <Grid>
      <Controls>
        <Typography variant="h4" component="h4" gutterBottom>
          Конфигуратор
        </Typography>
        <label>
          <Button variant="contained" color="primary" component="span">
            <PhotoCamera /> &nbsp;Изображение панорамы
          </Button>
          <input
            type="file"
            hidden
            onChange={event => {
              // @ts-ignore
              const { files } = event.target;
              const fileReader = new FileReader();
              fileReader.onload = function() {
                setConfig({ ...config, image: fileReader.result });
              };
              if (files) {
                fileReader.readAsDataURL(files[0]);
              }
            }}
          />
        </label>

        <TextField
          label="По вертикали(-90 - 90)"
          type="number"
          inputProps={{
            min: -90,
            max: 90
          }}
          defaultValue={config.pitch}
          onChange={event =>
            setConfig({ ...config, pitch: +event.target.value })
          }
        />

        <TextField
          label="По горизонтали (-180 - 180)"
          inputProps={{
            min: -180,
            max: 180
          }}
          type="number"
          defaultValue={config.yaw}
          onChange={event => setConfig({ ...config, yaw: +event.target.value })}
        />

        <TextField
          label="Глубина"
          inputProps={{
            min: 0,
            max: 150
          }}
          type="number"
          defaultValue={config.hfov}
          onChange={event =>
            setConfig({ ...config, hfov: +event.target.value })
          }
        />

        <TextField
          label="Заголовок"
          defaultValue={config.title}
          onChange={event =>
            setConfig({ ...config, title: event.target.value })
          }
        />

        <TextField
          label="Автор"
          defaultValue={config.author}
          onChange={event =>
            setConfig({ ...config, author: event.target.value })
          }
        />

        <TextField
          label="Минимальная глубина"
          inputProps={{
            min: 0,
            max: 150
          }}
          type="number"
          defaultValue={config.minHfov}
          onChange={event =>
            setConfig({ ...config, minHfov: +event.target.value })
          }
        />

        <TextField
          label="Максимальная глубина"
          inputProps={{
            min: 0,
            max: 150
          }}
          type="number"
          defaultValue={config.maxHfov}
          onChange={event =>
            setConfig({ ...config, maxHfov: +event.target.value })
          }
        />

        <TextField
          label="Минимальный угол по вертикали"
          inputProps={{
            min: -90,
            max: 90
          }}
          type="number"
          defaultValue={config.minPitch}
          onChange={event =>
            setConfig({ ...config, minPitch: +event.target.value })
          }
        />

        <TextField
          label="Максимальная угол по вертикали"
          inputProps={{
            min: -90,
            max: 90
          }}
          type="number"
          defaultValue={config.maxPitch}
          onChange={event =>
            setConfig({ ...config, maxPitch: +event.target.value })
          }
        />

        <TextField
          label="Минимальный угол по горизонтали"
          inputProps={{
            min: -180,
            max: 180
          }}
          type="number"
          defaultValue={config.minYaw}
          onChange={event =>
            setConfig({ ...config, minYaw: +event.target.value })
          }
        />

        <TextField
          label="Максимальная угол по горизонтали"
          inputProps={{
            min: -180,
            max: 180
          }}
          type="number"
          defaultValue={config.maxYaw}
          onChange={event =>
            setConfig({ ...config, maxYaw: +event.target.value })
          }
        />

        <TextField
          label="Вращение (градусов в секунду)"
          inputProps={{
            min: 0,
            max: 180
          }}
          type="number"
          defaultValue={config.autoRotate}
          onChange={event =>
            setConfig({ ...config, autoRotate: +event.target.value })
          }
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={config.compass}
              onChange={event =>
                setConfig({ ...config, compass: event.target.checked })
              }
              value="compass"
              color="primary"
            />
          }
          label="Компас"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={config.autoLoad}
              onChange={event =>
                setConfig({ ...config, autoLoad: event.target.checked })
              }
              value="autoLoad"
              color="primary"
            />
          }
          label="Автозагрузка"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={config.orientationOnByDefault}
              onChange={event =>
                setConfig({
                  ...config,
                  orientationOnByDefault: event.target.checked
                })
              }
              value="orientationOnByDefault"
              color="primary"
            />
          }
          label="Гироскоп по-умолчанию"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={config.showZoomCtrl}
              onChange={event =>
                setConfig({ ...config, showZoomCtrl: event.target.checked })
              }
              value="showZoomCtrl"
              color="primary"
            />
          }
          label="Показывать зум"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={config.keyboardZoom}
              onChange={event =>
                setConfig({ ...config, keyboardZoom: event.target.checked })
              }
              value="keyboardZoom"
              color="primary"
            />
          }
          label="Зум клавиатурой"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={config.disableKeyboardCtrl}
              onChange={event =>
                setConfig({
                  ...config,
                  disableKeyboardCtrl: event.target.checked
                })
              }
              value="disableKeyboardCtrl"
              color="primary"
            />
          }
          label="Отключить управление клавиатурой"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={config.mouseZoom}
              onChange={event =>
                setConfig({ ...config, mouseZoom: event.target.checked })
              }
              value="mouseZoom"
              color="primary"
            />
          }
          label="Зум мышью"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={config.draggable}
              onChange={event =>
                setConfig({ ...config, draggable: event.target.checked })
              }
              value="draggable"
              color="primary"
            />
          }
          label="Перетаскивание"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={config.showFullscreenCtrl}
              onChange={event =>
                setConfig({
                  ...config,
                  showFullscreenCtrl: event.target.checked
                })
              }
              value="showFullscreenCtrl"
              color="primary"
            />
          }
          label="Показывать кнопку полного экрана"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={config.showControls}
              onChange={event =>
                setConfig({ ...config, showControls: event.target.checked })
              }
              value="showControls"
              color="primary"
            />
          }
          label="showControls"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={config.hotspotDebug}
              onChange={event =>
                setConfig({ ...config, hotspotDebug: event.target.checked })
              }
              value="hotspotDebug"
              color="primary"
            />
          }
          label="hotspotDebug"
        />

        <div>
          <label>
            <Button variant="contained" color="primary" component="span">
              <PhotoCamera /> &nbsp;Изображение превью
            </Button>
            <input
              type="file"
              hidden
              onChange={event => {
                // @ts-ignore
                const { files } = event.target;
                const fileReader = new FileReader();
                fileReader.onload = function() {
                  setConfig({ ...config, preview: fileReader.result });
                };
                if (files) {
                  fileReader.readAsDataURL(files[0]);
                }
              }}
            />
          </label>
        </div>

        <TextField
          label="Превью Заголовок"
          defaultValue={config.previewTitle}
          onChange={event =>
            setConfig({ ...config, previewTitle: event.target.value })
          }
        />

        <TextField
          label="Превью Автор"
          defaultValue={config.previewAuthor}
          onChange={event =>
            setConfig({ ...config, previewAuthor: event.target.value })
          }
        />

        <br />

        <Typography variant="h4" component="h4" gutterBottom>
          Сгенерированный конфиг
        </Typography>
        <Typography variant="body2" gutterBottom contentEditable={'true'}>
          {JSON.stringify(config, null, '\n')}
        </Typography>
      </Controls>
      <PanoramaWrapper>
        <Panorama {...config} />
      </PanoramaWrapper>
    </Grid>
  );
};
