import type { InternalPluginName } from '../../implementations/Constants/InternalPluginName.d.ts';
import type { AudioRecorderPlugin } from './AudioRecorder/AudioRecorderPlugin.d.ts';
import type { BacklinkPlugin } from './Backlink/BacklinkPlugin.d.ts';
import type { BasesPlugin } from './Bases/BasesPlugin.d.ts';
import type { BookmarksPlugin } from './Bookmarks/BookmarksPlugin.d.ts';
import type { CanvasPlugin } from './Canvas/CanvasPlugin.d.ts';
import type { CommandPalettePlugin } from './CommandPalette/CommandPalettePlugin.d.ts';
import type { DailyNotesPlugin } from './DailyNotes/DailyNotesPlugin.d.ts';
import type { EditorStatusPlugin } from './EditorStatus/EditorStatusPlugin.d.ts';
import type { FileExplorerPlugin } from './FileExplorer/FileExplorerPlugin.d.ts';
import type { FileRecoveryPlugin } from './FileRecovery/FileRecoveryPlugin.d.ts';
import type { FootnotesPlugin } from './Footnotes/FootnotesPlugin.d.ts';
import type { GlobalSearchPlugin } from './GlobalSearch/GlobalSearchPlugin.d.ts';
import type { GraphPlugin } from './Graph/GraphPlugin.d.ts';
import type { MarkdownImporterPlugin } from './MarkdownImporter/MarkdownImporterPlugin.d.ts';
import type { NoteComposerPlugin } from './NoteComposer/NoteComposerPlugin.d.ts';
import type { OutgoingLinkPlugin } from './OutgoingLink/OutgoingLinkPlugin.d.ts';
import type { OutlinePlugin } from './Outline/OutlinePlugin.d.ts';
import type { PagePreviewPlugin } from './PagePreview/PagePreviewPlugin.d.ts';
import type { PropertiesPlugin } from './Properties/PropertiesPlugin.d.ts';
import type { PublishPlugin } from './Publish/PublishPlugin.d.ts';
import type { RandomNotePlugin } from './RandomNote/RandomNotePlugin.d.ts';
import type { SlashCommandPlugin } from './SlashCommand/SlashCommandPlugin.d.ts';
import type { SlidesPlugin } from './Slides/SlidesPlugin.d.ts';
import type { SwitcherPlugin } from './Switcher/SwitcherPlugin.d.ts';
import type { SyncPlugin } from './Sync/SyncPlugin.d.ts';
import type { TagPanePlugin } from './TagPane/TagPanePlugin.d.ts';
import type { TemplatesPlugin } from './Templates/TemplatesPlugin.d.ts';
import type { WebviewerPlugin } from './Webviewer/WebviewerPlugin.d.ts';
import type { WordCountPlugin } from './WordCount/WordCountPlugin.d.ts';
import type { WorkspacesPlugin } from './Workspaces/WorkspacesPlugin.d.ts';
import type { ZkPrefixerPlugin } from './ZkPrefixer/ZkPrefixerPlugin.d.ts';

/**
 * @todo Documentation incomplete.
 *
 * @public
 * @unofficial
 */
export type InternalPluginNamePluginsMapping = {
    [InternalPluginName.AudioRecorder]: AudioRecorderPlugin;
    [InternalPluginName.Backlink]: BacklinkPlugin;
    [InternalPluginName.Bases]: BasesPlugin;
    [InternalPluginName.Bookmarks]: BookmarksPlugin;
    [InternalPluginName.Webviewer]: WebviewerPlugin;
    [InternalPluginName.Canvas]: CanvasPlugin;
    [InternalPluginName.CommandPalette]: CommandPalettePlugin;
    [InternalPluginName.DailyNotes]: DailyNotesPlugin;
    [InternalPluginName.EditorStatus]: EditorStatusPlugin;
    [InternalPluginName.FileExplorer]: FileExplorerPlugin;
    [InternalPluginName.FileRecovery]: FileRecoveryPlugin;
    [InternalPluginName.Footnotes]: FootnotesPlugin;
    [InternalPluginName.GlobalSearch]: GlobalSearchPlugin;
    [InternalPluginName.Graph]: GraphPlugin;
    [InternalPluginName.MarkdownImporter]: MarkdownImporterPlugin;
    [InternalPluginName.NoteComposer]: NoteComposerPlugin;
    [InternalPluginName.OutgoingLink]: OutgoingLinkPlugin;
    [InternalPluginName.Outline]: OutlinePlugin;
    [InternalPluginName.PagePreview]: PagePreviewPlugin;
    [InternalPluginName.Properties]: PropertiesPlugin;
    [InternalPluginName.Publish]: PublishPlugin;
    [InternalPluginName.RandomNote]: RandomNotePlugin;
    [InternalPluginName.SlashCommand]: SlashCommandPlugin;
    [InternalPluginName.Slides]: SlidesPlugin;
    [InternalPluginName.Switcher]: SwitcherPlugin;
    [InternalPluginName.Sync]: SyncPlugin;
    [InternalPluginName.TagPane]: TagPanePlugin;
    [InternalPluginName.Templates]: TemplatesPlugin;
    [InternalPluginName.WordCount]: WordCountPlugin;
    [InternalPluginName.Workspaces]: WorkspacesPlugin;
    [InternalPluginName.ZkPrefixer]: ZkPrefixerPlugin;
};
