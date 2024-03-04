import React from "react";
import AsyncSelect from "react-select/async";

const CustomAsyncSelect = ({
  defaultOptions,
  loadOptions,
  onChange,
  defaultValue,
  isMulti,
}) => {
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#283046",
      borderColor: "#404656",
      color: "white",
    }),
    option: (styles) => ({ ...styles, color: "#283046" }),
    input: (styles) => ({ ...styles, color: "white" }),
    placeholder: (styles) => ({ ...styles }),
    singleValue: (styles) => ({ ...styles, color: "white" }),
    valueContainer: (styles) => ({ ...styles, color: "#283046" }),
  };

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions={defaultOptions}
      loadOptions={loadOptions}
      onChange={onChange}
      defaultValue={defaultValue}
      styles={true ? colourStyles : ""}
      isMulti={isMulti}
      isClearable={true}
    />
  );
};

export default CustomAsyncSelect;
