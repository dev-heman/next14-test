// page & server component

import { ButtonClientComponent } from '../../components/ButtonClientComponent';
import { userPageContainerStyle } from './style.css';

export default function UserPage() {
  return (
    <div className={userPageContainerStyle}>
      <h2>
        {'< '}User Page{' >'}
      </h2>
      <ButtonClientComponent url="/">Home Page</ButtonClientComponent>
    </div>
  );
}
