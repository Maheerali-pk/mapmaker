import * as React from "react";
import { Component, ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import * as RB from "react-bootstrap";
import jest from "jest";
import { IFormReducerAction } from "./Form";
import { capitalize } from "../../../utils/Basic";

export type InputProps<T extends string = string> = {
   initalValue?: string;
   label?: string;
   name: T;
   type?:
      | "text"
      | "password"
      | "file"
      | "select"
      | "number"
      | "color"
      | "checkbox"
      | "range";
   otherProps?: { [key: string]: any };
   options?: string[];
   inputChangeHandler?: Function;
   min?: number;
   max?: number;
   step?: number;
};

export const test = 33;

const Input: React.SFC<InputProps & {
   value?: string;
   dispatchForm: React.Dispatch<IFormReducerAction<string>>;
}> = ({
   initalValue,
   label,
   name,
   type = "text",
   otherProps = {},
   value,
   inputChangeHandler,
   options,
   min,
   max,
   step
}) => {
   // console.log(`re rendering ${name}`);

   const displayInRow =
      type === "color" || type === "range" || type === "checkbox";
   //const Element = React.useMemo()
   if (type === "checkbox") {
      return (
         <div
            className={`mt-3 text-left ${displayInRow &&
               "d-flex align-items-center"}`}
         >
            <input
               className={`form-control`}
               onChange={e => inputChangeHandler && inputChangeHandler(e)}
               id={name}
               type={type}
               name={name}
               min={min}
               max={max}
               step={step}
            ></input>
            <span className="ml-3 align-middle">
               {label || capitalize(name)}
            </span>
         </div>
      );
   }
   console.log("re rendering", name);
   return type === "select" ? (
      <div className="mt-3 text-left">
         <RB.Form.Label className="">
            {label || capitalize(name)}:{" "}
         </RB.Form.Label>
         <select
            name={name}
            id={name}
            {...otherProps}
            onChange={e => inputChangeHandler && inputChangeHandler(e)}
            value={value}
            className="form-control"
            defaultValue="x"
         >
            {options?.map(x => (
               <option key={x} value={x}>
                  {x}
               </option>
            ))}
         </select>
      </div>
   ) : (
      <div
         className={`mt-3 text-left ${displayInRow &&
            "d-flex align-items-center"}`}
      >
         <RB.Form.Label>{label || capitalize(name)}: </RB.Form.Label>
         <input
            className={`form-control`}
            onChange={e => inputChangeHandler && inputChangeHandler(e)}
            id={name}
            type={type}
            name={name}
            min={min}
            max={max}
            step={step}
            {...(type === "file" ? {} : { value: value })}
            {...otherProps}
         ></input>
         {type === "range" ? (
            <span className="bg-skin px-3 py-1 rounded-lg text-center ml-3 align-middle input-badge">
               {value || initalValue}
            </span>
         ) : null}
      </div>
   );
};
export default React.memo(Input);
