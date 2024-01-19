import { Component, ReactNode, RefObject, createRef } from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  addBasePlugins,
  mobileAndTabletCheck,
} from "webgi";
type WebgiViewerProps = {};

class WebgiViewer extends Component<WebgiViewerProps> {
  private canvasRef: RefObject<HTMLCanvasElement>;

  constructor(props: WebgiViewerProps) {
    super(props);
    this.canvasRef = createRef();
  }

  render(): ReactNode {
    return (
      <div id="webgi-canvas-contaienr">
        <canvas id="webgi-canvas" ref={this.canvasRef}></canvas>
      </div>
    );
  }
}

export default WebgiViewer;
