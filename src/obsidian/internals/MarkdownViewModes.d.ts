import type {
    MarkdownEditView,
    MarkdownPreviewView
} from 'obsidian';

/**
 * @todo Documentation incomplete.
 * @public
 * @unofficial
 */
export interface MarkdownViewModes {
    /** @todo Documentation incomplete. */
    preview: MarkdownPreviewView;

    /** @todo Documentation incomplete. */
    source: MarkdownEditView;
}
