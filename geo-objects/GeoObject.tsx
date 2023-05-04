import React from 'react';

import { withParentContext } from '../Context';
import { ErrorBoundaryProps, withErrorBoundary } from '../hocs/with-error-boundary';
import withYMaps, { WithYMapsProps } from '../hocs/withYMaps';
import { IDataManager, IGeometry } from '../types';
import { AnyObject, WithInstanceRef } from '../util/typing';
import { BaseGeoObject, BaseGeoObjectProps } from './BaseGeoObject';

interface GeoObjectProps extends Omit<BaseGeoObjectProps, 'name'> {
	/**
	 * GeoObject [feature.geometry](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/GeoObject-docpage/#param-feature.geometry)
	 */
	geometry?: IGeometry[][][][] | number[][] | object;
	/**
	 * Uncontrolled GeoObject [feature.geometry](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/GeoObject-docpage/#param-feature.geometry)
	 */
	defaultGeometry?: IGeometry[][][][] | number[][] | object;
	/**
	 * GeoObject [feature.properties](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/GeoObject-docpage/#param-feature.properties)
	 */
	properties?: AnyObject | IDataManager;
	/**
	 * Uncontrolled GeoObject [feature.properties](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/GeoObject-docpage/#param-feature.properties)
	 */
	defaultProperties?: AnyObject | IDataManager;
	/**
	 * GeoObject [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/GeoObject-docpage/#param-options)
	 */
	options?: AnyObject;
	/**
	 * Uncontrolled GeoObject [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/GeoObject-docpage/#param-options)
	 */
	defaultOptions?: AnyObject;
}

const geoObjectDangerZoneProps = {
	// @ts-ignore
	modifyConstructor(Constructor) {
		/**
		 * The only difference between GeoObject and all the other,
		 * more specific GeoObject constructors (like Placemark, Circle,
		 * or Polyline) is the way in which the arguments are passed to
		 * the constructor. GeoObject expects `feature` with `geometry` and
		 * `properties` keys and all the other GeoObject constructors
		 * expect `geometry` and `properties` as separate arguments
		 *
		 * We will hack around this difference with our custom constructor.
		 * That way we can completely reuse GeoObject static methods.
		 */
		// @ts-ignore
		function GeoObjectConstructor(geometry, properties, options) {
			// @ts-ignore
			Constructor.call(this, { geometry, properties }, options);
		}

		GeoObjectConstructor.prototype = Constructor.prototype;

		return GeoObjectConstructor;
	},
};

export const GeoObject: React.FC<
	React.PropsWithChildren<
		GeoObjectProps & WithYMapsProps & WithInstanceRef & ErrorBoundaryProps & AnyObject
	>
> = props => {
	return <BaseGeoObject {...props} name="GeoObject" dangerZone={geoObjectDangerZoneProps} />;
};

export default withErrorBoundary(withParentContext(withYMaps(GeoObject, true, ['GeoObject'])));
