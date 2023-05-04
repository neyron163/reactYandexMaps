import React from 'react';

import { withParentContext } from '../Context';
import { ErrorBoundaryProps, withErrorBoundary } from '../hocs/with-error-boundary';
import withYMaps, { WithYMapsProps } from '../hocs/withYMaps';
import { control } from '../types';
import { AnyObject, WithInstanceRef } from '../util/typing';
import { BaseControl, BaseControlProps } from './BaseControl';

interface RouteButtonProps extends Omit<BaseControlProps, 'name'> {
	/**
	 * Control [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.RouteButton-docpage/#control.RouteButton__param-parameters.options)
	 */
	options?: control.IRouteButtonParameters['options'];
	/**
	 * Uncontrolled control [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.RouteButton-docpage/#control.RouteButton__param-parameters.options)
	 */
	defaultOptions?: control.IRouteButtonParameters['options'];
	/**
	 * Control [state](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.RouteButton-docpage/#control.RouteButton__param-parameters.state)
	 */
	state?: control.IRouteButtonParameters['state'];
	/**
	 * Uncontrolled control [state](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.RouteButton-docpage/#control.RouteButton__param-parameters.state)
	 */
	defaultState?: control.IRouteButtonParameters['state'];
}

export const RouteButton: React.FC<
	React.PropsWithChildren<
		RouteButtonProps & WithYMapsProps & WithInstanceRef & ErrorBoundaryProps & AnyObject
	>
> = props => {
	return <BaseControl {...props} name="RouteButton" />;
};

export default withErrorBoundary(
	withParentContext(withYMaps(RouteButton, true, ['control.RouteButton'])),
);
