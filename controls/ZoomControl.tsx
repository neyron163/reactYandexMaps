import React from 'react';

import { withParentContext } from '../Context';
import { ErrorBoundaryProps, withErrorBoundary } from '../hocs/with-error-boundary';
import withYMaps, { WithYMapsProps } from '../hocs/withYMaps';
import { control, data } from '../types';
import { AnyObject, WithInstanceRef } from '../util/typing';
import { BaseControl, BaseControlProps } from './BaseControl';

interface ZoomControlProps extends Omit<BaseControlProps, 'name'> {
	/**
	 * Control [data](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.ZoomControl-docpage/#control.ZoomControl__param-parameters.data)
	 */
	data?: data.Manager;
	/**
	 * Uncontrolled control [data](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.ZoomControl-docpage/#control.ZoomControl__param-parameters.data)
	 */
	defaultData?: data.Manager;
	/**
	 * Control [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.ZoomControl-docpage/#control.ZoomControl__param-parameters.options)
	 */
	options?: control.IZoomControlParameters['options'];
	/**
	 * Uncontrolled control [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.ZoomControl-docpage/#control.ZoomControl__param-parameters.options)
	 */
	defaultOptions?: control.IZoomControlParameters['options'];

	/**
	 * Control [state](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.ZoomControl-docpage/#control.ZoomControl__param-parameters.state)
	 */
	state?: data.Manager;
	/**
	 * Uncontrolled control [state](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.ZoomControl-docpage/#control.ZoomControl__param-parameters.state)
	 */
	defaultState?: data.Manager;
}

export const ZoomControl: React.FC<
	React.PropsWithChildren<
		ZoomControlProps & WithYMapsProps & WithInstanceRef & ErrorBoundaryProps & AnyObject
	>
> = props => {
	return <BaseControl {...props} name="ZoomControl" />;
};

export default withErrorBoundary(
	withParentContext(withYMaps(ZoomControl, true, ['control.ZoomControl'])),
);
