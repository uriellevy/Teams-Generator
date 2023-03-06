import React, { useState } from 'react';

const useBoolean = (initialState = false) => {
    const [bool, setBool] = useState<boolean>(initialState);

    const trueHandler = () => setBool(true);

    const falseHandler = () => setBool(false);

    const toggleHandler = () => setBool(!bool);

  return [
    bool,
    {
        setTrue: trueHandler,
        setFalse: falseHandler,
        setToggle: toggleHandler,
    }
  ] as const
}

export default useBoolean