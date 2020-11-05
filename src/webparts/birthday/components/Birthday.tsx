import * as React from 'react';
import Bithdays from './Birthday/Birthdays';
import { IBirthdayProps } from './IBirthdayProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Birthday extends React.Component<IBirthdayProps, {}> {
  public render(): React.ReactElement<IBirthdayProps> {
    return (
  <Bithdays />
    );
  }
}
