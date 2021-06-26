import {
  IonPage,
  IonContent,
  useIonViewWillEnter,
  IonLoading,
} from '@ionic/react';
import React, { useState } from 'react';
import Slides from '../../components/Slides/Slides';
import SlidesPersonajes from '../../components/Slides/Personajes';
import { getSlides } from '../../data/slides';
import { Slide } from '../../models/slide.model';
import { RouteComponentProps } from 'react-router';
import '../Welcome/Welcome.css';
import { Personajes } from '../../models/personajes.models';

const Welcome: React.FC<RouteComponentProps> = ({ history }) => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [slidesPersonajes, setSlidesPersonajes] = useState<Personajes[]>([]);
  const handleGoHome = () => {
    history.push('/home');
  };

  useIonViewWillEnter(() => {
    // setTimeout(() => {
    //   const arraySlides = getSlides();
    //   setSlides(arraySlides);
    // }, 5000);

    setTimeout(async () => {
      const result = await fetch('https://rickandmortyapi.com/api/character');
      const data = await result.json();
      console.log(data.results);
      setSlidesPersonajes(data.results);
    }, 3000);
  });

  return (
    <IonPage>
      <IonContent className="ion-content-welcome">
        {slidesPersonajes.length === 0 ? (
          <IonLoading isOpen={true} message={'Cargando...'} />
        ) : (
          <SlidesPersonajes slides={slidesPersonajes} onClickGoHome={handleGoHome} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
