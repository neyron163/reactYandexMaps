import React from 'react';

import { withParentContext } from '../Context';
import { ErrorBoundaryProps, withErrorBoundary } from '../hocs/with-error-boundary';
import withYMaps, { WithYMapsProps } from '../hocs/withYMaps';
import { ICircleGeometry, ICircleOptions, IDataManager } from '../types';
import { AnyObject, WithInstanceRef } from '../util/typing';
import { BaseGeoObject, BaseGeoObjectProps } from './BaseGeoObject';

interface CircleProps extends Omit<BaseGeoObjectProps, 'name'> {
	/**
	 * Circle [geometry](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-geometry)
	 */
	geometry?: ICircleGeometry[][][][] | number[][] | object;
	/**
	 * Uncontrolled circle [geometry](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-geometry)
	 */
	defaultGeometry?: ICircleGeometry[][][][] | number[][] | object;
	/**
	 * Circle [properties](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-properties)
	 */
	properties?: AnyObject | IDataManager;
	/**
	 * Uncontrolled circle [properties](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-properties)
	 */
	defaultProperties?: AnyObject | IDataManager;
	/**
	 * Circle [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-options)
	 */
	options?: ICircleOptions;
	/**
	 * Uncontrolled circle [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-options)
	 */
	defaultOptions?: ICircleOptions;
}

export const Circle: React.FC<
	React.PropsWithChildren<
		CircleProps & WithYMapsProps & WithInstanceRef & ErrorBoundaryProps & AnyObject
	>
> = props => {
	return <BaseGeoObject {...props} name="Circle" />;
};

export default withErrorBoundary(withParentContext(withYMaps(Circle, true, ['Circle'])));
