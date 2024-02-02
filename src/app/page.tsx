// page & server component

import { ButtonClientComponent } from '../components/ButtonClientComponent';
import { homeContainerStyle } from './style.css';

export default function Home() {
  return (
    <div className={homeContainerStyle}>
      <h2>
        {'< '}Home{' >'}
      </h2>
      <ButtonClientComponent url="/user-page">User Page</ButtonClientComponent>
    </div>
  );
}
