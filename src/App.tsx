import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { close, home, logOut, map, person } from 'ionicons/icons';
import { menuController } from '@ionic/core';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
import Maps from './pages/Maps/Maps';
import Profile from './pages/Profile/Profile';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="main-app" side="end" type="overlay">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
            <IonButtons
              slot="end"
              onClick={async () => await menuController.toggle()}
            >
              <IonButton>
                <IonIcon icon={close} size="large"></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem lines="none" routerLink="/home" routerDirection="none">
                <IonIcon icon={home} slot="start"></IonIcon>
                <IonLabel>Principal</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem lines="none" routerLink="/maps" routerDirection="none">
                <IonIcon icon={map} slot="start"></IonIcon>
                <IonLabel>Mapas</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem
                lines="none"
                routerLink="/profile"
                routerDirection="none"
              >
                <IonIcon icon={person} slot="start"></IonIcon>
                <IonLabel>Mi Perfil</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem lines="none">
                <IonIcon icon={logOut} slot="start"></IonIcon>
                <IonLabel>Cerrar Sesión</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="main-app">
        <Route exact path="/home" component={Home} />
        <Route exact path="/maps" component={Maps} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/">
          <Redirect to="/welcome" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
