import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import background from './assets/background.jpg';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  background: url('${background}') left bottom / cover;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

export const Landing: React.FC<any> = () => {
  return (
    <>
      <Background />

      <Grid
        container
        justify="center"
        alignContent="center"
        style={{ height: '100vh', overflow: 'hidden' }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          style={{
            paddingTop: 100,
            paddingBottom: 100,
            color: '#efefef'
          }}
        >
          Панорама / 3D-тур / Видео 360°
        </Typography>
        <Grid
          container
          spacing={2}
          alignContent={'center'}
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <Link to="/configurator">
              <Button
                variant="contained"
                color="primary"
                component="a"
                size="large"
                style={{ width: 300 }}
              >
                Конфигуратор
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/p/1">
              <Button
                variant="contained"
                color="primary"
                component="a"
                size="large"
                style={{ width: 300 }}
              >
                Пример
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
