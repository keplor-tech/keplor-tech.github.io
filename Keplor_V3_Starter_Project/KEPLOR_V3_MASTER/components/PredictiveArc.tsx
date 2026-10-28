 "use client";

import PredictiveArcCanvas from "@/components/threeui/predictive-arc/PredictiveArcCanvas";
import { type MotionValue } from "framer-motion";

export default function PredictiveArc({ brightnessProgress }: { brightnessProgress?: MotionValue<number> } = {}) {
  return (
    <PredictiveArcCanvas
      mode="dark"
      speed={1.0}
      hue={0}
      saturation={1.0}
      brightness={1.0}
      brightnessProgress={brightnessProgress}
      className="arc-canvas"
      aria-hidden="true"
    />
  );
}
