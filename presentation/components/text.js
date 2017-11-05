import React from 'react';

import { Text as SpectacleText } from 'spectacle';

class Text extends React.Component {
  render() {
    return (
      <SpectacleText lineHeight={1.4} {...this.props} textColor="white">
        {this.props.children}
      </SpectacleText>
    );
  }
}

export default Text;
