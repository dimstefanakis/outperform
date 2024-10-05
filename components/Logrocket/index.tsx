"use client";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";

function Logrocket() {
  if (typeof window !== "undefined") {
    LogRocket.init("outperform/outperform");
    // plugins should also only be initialized when in the browser
    setupLogRocketReact(LogRocket);
  }

  return null;
}

export default Logrocket;
