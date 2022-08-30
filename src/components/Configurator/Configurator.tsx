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

  const onChange = useCallback((values: any) => {
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
            {...register('pitch')}
            inputProps={{
              min: -90,
              max: 90
            }}
          />

          <TextField
            label="По горизонтали (-180 - 180)"
            {...register('yaw')}
            inputProps={{
              min: -180,
              max: 180
            }}
            type="number"
          />

          <TextField
            label="Глубина"
            {...register('hfov')}
            inputProps={{
              min: 0,
              max: 150
            }}
            type="number"
          />

          <TextField label="Заголовок" {...register('title')} />

          <TextField label="Автор" {...register('author')} />

          <TextField
            label="Минимальная глубина"
            {...register('minHfov')}
            inputProps={{
              min: 0,
              max: 150
            }}
            type="number"
          />

          <TextField
            label="Максимальная глубина"
            {...register('maxHfov')}
            inputProps={{
              min: 0,
              max: 150
            }}
            type="number"
          />

          <TextField
            label="Минимальный угол по вертикали"
            {...register('minPitch')}
            inputProps={{
              min: -90,
              max: 90
            }}
            type="number"
          />

          <TextField
            label="Максимальная угол по вертикали"
            {...register('maxPitch')}
            inputProps={{
              min: -90,
              max: 90
            }}
            type="number"
          />

          <TextField
            label="Минимальный угол по горизонтали"
            {...register('minYaw')}
            inputProps={{
              min: -180,
              max: 180
            }}
            type="number"
          />

          <TextField
            label="Максимальная угол по горизонтали"
            {...register('maxYaw')}
            inputProps={{
              min: -180,
              max: 180
            }}
            type="number"
          />

          <TextField
            label="Вращение (градусов в секунду)"
            {...register('autoRotate')}
            inputProps={{
              min: 0,
              max: 180
            }}
            type="number"
          />

          <FormControlLabel
            control={
              <Checkbox {...register('compass')} color="primary" />
            }
            label="Компас"
          />

          <FormControlLabel
            control={
              <Checkbox {...register('autoLoad')} color="primary" />
            }
            label="Автозагрузка"
          />

          <FormControlLabel
            control={
              <Checkbox
                {...register('orientationOnByDefault')}
                color="primary"
              />
            }
            label="Гироскоп по-умолчанию"
          />

          <FormControlLabel
            control={
              <Checkbox
                {...register('showZoomCtrl')}
                color="primary"
              />
            }
            label="Показывать зум"
          />

          <FormControlLabel
            control={
              <Checkbox
                {...register('keyboardZoom')}
                color="primary"
              />
            }
            label="Зум клавиатурой"
          />

          <FormControlLabel
            control={
              <Checkbox
                {...register('disableKeyboardCtrl')}
                color="primary"
              />
            }
            label="Отключить управление клавиатурой"
          />

          <FormControlLabel
            control={
              <Checkbox
                {...register('mouseZoom')}
                color="primary"
              />
            }
            label="Зум мышью"
          />

          <FormControlLabel
            control={
              <Checkbox
                {...register('draggable')}
                color="primary"
              />
            }
            label="Перетаскивание"
          />

          <FormControlLabel
            control={
              <Checkbox
                {...register('showFullscreenCtrl')}
                color="primary"
              />
            }
            label="Показывать кнопку полного экрана"
          />

          <FormControlLabel
            control={
              <Checkbox
                {...register('showControls')}
                color="primary"
              />
            }
            label="showControls"
          />

          <FormControlLabel
            control={
              <Checkbox
                {...register('hotspotDebug')}
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
            {...register('previewTitle')}
          />

          <TextField
            label="Превью Автор"
            {...register('previewAuthor')}
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
