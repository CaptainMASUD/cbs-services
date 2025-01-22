import React, { useRef } from "react"
import SignatureCanvas from "react-signature-canvas"

function SignatureField({ onSave }) {
  const sigCanvas = useRef()

  const clear = () => {
    sigCanvas.current.clear()
  }

  const save = () => {
    onSave(sigCanvas.current.toDataURL())
  }

  return (
    <div className="border border-gray-300 p-2">
      <SignatureCanvas ref={sigCanvas} canvasProps={{ className: "sigCanvas" }} />
      <div className="mt-2">
        <button onClick={clear} className="bg-red-500 text-white px-2 py-1 rounded mr-2">
          Clear
        </button>
        <button onClick={save} className="bg-green-500 text-white px-2 py-1 rounded">
          Save
        </button>
      </div>
    </div>
  )
}

export default SignatureField

