/* @flow */

import * as React from 'react';
import { Platform } from 'react-native';

import ToolbarAction from './ToolbarAction';
import Icon from '../Icon';

type Props = {
  /**
   *  Custom color for back icon.
   */
  color?: string,
  /**
   * Function to execute on press.
   */
  onPress?: () => mixed,
  style?: any,
};

/**
 * The ToolbarBackAction component is used for displaying a back button in the toolbar.
 */
const ToolbarBackAction = (props: Props) => {
  const icon =
    Platform.OS === 'ios'
      ? ({ color }) => (
          <Icon source="keyboard-arrow-left" size={36} color={color} />
        )
      : 'arrow-back';

  return <ToolbarAction {...props} size={24} icon={icon} />;
};

export default ToolbarBackAction;
