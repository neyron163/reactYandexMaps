import React from 'react';

import { withParentContext } from '../Context';
import { ErrorBoundaryProps, withErrorBoundary } from '../hocs/with-error-boundary';
import withYMaps, { WithYMapsProps } from '../hocs/withYMaps';
import { IDataManager, IGeometry, IOptionManager } from '../types';
import { AnyObject, WithInstanceRef } from '../util/typing';
import { BaseGeoObject, BaseGeoObjectProps } from './BaseGeoObject';

interface RectangleProps extends Omit<BaseGeoObjectProps, 'name'> {
	/**
	 * Rectangle [geometry](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-geometry)
	 */
	geometry?: IGeometry[][][][] | number[][] | object;
	/**
	 * Uncontrolled Rectangle [geometry](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-geometry)
	 */
	defaultGeometry?: IGeometry[][][][] | number[][] | object;
	/**
	 * Rectangle [properties](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-properties)
	 */
	properties?: AnyObject | IDataManager;
	/**
	 * Uncontrolled Rectangle [properties](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-properties)
	 */
	defaultProperties?: AnyObject | IDataManager;
	/**
	 * Rectangle [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-options)
	 */
	options?: IOptionManager;
	/**
	 * Uncontrolled Rectangle [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-options)
	 */
	defaultOptions?: IOptionManager;
}

export const Rectangle: React.FC<
	React.PropsWithChildren<
		RectangleProps & WithYMapsProps & WithInstanceRef & ErrorBoundaryProps & AnyObject
	>
> = props => {
	return <BaseGeoObject {...props} name="Rectangle" />;
};

export default withErrorBoundary(withParentContext(withYMaps(Rectangle, true, ['Rectangle'])));
