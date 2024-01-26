import {
  // Use For Class Component
  // Component,
  // createRef,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useImperativeHandle,
  useState,
} from "react";
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
  // ITexture,
  // TweakpaneUiPlugin,
  // AssetManagerBasicPopupPlugin,
  CanvasSnipperPlugin,
  // IViewerPlugin,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import scrollAnimation from "@/lib/scroll-animation";

gsap.registerPlugin(ScrollTrigger);

// Functional Component
const WebgiViewer = forwardRef(function WebgiViewer(props, ref) {
  const [viewerRef, setViewerRef] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [targetRef, setTargetRef] = useState(null);
  const [positionRef, setPositionRef] = useState(null);

  const canvasRef = useRef(null);

  useImperativeHandle(ref, () => ({
    triggerPreview() {
      gsap.to(positionRef, {
        x: 13.04,
        y: -2.01,
        z: 2.29,
        duration: 2,
        onUpdate: () => {
          viewerRef.setDirty();
          cameraRef.positionTargetUpdated(true);
        },
      });
      gsap.to(targetRef, {
        x: 0.11,
        y: 0.0,
        z: 0.0,
        duration: 2,
      });
    },
  }));

  const memorizedScrollAnimation = (position, target, onUpdate) => {
    if (position && target && onUpdate) {
      scrollAnimation(position, target, onUpdate);
    }
  };

  const setupViewer = useCallback(async () => {
    let viewer = new ViewerApp({
      canvas: canvasRef.current,
    });

    setViewerRef(viewer);

    const manager = viewer.addPlugin(AssetManagerPlugin);
    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;
    let needsUpdate = true;

    setCameraRef(camera);
    setPositionRef(position);
    setTargetRef(target);

    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(BloomPlugin);
    await addBasePlugins(viewer);
    await viewer.addPlugin(CanvasSnipperPlugin);
    viewer.renderer.refreshPipeline();
    (await manager).addFromPath("scene.glb");
    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

    viewer.scene.activeCamera.setCameraOptions({
      controlsEnabled: false,
    });
    window.scrollTo(0, 0);
    const onUpdate = () => {
      needsUpdate = true;
      viewer.setDirty();
    };
    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });
    memorizedScrollAnimation(position, target, onUpdate);
  }, []);

  useEffect(() => {
    setupViewer();
  }, []);

  return (
    <div id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef} />
    </div>
  );
});

// Class Component
// class WebgiViewer extends Component {
//   constructor(props) {
//     super(props);
//     this.canvasRef = createRef();
//     this.viewer;
//     this.manager;
//     this.camera;
//     this.position;
//     this.target;
//     this.needsUpdate;

//     this.state = {
//       viewerRef: null,
//       targerRef: null,
//       cameraRef: null,
//       positionRef: null,
//     };

//     useImperativeHandle(ref, () => ({
//       triggerPreview() {
//         gsap.to(this.state.positionRef, {
//           x: 13.04,
//           y: -2.01,
//           z: 2.29,
//           duration: 2,
//           onUpdate:() => {
//             this.state.viewerRef.setDirty();
//             this.state.cameraRef.positionTargetUpdated(true)
//           }
//         });
//       },
//     }));
//   }

//   componentDidMount() {
//     this.setupViewer();
//   }

//   memorizedScrollAnimation(position, target, onUpdate) {
//     if (position && target && onUpdate) {
//       scrollAnimation(position, target, onUpdate);
//     }
//   }

//   async setupViewer() {
//     if (this.canvasRef.current) {
//       this.viewer = new ViewerApp({
//         canvas: this.canvasRef.current,
//       });
//       this.manager = this.viewer.addPlugin(AssetManagerPlugin);
//       this.camera = this.viewer.scene.activeCamera;
//       this.position = this.camera.position;
//       this.target = this.camera.target;

//       await this.viewer.addPlugin(GBufferPlugin);
//       await this.viewer.addPlugin(new ProgressivePlugin(32));
//       await this.viewer.addPlugin(new TonemapPlugin(true));
//       await this.viewer.addPlugin(GammaCorrectionPlugin);
//       await this.viewer.addPlugin(SSRPlugin);
//       await this.viewer.addPlugin(SSAOPlugin);
//       await this.viewer.addPlugin(BloomPlugin);
//       // await addBasePlugins(this.viewer);
//       // await this.viewer.addPlugin(CanvasSnipperPlugin);
//       this.viewer.renderer.refreshPipeline();
//       (await this.manager).addFromPath("scene.glb");
//       this.viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
//       this.viewer.scene.activeCamera.setCameraOptions({
//         controlsEnabled: false,
//       });

//       window.scrollTo(0, 0);
//       this.onUpdate = () => {
//         this.needsUpdate = true;
//         this.viewer.setDirty();
//       };

//       this.viewer.addEventListener("preFrame", () => {
//         if (this.needsUpdate) {
//           this.camera.positionTargetUpdated(true);
//           this.needsUpdate = false;
//         }
//       });

//       this.memorizedScrollAnimation(this.position, this.target, this.onUpdate);
//     }
//   }

//   render() {
//     return (
//       <div id="webgi-canvas-container">
//         <canvas id="webgi-canvas" ref={this.canvasRef} />
//       </div>
//     );
//   }
// }

// Display Error setting
// const ForwardedWebgiViewer = forwardRef((props, ref) => {
//   return <WebgiViewer {...props} ref={ref} />;
// });

// ForwardedWebgiViewer.displayName = "ForwardedWebgiViewer";

export default WebgiViewer;
