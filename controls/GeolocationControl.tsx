import React from 'react';

import { withParentContext } from '../Context';
import { ErrorBoundaryProps, withErrorBoundary } from '../hocs/with-error-boundary';
import withYMaps, { WithYMapsProps } from '../hocs/withYMaps';
import { control } from '../types';
import { AnyObject, WithInstanceRef } from '../util/typing';
import { BaseControl, BaseControlProps } from './BaseControl';

interface GeolocationControlProps extends Omit<BaseControlProps, 'name'> {
	/**
	 * Control [data](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.GeolocationControl-docpage/#control.GeolocationControl__param-parameters.data)
	 */
	data?: control.IGeolocationControlParameters['data'];
	/**
	 * Uncontrolled control [data](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.GeolocationControl-docpage/#control.GeolocationControl__param-parameters.data)
	 */
	defaultData?: control.IGeolocationControlParameters['data'];
	/**
	 * Control [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.GeolocationControl-docpage/#control.GeolocationControl__param-parameters.options)
	 */
	options?: control.IGeolocationControlParameters['options'];
	/**
	 * Uncontrolled control [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.GeolocationControl-docpage/#control.GeolocationControl__param-parameters.options)
	 */
	defaultOptions?: control.IGeolocationControlParameters['options'];
	/**
	 * Control [state](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.GeolocationControl-docpage/#control.GeolocationControl__param-parameters.state)
	 */
	state?: control.IGeolocationControlParameters['state'];
	/**
	 * Uncontrolled control [state](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.GeolocationControl-docpage/#control.GeolocationControl__param-parameters.state)
	 */
	defaultState?: control.IGeolocationControlParameters['state'];
}

export const GeolocationControl: React.FC<
	React.PropsWithChildren<
		GeolocationControlProps & WithYMapsProps & WithInstanceRef & ErrorBoundaryProps & AnyObject
	>
> = props => {
	return <BaseControl {...props} name="GeolocationControl" />;
};

export default withErrorBoundary(
	withParentContext(withYMaps(GeolocationControl, true, ['control.GeolocationControl'])),
);
