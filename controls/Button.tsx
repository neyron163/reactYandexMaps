import React from 'react';

import { withParentContext } from '../Context';
import { ErrorBoundaryProps, withErrorBoundary } from '../hocs/with-error-boundary';
import withYMaps, { WithYMapsProps } from '../hocs/withYMaps';
import { control } from '../types';
import { AnyObject, WithInstanceRef } from '../util/typing';
import { BaseControl, BaseControlProps } from './BaseControl';

interface ButtonProps extends Omit<BaseControlProps, 'name'> {
	/**
	 * Control [data](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.Button-docpage/#control.Button__param-parameters.data)
	 */
	data?: control.IButtonParameters['data'];
	/**
	 * Uncontrolled control [data](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.Button-docpage/#control.Button__param-parameters.data)
	 */
	defaultData?: control.IButtonParameters['data'];
	/**
	 * Control [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.Button-docpage/#control.Button__param-parameters.options)
	 */
	options?: control.IButtonParameters['options'];
	/**
	 * Uncontrolled control [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.Button-docpage/#control.Button__param-parameters.options)
	 */
	defaultOptions?: control.IButtonParameters['options'];
	/**
	 * Control [state](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.Button-docpage/#control.Button__param-parameters.state)
	 */
	state?: control.IButtonParameters['state'];
	/**
	 * Uncontrolled control [state](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.Button-docpage/#control.Button__param-parameters.state)
	 */
	defaultState?: control.IButtonParameters['state'];
}

export const Button: React.FC<
	React.PropsWithChildren<
		ButtonProps & WithYMapsProps & WithInstanceRef & ErrorBoundaryProps & AnyObject
	>
> = props => {
	return <BaseControl {...props} name="Button" />;
};

export default withErrorBoundary(withParentContext(withYMaps(Button, true, ['control.Button'])));
