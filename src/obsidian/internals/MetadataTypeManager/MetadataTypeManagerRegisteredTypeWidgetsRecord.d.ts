import type { PropertyWidget } from '../PropertyWidget.d.ts';
import type { PropertyWidgetType } from '../PropertyWidgetType.d.ts';

/**
 * @todo Documentation incomplete.
 * @public
 * @unofficial
 */
export interface MetadataTypeManagerRegisteredTypeWidgetsRecord
    extends Record<PropertyWidgetType, PropertyWidget<unknown>>
{}
