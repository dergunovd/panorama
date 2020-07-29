import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Panorama } from '../Panorama';
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
  width: 50vw;
  padding: 10px 15px;
  div {
    margin-top: 15px;
  }
`;

const PanoramaWrapper = styled.div`
  bottom: 0;
  position: fixed;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100vh;
`;

export const Configurator: React.FC<any> = () => {
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
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
    }
  });

  const onChange = useCallback(values => {
    console.log(values);
  }, []);

  return (
    <form onChange={handleSubmit(onChange)}>
      <Grid>
        <Controls>
          <Typography variant="h4" component="h4" gutterBottom>
            Конфигуратор
          </Typography>
          <label>
            <Button variant="contained" color="primary" component="span">
              <PhotoCamera /> &nbsp;Изображение панорамы
            </Button>
            <input type="file" name="image" hidden />
          </label>

          <TextField
            label="По вертикали(-90 - 90)"
            type="number"
            name="pitch"
            inputRef={register()}
            inputProps={{
              min: -90,
              max: 90
            }}
          />

          <TextField
            label="По горизонтали (-180 - 180)"
            name="yaw"
            inputRef={register()}
            inputProps={{
              min: -180,
              max: 180
            }}
            type="number"
          />

          <TextField
            label="Глубина"
            name="hfov"
            inputRef={register()}
            inputProps={{
              min: 0,
              max: 150
            }}
            type="number"
          />

          <TextField label="Заголовок" name="title" inputRef={register()} />

          <TextField label="Автор" name="author" inputRef={register()} />

          <TextField
            label="Минимальная глубина"
            name="minHfov"
            inputRef={register()}
            inputProps={{
              min: 0,
              max: 150
            }}
            type="number"
          />

          <TextField
            label="Максимальная глубина"
            name="maxHfov"
            inputRef={register()}
            inputProps={{
              min: 0,
              max: 150
            }}
            type="number"
          />

          <TextField
            label="Минимальный угол по вертикали"
            name="minPitch"
            inputRef={register()}
            inputProps={{
              min: -90,
              max: 90
            }}
            type="number"
          />

          <TextField
            label="Максимальная угол по вертикали"
            name="maxPitch"
            inputRef={register()}
            inputProps={{
              min: -90,
              max: 90
            }}
            type="number"
          />

          <TextField
            label="Минимальный угол по горизонтали"
            name="minYaw"
            inputRef={register()}
            inputProps={{
              min: -180,
              max: 180
            }}
            type="number"
          />

          <TextField
            label="Максимальная угол по горизонтали"
            name="maxYaw"
            inputRef={register()}
            inputProps={{
              min: -180,
              max: 180
            }}
            type="number"
          />

          <TextField
            label="Вращение (градусов в секунду)"
            name="autoRotate"
            inputRef={register()}
            inputProps={{
              min: 0,
              max: 180
            }}
            type="number"
          />

          <FormControlLabel
            control={
              <Checkbox name="compass" inputRef={register()} color="primary" />
            }
            label="Компас"
          />

          <FormControlLabel
            control={
              <Checkbox name="autoLoad" inputRef={register()} color="primary" />
            }
            label="Автозагрузка"
          />

          <FormControlLabel
            control={
              <Checkbox
                name="orientationOnByDefault"
                inputRef={register()}
                color="primary"
              />
            }
            label="Гироскоп по-умолчанию"
          />

          <FormControlLabel
            control={
              <Checkbox
                name="showZoomCtrl"
                inputRef={register()}
                color="primary"
              />
            }
            label="Показывать зум"
          />

          <FormControlLabel
            control={
              <Checkbox
                name="keyboardZoom"
                inputRef={register()}
                color="primary"
              />
            }
            label="Зум клавиатурой"
          />

          <FormControlLabel
            control={
              <Checkbox
                name="disableKeyboardCtrl"
                inputRef={register()}
                color="primary"
              />
            }
            label="Отключить управление клавиатурой"
          />

          <FormControlLabel
            control={
              <Checkbox
                name="mouseZoom"
                inputRef={register()}
                color="primary"
              />
            }
            label="Зум мышью"
          />

          <FormControlLabel
            control={
              <Checkbox
                name="draggable"
                inputRef={register()}
                color="primary"
              />
            }
            label="Перетаскивание"
          />

          <FormControlLabel
            control={
              <Checkbox
                name="showFullscreenCtrl"
                inputRef={register()}
                color="primary"
              />
            }
            label="Показывать кнопку полного экрана"
          />

          <FormControlLabel
            control={
              <Checkbox
                name="showControls"
                inputRef={register()}
                color="primary"
              />
            }
            label="showControls"
          />

          <FormControlLabel
            control={
              <Checkbox
                name="hotspotDebug"
                inputRef={register()}
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
              <input type="file" hidden name="preview" />
            </label>
          </div>

          <TextField
            label="Превью Заголовок"
            name="previewTitle"
            inputRef={register()}
          />

          <TextField
            label="Превью Автор"
            name="previewAuthor"
            inputRef={register()}
          />

          <br />

          <Typography variant="h4" component="h4" gutterBottom>
            Сгенерированный конфиг
          </Typography>
          <Typography variant="body2" gutterBottom contentEditable="true">
            {JSON.stringify(getValues())}
          </Typography>
        </Controls>
        <PanoramaWrapper>
          <Panorama {...getValues()} />
        </PanoramaWrapper>
      </Grid>
    </form>
  );
};
