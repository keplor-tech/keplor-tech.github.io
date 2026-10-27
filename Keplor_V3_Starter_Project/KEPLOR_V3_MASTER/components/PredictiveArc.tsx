 "use client";

import PredictiveArcCanvas from "@/components/threeui/predictive-arc/PredictiveArcCanvas";

export default function PredictiveArc() {
  return (
    <PredictiveArcCanvas
      mode="dark"
      speed={1.0}
      hue={0}
      saturation={1.0}
      brightness={1.0}
      className="arc-canvas"
      aria-hidden="true"
    />
  );
}
