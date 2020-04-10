import React, { Suspense } from 'react';
//import { Uploader } from '@inrupt/solid-react-components';
import { useTranslation } from 'react-i18next';
import {
  HomeWrapper,
  HomeCard,
  HomeSidenav,
  HomeBody,
  RouteMap,
  RouteInfo
} from './home.style';
import RouteList from './components/RouteList';
import Slider from './components/Slider'
import parser from '../../parserGPX';
import 'leaflet/dist/leaflet.css';
const Map = React.lazy(() => import('../../Map'));

/**
 * Hom Page UI component, containing the styled components for the Hom Page
 * Image component will get theimage context and resolve the value to render.
 * @param props
 */

export const HomePageContent = props => {
  const { t } = useTranslation(); /* se puede pasar un mensaje prefefinido a Trans o usar t */
  const images = [
    {src: '/img/pin.png'},
    {src: '/img/triangle.png'},
    {src: '/img/circle.png'},
    {src: '/img/flag.png'},
    {src: '/img/Solid.png'},
    {src: '/img/pattern-geo.png'},
    {src: '/img/triangle.png'}
  ];
  return (
    <HomeWrapper data-testid="home-wrapper">
      <HomeSidenav className="home-sidebar">
        <p> Menu donde se muestra la coleccion de rutas</p>
        <Suspense fallback={<div>{t('home.loading_routes')}</div>}>
          <RouteList></RouteList>
        </Suspense>
      </HomeSidenav>
      <HomeBody className="home-body">
        <HomeCard className="card">
          <RouteMap id = "map">
            <Map></Map>
          </RouteMap>
          <RouteInfo>
            <h2> {t('home.information')} </h2>
            <Slider imgs={images}></Slider>
          </RouteInfo>
        </HomeCard>
      </HomeBody>
    </HomeWrapper>
  );
};