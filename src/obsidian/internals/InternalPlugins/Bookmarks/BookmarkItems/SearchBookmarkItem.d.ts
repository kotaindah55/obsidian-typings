import type { BookmarkItem } from './BookmarkItem.d.ts';

/**
 * @todo Documentation incomplete.
 * @public
 * @unofficial
 */
export interface SearchBookmarkItem extends BookmarkItem {
    /** @todo Documentation incomplete. */
    query: string;

    /** @todo Documentation incomplete. */
    type: 'search';
}
