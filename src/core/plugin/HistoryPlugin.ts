import { fabric } from 'fabric';
import Editor from '../index';
import { ref } from 'vue';
import { useRefHistory } from '@vueuse/core';
// type IEditor = Editor;
class HistoryPlugin {
  public canvas: fabric.Canvas;
  public editor: IEditor;
  static pluginName = 'HistoryPlugin';
  static apis = ['undo', 'redo', 'getHistory'];
  static events = ['historyInitSuccess'];
  public hotkeys: string[] = ['ctrl+z'];
  history: any;
}