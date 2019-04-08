interface HTMLCanvasElement extends HTMLElement {
  transferControlToOffscreen(): OffscreenCanvas;
}

interface OffscreenCanvasRenderingContext2D extends CanvasState, CanvasTransform, CanvasCompositing,
  CanvasImageSmoothing, CanvasFillStrokeStyles, CanvasShadowStyles, CanvasFilters, CanvasRect, CanvasDrawPath,
  CanvasUserInterface, CanvasText, CanvasDrawImage, CanvasImageData, CanvasPathDrawingStyles,
  CanvasTextDrawingStyles, CanvasPath {
  readonly canvas: OffscreenCanvas;
}

declare var OffscreenCanvasRenderingContext2D: {
  prototype: OffscreenCanvasRenderingContext2D;
  new(): OffscreenCanvasRenderingContext2D;
};

interface OffscreenCanvas extends EventTarget {
  width: number;
  height: number;

  getContext(contextId: '2d', contextAttributes?: CanvasRenderingContext2DSettings): OffscreenCanvasRenderingContext2D | null;

  getContext(contextId: 'webgl', contextAttributes?: WebGLContextAttributes): WebGLRenderingContext | null;

  getContext(contextId: 'webgl2', contextAttributes?: WebGLContextAttributes): WebGL2RenderingContext | null;

  getContext(contextId: 'bitmaprenderer', contextAttributes?: WebGLContextAttributes): ImageBitmapRenderingContext | null;

  convertToBlob(type: string | 'image/jpeg' | 'image/webp', quality: number): Blob;

  transferToImageBitmap(): ImageBitmap;
}

declare var OffscreenCanvas: {
  prototype: OffscreenCanvas;
  new(width: number, height: number): OffscreenCanvas;
};

interface Worker extends EventTarget, AbstractWorker {
  postMessage(message: any, transfer?: Array<Transferable | OffscreenCanvas>): void;
}

interface ServiceWorker extends EventTarget, AbstractWorker {
  postMessage(message: any, transfer?: Array<Transferable | OffscreenCanvas>): void;
}

interface MessagePort extends EventTarget {
  postMessage(message: any, transfer?: Array<Transferable | OffscreenCanvas>): void;
}

interface Window extends EventTarget, WindowTimers, WindowSessionStorage, WindowLocalStorage, WindowConsole,
  GlobalEventHandlers, IDBEnvironment, WindowBase64, GlobalFetch, WindowOrWorkerGlobalScope, WindowEventHandlers {
  postMessage(message: any, targetOrigin: string, transfer?: Array<Transferable | OffscreenCanvas>): void;
}

declare function postMessage(message: any, targetOrigin: string, transfer?: Array<Transferable | OffscreenCanvas>): void;
