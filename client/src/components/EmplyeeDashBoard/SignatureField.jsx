import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

function SignatureField({ onSave }) {
  const sigCanvas = useRef();

  const clear = () => {
    sigCanvas.current.clear();
  };

  const save = () => {
    onSave(sigCanvas.current.toDataURL());
  };

  return (
    <div className="w-full border border-gray-300 p-4">
      <div className="relative w-full h-48 bg-gray-100 rounded-md">
        {/* Signature Canvas */}
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={{
            className: "absolute w-full h-full",
          }}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={clear}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Clear
        </button>
        <button
          onClick={save}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default SignatureField;
