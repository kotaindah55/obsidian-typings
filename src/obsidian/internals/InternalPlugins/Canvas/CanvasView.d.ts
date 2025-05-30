import type {
    HoverPopover,
    TextFileView
} from 'obsidian';
import type { ViewType } from '../../../implementations/Constants/ViewType.d.ts';
import type { CanvasPluginInstance } from './CanvasPluginInstance.d.ts';
import type { CanvasViewCanvas } from './CanvasViewCanvas.d.ts';

/**
 * @todo Documentation incomplete.
 * @public
 * @unofficial
 */
export interface CanvasView extends TextFileView {
    /** @todo Documentation incomplete. */
    canvas: CanvasViewCanvas;

    /** @todo Documentation incomplete. */
    hoverPopover: null | HoverPopover;

    /** @todo Documentation incomplete. */
    plugin: CanvasPluginInstance;

    /**
     * Loads the local data of the canvas.
     */
    getLocalData(): unknown;

    /**
     * Get the current view type.
     */
    getViewType(): typeof ViewType.Canvas;

    /**
     * Saves the local data of the canvas.
     */
    saveLocalData(): void;
}
