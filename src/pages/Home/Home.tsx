import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  useIonViewDidEnter(() => {
    setTimeout(async () => {
      const result = await fetch('https://rickandmortyapi.com/api/character');
      const data = await result.json();
      console.log(data.results);
    }, 3000);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Ionic App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonCard>
                <img
                  src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                  alt="content-rym"
                />
                <IonCardHeader>
                  <IonCardSubtitle>Human (species)</IonCardSubtitle>
                  <IonCardTitle>Rick Sanchez (name)</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Alive (status)</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
