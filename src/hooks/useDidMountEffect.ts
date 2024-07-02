/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

/** 처음 랜더링 되었을 때 실행을 막고 변수가 변경될 때만 실행되는 useEffect입니다. */
export const useDidMountEffect = (func: () => void, deps: Array<any>) => {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    if (didMount) {
      func();
    } else {
      setDidMount(true);
    }
  }, deps);
};
