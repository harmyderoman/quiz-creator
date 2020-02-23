import * as React from "react";

const AddVariant = ({ onAddVariantHandlerCallback, questionId }) => {
  const [addVariant, setAddVariant] = React.useState("");
  const inputRef = React.useRef();
  const onSubmitHandler = e => {
    e.preventDefault();
    onAddVariantHandlerCallback(addVariant, questionId);
    setAddVariant("");
    inputRef.current.focus();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        onChange={e => setAddVariant(e.currentTarget.value)}
        ref={inputRef}
        placeholder="Variant title"
        className="add-title-quiz-input"
        value={addVariant}
      />
      <button type="submit" className="add-quiz-title-button blue">
        Add variant
      </button>
    </form>
  );
};

export default AddVariant;