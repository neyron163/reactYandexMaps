import React from 'react';

import { withParentContext } from '../Context';
import { ErrorBoundaryProps, withErrorBoundary } from '../hocs/with-error-boundary';
import withYMaps, { WithYMapsProps } from '../hocs/withYMaps';
import { IOptionManager, data } from '../types';
import { AnyObject, WithInstanceRef } from '../util/typing';
import { BaseControl, BaseControlProps } from './BaseControl';

interface TrafficControlProps extends Omit<BaseControlProps, 'name'> {
	/**
	 * Control [data](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.TrafficControl-docpage/#control.TrafficControl__param-parameters.data)
	 */
	data?: data.Manager;
	/**
	 * Uncontrolled control [data](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.TrafficControl-docpage/#control.TrafficControl__param-parameters.data)
	 */
	defaultData?: data.Manager;
	/**
	 * Control [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.TrafficControl-docpage/#control.TrafficControl__param-parameters.options)
	 */
	options?: IOptionManager;
	/**
	 * Uncontrolled control [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.TrafficControl-docpage/#control.TrafficControl__param-parameters.options)
	 */
	defaultOptions?: IOptionManager;

	/**
	 * Control [state](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.TrafficControl-docpage/#control.TrafficControl__param-parameters.state)
	 */
	state?: data.Manager;
	/**
	 * Uncontrolled control [state](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.TrafficControl-docpage/#control.TrafficControl__param-parameters.state)
	 */
	defaultState?: data.Manager;
}

export const TrafficControl: React.FC<
	React.PropsWithChildren<
		TrafficControlProps & WithYMapsProps & WithInstanceRef & ErrorBoundaryProps & AnyObject
	>
> = props => {
	return <BaseControl {...props} name="TrafficControl" />;
};

export default withErrorBoundary(
	withParentContext(withYMaps(TrafficControl, true, ['control.TrafficControl'])),
);
