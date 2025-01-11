import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleLeftDrawer, selectLeftDrawerIsOpen } from "@/lib/features/leftDrawer/leftDrawerSlice";
import DarkModeToggleSwitch from "../DarkModeToggleSwitch";
import Link from "next/link";


const Test = () => {
  const dispatch = useAppDispatch();
  const currentLeftDrawer = useAppSelector(selectLeftDrawerIsOpen);

  return (
    <div style={{display: 'flex', justifyContent: 'end'}}>
      <button onClick={() => dispatch(toggleLeftDrawer())}>
        BTN
      </button>
      <DarkModeToggleSwitch />
      <Link href={'/home'}>HOME</Link>
    </div>
  )
}

export default Test