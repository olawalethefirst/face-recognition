import { PropsWithChildren } from "react";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

// Libraries
import ParticlesBg from "particles-bg";

export default function RouteWrapper({ children }: PropsWithChildren<{}>) {
  return (
    <div>
      <header className="section header">
        <a href="/">
          <Logo />
        </a>
        <Navigation />
      </header>

      {children}

      {/* particle liibrary background */}
      <ParticlesBg type="cobweb" bg />
    </div>
  );
}
