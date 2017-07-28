import React from 'react';

import Navigation from './Navigation';

export default function BaseLayout(props) {
    return (
      <div>
        <Navigation />
        { props.children }
      </div>
    )
}
