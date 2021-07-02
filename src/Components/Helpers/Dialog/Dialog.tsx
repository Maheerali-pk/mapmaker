import * as React from "react";
import { Component } from "react";
import "./Dialog.css";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import {
   GlobalContext,
   DialogName
} from "../../../Contexts/Globalx/GlobalContext";
export interface DialogProps {
   id: DialogName;
   title: string;
}
const Dialog: React.SFC<DialogProps> = ({ children, id, title }) => {
   const [_, dispatchGlobal] = React.useContext(GlobalContext);
   const onDialogClose = React.useCallback(() => {
      console.log("on close called", id);
      dispatchGlobal({ name: "hide-dialog", data: id });
   }, [id, dispatchGlobal]);
   return (
      <Draggable handle=".dialog-title" allowAnyClick={false}>
         <Resizable
            defaultSize={{ width: "50%", height: "auto" }}
            className="dialog d-flex flex-column position-absolute zi-1"
         >
            <div className="dialog-head bg-secondary d-flex cursor">
               <span className="dialog-title cursor d-flex w-100 justify-content-center align-items-center">
                  {title}
               </span>
               <span
                  className="px-3 py-2 dialog-close-btn"
                  onClick={onDialogClose}
               >
                  X
               </span>
            </div>
            <div className="dialog-body no-cursor">{children}</div>
         </Resizable>
      </Draggable>
   );
};

export default Dialog;
