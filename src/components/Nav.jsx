import { useState } from "react";
import Btn from "./Btn";
import OptionNav from "./OptionNav";

export function Nav({ options, logo }) {
  const [enabledOpt, setEnabledOpt] = useState(false);
  return (
    <nav className="flex fixed w-full border-b-2 justify-between p-3 bg-white">
      <div className="nav-left flex">
        <img
          src={logo}
          alt="logo"
          width="40"
          height="40"
          onClick={() => setEnabledOpt(!enabledOpt)}
        />
        <OptionNav opt={options} enabled={enabledOpt} />
      </div>
      <div class="nav-right">
        <Btn text="Ingresar" style="primary" />
        <Btn text="Únete" style="secondary" />
      </div>
    </nav>
  );
}
