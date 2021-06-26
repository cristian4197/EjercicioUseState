import { IonCard, IonCol, IonRow, IonSlide, IonSlides,IonCardHeader,IonCardSubtitle,IonCardContent, IonCardTitle } from '@ionic/react';
import React from 'react';
import { Personajes } from '../../models/personajes.models';
import IonIcon from '@reacticons/ionicons';

interface SlidesProps {
  slides: Personajes[];
  onClickGoHome: () => void;
}

const slideOptions = {
  autoplay: true,
  initialSlide: 0,
  slidesPerView: 1,
  centeredSlides: true,
  speed: 400,
};

const Slides: React.FC<SlidesProps> = ({ slides, onClickGoHome }) => {
  return (
    <IonSlides pager={true} options={slideOptions}>
      {slides.map((slide) => (
        <IonSlide key={slide.id}>
           <IonRow>
            <IonCol className="ion-text-center">
              <IonCard>
                <img
                  src={slide.image}
                  alt="content-rym"
                />
                <IonCardHeader>
                  <IonCardSubtitle>{slide.species}</IonCardSubtitle>
                  <IonCardTitle>{slide.name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>{slide.name}</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

        </IonSlide>
      ))}
    </IonSlides>
  );
};

export default Slides;
