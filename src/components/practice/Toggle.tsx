import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { LayoutForTeatComponent } from './LayoutForTeatComponent';

export const Toggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <>
      <Switch
        checked={isEnabled}
        onChange={setIsEnabled}
        className={`${
          isEnabled ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex items-center h-6 rounded-full w-11 `}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            isEnabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block w-4 h-4 transform bg-white rounded-full `}
        />
      </Switch>
      <LayoutForTeatComponent>
        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-xl ">
          Save changes
        </button>
      </LayoutForTeatComponent>
    </>
  );
};
