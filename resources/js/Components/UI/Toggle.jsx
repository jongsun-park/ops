import { Switch } from "@headlessui/react";

const Toggle = ({ enabled, setEnabled, label }) => {
  //   const [enabled, setEnabled] = useState(false);

  return (
    <Switch.Group>
      <div className="flex items-center space-x-2">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">{label}</span>
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
        <Switch.Label className="min-w-[10ch] text-sm font-bold uppercase ">
          {label}
        </Switch.Label>
      </div>
    </Switch.Group>
  );
};

export default Toggle;
