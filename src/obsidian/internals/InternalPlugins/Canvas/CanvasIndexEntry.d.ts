import type { CachedMetadata } from 'obsidian';
import type { CanvasEmbed } from './CanvasEmbed.d.ts';

/**
 * @todo Documentation incomplete.
 * @public
 * @unofficial
 */
export interface CanvasIndexEntry {
    /** @todo Documentation incomplete. */
    caches: Record<string, CachedMetadata>;

    /** @todo Documentation incomplete. */
    embeds: CanvasEmbed[];
}
