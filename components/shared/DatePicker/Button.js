import { useRef } from "react";
import { useButton, useFocusRing, mergeProps } from "react-aria";

export function CalendarButton(props) {
  let ref = useRef();
  let { buttonProps } = useButton(props, ref);
  let { focusProps, isFocusVisible } = useFocusRing();
  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      className={`p-2 rounded-full ${props.isDisabled ? "text-gray-400" : ""} ${
        !props.isDisabled ? "hover:bg-violet-100 active:bg-violet-200" : ""
      } outline-none ${
        isFocusVisible ? "ring-2 ring-offset-2 ring-purple-600" : ""
      }`}
    >
      {props.children}
    </button>
  );
}

export function FieldButton(props) {
  let ref = useRef();
  let { buttonProps, isPressed } = useButton(props, ref);
  return (
    <button
      {...buttonProps}
      ref={ref}
      className={`px-2 transition-colors rounded-r-md outline-none`}
    >
      {props.children}
    </button>
  );
}
