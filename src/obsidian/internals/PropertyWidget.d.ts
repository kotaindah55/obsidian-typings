import type { Component } from 'obsidian';
import type { PropertyEntryData } from './PropertyEntryData.d.ts';
import type { PropertyRenderContext } from './PropertyRenderContext.d.ts';

/**
 * @todo Documentation incomplete.
 * @public
 * @unofficial
 */
export interface PropertyWidget<T> {
    /**
     * Lucide-dev icon associated with the widget.
     */
    icon: string;

    /**
     * Returns the I18N name of the widget.
     */
    name: string;

    /**
     * Reserved keys for the widget.
     */
    reservedKeys?: string[];

    /**
     * Identifier for the widget.
     */
    type: string;

    /**
     * Get the default value for the property widget.
     * @deprecated Removed in 1.9.0.
     */
    default(): T;

    /**
     * Render function for the widget on field container given context and data.
     * @deprecated Removed in 1.9.0.
     */
    render(containerEl: HTMLElement, data: PropertyEntryData<T>, context: PropertyRenderContext): Component | void;

    /**
     * Render function for the widget on field container given context and data.
     * @remarks Added in 1.9.0.
     */
    render(containerEl: HTMLElement, data: T, context: PropertyRenderContext): Component | void;

    /**
     * Validate whether the input value to the widget is correct.
     */
    validate(value: unknown): boolean;
}
