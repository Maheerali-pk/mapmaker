import * as React from "react";
import { Component, useState, useRef, useReducer, Dispatch } from "react";
import * as RB from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import Input, { InputProps } from "./Input";
import { FormGroup } from "react-bootstrap";
import ReactDOM from "react-dom";
// import { Any } from "../Utils/Basic";
//import "../../../Styles/main.css";
import "./Form.css";
import Dialog from "../Dialog/Dialog";
import {
   DialogName,
   GlobalContext
} from "../../../Contexts/Globalx/GlobalContext";

import { hot } from "react-hot-loader/root";
//Form Props
export interface FormProps<T extends string = string> {
   inputs: InputProps<T>[];
   onSubmit: (
      data: { [K in T]: string | File },
      action: Dispatch<IFormReducerAction<T>>
   ) => string | undefined;
   submitButton: {
      text: string;
      className?: string;
      otherProps?: { [key: string]: any };
   };
   title: string;
   id: DialogName;
}

//Submit button
export interface SubmitButtonProps {}

type IState<T extends string = string> = {
   error: string;
   inputsObject: { [K in T]: string | File };
};
type ActionData<T extends string = string> = { name: T; value: string | File };

export interface IFormReducerAction<T extends string = string> {
   name: "resetInputs" | "setError" | "changeValue";
   data?: string | ActionData<T>;
}

const initalState: IState = { error: "", inputsObject: {} };
const reducer = (
   { error, inputsObject }: IState,
   { name, data }: IFormReducerAction
): IState => {
   switch (name) {
      case "resetInputs":
         return {
            error,
            inputsObject: Object.fromEntries(
               Object.entries(inputsObject).map(([name, value]) => [name, ""])
            )
         };
      case "setError": {
         return { inputsObject, error: data as string };
      }
      case "changeValue": {
         data = data as ActionData;
         inputsObject = { ...inputsObject, [data.name]: data.value };
         return { inputsObject, error };
      }
      default:
         return { inputsObject, error };
   }
};

const Form = <T extends string = string>({
   inputs,
   onSubmit,
   submitButton,
   title,
   id
}: FormProps<T>) => {
   //const initialState = Object.fromEntries(inputs.map(({name, initalValue}) => [name, initalValue || ""]))
   const [{ error, inputsObject }, dispatchForm] = useReducer(
      reducer,
      initalState
   );

   const [_, dispatchGlobal] = React.useContext(GlobalContext);

   //To control inputs
   const inputChangeHandler = React.useCallback((e: React.ChangeEvent) => {
      const input = e.target as HTMLInputElement;
      console.log(input.value);
      dispatchForm({
         name: "changeValue",
         data: {
            name: input.name,
            value:
               input.type === "file"
                  ? input?.files![0]
                  : (input.value as string)
         }
      });
   }, []);

   React.useEffect(() => {
      inputs.forEach(inp => {
         let valueToBeSet = "";
         if (inp.initalValue) {
            valueToBeSet = inp.initalValue;
         } else if (inp.type === "select") {
            valueToBeSet = inp.options?.[0] as string;
         }
         dispatchForm({
            name: "changeValue",
            data: { name: inp.name, value: valueToBeSet }
         });
      });
   }, [inputs]);
   //To create input
   const renderInput = React.useCallback(
      (input: InputProps) => (
         <Input
            {...input}
            key={input.name}
            value={inputsObject[input.name] as string}
            inputChangeHandler={inputChangeHandler}
            dispatchForm={dispatchForm}
         ></Input>
      ),
      [inputsObject]
   );

   const inputElements = React.useMemo(() => inputs.map(x => renderInput(x)), [
      inputs,
      renderInput
   ]);

   //Form submission
   const handleFormSubmit = () => {
      const error = onSubmit(
         inputsObject as { [K in T]: string | File },
         dispatchForm
      );

      if (error) {
         if (error === "hide") {
            dispatchForm({ name: "setError", data: "" });
            dispatchGlobal({ name: "hide-dialog", data: id });
         } else {
            dispatchForm({ name: "setError", data: error });
         }
      } else {
         dispatchForm({ name: "setError", data: "" });
      }
   };

   //Render
   return (
      <Dialog id={id} title={title}>
         <div className="d-flex flex-column p-3 justify-content-center form">
            <div className="text-danger form-error">{error}</div>
            <div className="form-group">{inputElements}</div>
            <button
               {...submitButton.otherProps}
               onClick={e => handleFormSubmit()}
               className={`btn bg-l-green ${submitButton.className}`}
            >
               {submitButton.text}
            </button>
         </div>
      </Dialog>
   );
};

export default hot(Form);
