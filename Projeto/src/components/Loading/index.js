import React from 'react';

import { TiWarningOutline } from 'react-icons/ti';
import { Container } from './styles';

export default function EmptyFavorites() {
  return (
    <Container>
      <div className="content">
        <div>
          <TiWarningOutline size={100} />
          <strong>Loading...</strong>
          <br />
          <p />
        </div>
      </div>
    </Container>
  );
}
