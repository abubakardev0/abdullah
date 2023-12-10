"use client";

import { useRef } from "react";
import { useDatePickerState } from "react-stately";
import { useDatePicker } from "react-aria";
import { FieldButton } from "./Button";
import { Calendar } from "./Calendar";
import { DateField } from "./DateField";
import { ChevronUp, AlertTriangle } from "lucide-react";
import { today, getLocalTimeZone } from "@internationalized/date";

export function DatePicker(props) {
  const obj = {
    ...props,
    minValue: today(getLocalTimeZone()),
  };
  let state = useDatePickerState(obj);
  let ref = useRef();

  let { groupProps, labelProps, fieldProps, buttonProps, calendarProps } =
    useDatePicker(props, state, ref);

  return (
    <div className="relative inline-flex flex-col items-center text-left">
      <span {...labelProps} className="text-sm text-gray-800">
        {props.label}
      </span>
      <div
        {...groupProps}
        ref={ref}
        className="flex group border-2 border-black w-56 z-[1] -mb-6 bg-white rounded-md overflow-hidden divide-x-2 divide-black"
      >
        <div className="flex-1 p-2 flex items-center justify-between">
          <DateField {...fieldProps} />
          {state.validationState === "invalid" && (
            <AlertTriangle className="w-5 h-5 text-red-500" />
          )}
        </div>
        <FieldButton {...buttonProps} isPressed={state.isOpen}>
          <ChevronUp className="w-5 h-5 text-gray-700" />
        </FieldButton>
      </div>
      {state.isOpen ? (
        <div className="border-2 px-16 border-black rounded-md pt-10">
          <Calendar {...calendarProps} />
        </div>
      ) : null}
    </div>
  );
}
