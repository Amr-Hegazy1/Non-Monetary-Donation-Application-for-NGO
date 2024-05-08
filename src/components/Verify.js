import React, { useEffect, useRef, useReducer,useState } from "react";
import "./Verify.css";
import { message } from 'antd';

function doSubmit(submittedValues) {
  const hardcodedCode = "000000"; // This is the hardcoded verification code
  const submittedCode = submittedValues.join("");

  console.log(`Submitted: ${submittedCode}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (submittedCode === hardcodedCode) {
        resolve();
      } else {
        reject();
      }
    }, 1500);
  });
}

function clampIndex(index) {
  if (index > 6) {
    return 6;
  } else if (index < 0) {
    return 0;
  } else {
    return index;
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "INPUT":
      return {
        ...state,
        inputValues: [
          ...state.inputValues.slice(0, action.payload.index),
          action.payload.value,
          ...state.inputValues.slice(action.payload.index + 1)
        ],
        focusedIndex: clampIndex(state.focusedIndex + 1)
      };

    case "BACK":
      return {
        ...state,
        focusedIndex: clampIndex(state.focusedIndex - 1)
      };

    case "PASTE":
      return {
        ...state,
        inputValues: state.inputValues.map(
          (_, index) => action.payload.pastedValue[index] || ""
        )
      };

    case "FOCUS":
      return {
        ...state,
        focusedIndex: action.payload.focusedIndex
      };

    case "VERIFY":
      return {
        ...state,
        status: "pending"
      };

    case "VERIFY_SUCCESS":
      return {
        ...state,
        status: "idle"
      };

      case "VERIFY_FAILURE":
        return {
          ...state,
          status: "error"
        };

    default:
      throw new Error("unknown action");
  }
}

const initialState = {
  inputValues: Array(6).fill(""),
  focusedIndex: 0,
  status: "idle"
};

export default function VerifyCodePage() {
  const [{ inputValues, focusedIndex, status }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [errorMessage, setErrorMessage] = useState(null);

  function handleInput(index, value) {
    dispatch({ type: "INPUT", payload: { index, value } });
  }

  function handleBack() {
    dispatch({ type: "BACK" });
  }

  function handlePaste(pastedValue) {
    dispatch({ type: "PASTE", payload: { pastedValue } });

    if (pastedValue.length === 6) {
      dispatch({ type: "VERIFY" });
      doSubmit(pastedValue.split("")).then(() =>
        dispatch({ type: "VERIFY_SUCCESS" })
      );
    }
  }

  function handleFocus(focusedIndex) {
    dispatch({ type: "FOCUS", payload: { focusedIndex } });
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    dispatch({ type: "VERIFY" });
    doSubmit(inputValues)
      .then(() => {
        message.success('Verification code is correct.');
        dispatch({ type: "VERIFY_SUCCESS" });
      })
      .catch((error) => {
        message.error('Invalid verification code. Please try again.');
        dispatch({ type: "VERIFY_FAILURE" });
      });
  }

  // update the style of body to have display grid
  useEffect(() => {
    document.body.style.display = "grid";
    
    return () => {
      document.body.style.display = "";
      
    };
  }, []);

  return (
    <div className="text-center">
      <img src="logo.png" style={{ width: '185px' }} alt="logo" />
    <h1 style={{ textAlign: 'center' , color:'#602b37 '}}>Please enter the verification code</h1>
    <h2 style={{ textAlign: 'center' , color:'#602b37' }}>A code has been sent to your email *****@*mail.com</h2>
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        {inputValues.map((value, index) => {
          return (
            <Input
              key={index}
              index={index}
              value={value}
              onChange={handleInput}
              onBackspace={handleBack}
              onPaste={handlePaste}
              isFocused={index === focusedIndex}
              onFocus={handleFocus}
              isDisabled={status === "pending"}
            />
          );
        })}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
      <button href= '/ChangePassword' style={{background:'#602b37'}}disabled={status === "pending" }>
        {status === "pending" ? "Verifying..." : "Verify"}
      </button>
    </form>
    </div>
  );
}

function Input({
  index,
  value,
  onChange,
  onPaste,
  onBackspace,
  isFocused,
  onFocus,
  isDisabled
}) {
  const ref = useRef();
  useEffect(() => {
    requestAnimationFrame(() => {
      // console.log(
      //   ref.current,
      //   document.activeElement,
      //   ref.current !== document.activeElement
      // );
      if (ref.current !== document.activeElement && isFocused) {
        ref.current.focus();
      }
    });
  }, [isFocused]);

  function handleChange(e) {
    onChange(index, e.target.value);
  }

  function handlePaste(e) {
    onPaste(e.clipboardData.getData("text"));
  }

  function handleKeyDown(e) {
    if (e.key === "Backspace") {
      onBackspace();
    }
  }

  function handleFocus(e) {
    e.target.setSelectionRange(0, 1);
    onFocus(index);
  }

  return (
    <input
      ref={ref}
      type="text"
      value={value}
      onChange={handleChange}
      onPaste={handlePaste}
      onKeyDown={handleKeyDown}
      maxLength="1"
      onFocus={handleFocus}
      disabled={isDisabled}
    />
  );
}
