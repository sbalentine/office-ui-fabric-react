/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import { BaseComponent, css } from 'office-ui-fabric-react/lib/Utilities';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Link } from 'office-ui-fabric-react/lib/Link';
import {
  IOverflowSetItemProps,
  OverflowSet
} from 'office-ui-fabric-react/lib/OverflowSet';

import * as stylesImport from './OverflowSet.Example.scss';
const styles: any = stylesImport;

export class OverflowSetBasicExample extends BaseComponent<any, any> {

  public render() {
    return (
      <OverflowSet
        items={ [
          {
            key: 'item1',
            name: 'Link 1',
            ariaLabel: 'New. Use left and right arrow keys to navigate',
            onClick: () => { return; },
          },
          {
            key: 'item2',
            name: 'Link 2',
            onClick: () => { return; },
          },
          {
            key: 'item3',
            name: 'Link 3',
            onClick: () => { return; }
          }
        ] }
        overflowItems={ [
          {
            key: 'item4',
            name: 'Overflow Link 1',
            onClick: () => { return; }
          },
          {
            key: 'item5',
            name: 'Overflow Link 2',
            onClick: () => { return; }
          }
        ]
        }
        onRenderOverflowButton={ this._onRenderOverflowButton }
        onRenderItem={ this._onRenderItem }
      />
    );
  }

  private _onRenderItem(item: IOverflowSetItemProps): JSX.Element {
    return (
      <Link
        className={ css(styles.overflowLinks) }
        onClick={ item.onClick }
      >{ item.name }
      </Link>
    );
  }

  private _onRenderOverflowButton(overflowItems: any[] | undefined): JSX.Element {
    return (
      <IconButton
        className={ css(styles.overflowButton) }
        menuIconProps={ { iconName: 'More' } }
        menuProps={ { items: overflowItems! } }
      />
    );
  }
}