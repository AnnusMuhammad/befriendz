import { useController } from "react-hook-form";

function CheckboxGroup({ options, control, name, indexKey, value }) {
  const { field } = useController({
    name,
    control,
    defaultValue: [],
  });
  return options.map((option, index) => (
    // <div className="flex flex-row  gap-2">
    <label
      className={`p-3 cursor-pointer px-6 rounded-t-3xl ${
        field.value.includes(option[indexKey])
          ? "bg-[#0493A3] text-white"
          : "bg-[#F5F5F5]"
      }`}
      key={index}
    >
      <input
        type="checkbox"
        id="choose-me"
        className="peer hidden"
        name={name}
        value={option[indexKey]}
        checked={field.value.includes(option[indexKey])}
        onChange={(e) => {
          const ckvalue = e.target.value;
          const isChecked = e.target.checked;
          if (isChecked) {
            field.onChange([...field.value, ckvalue]);
          } else {
            field.onChange(field.value.filter((v) => v !== ckvalue));
          }
        }}
      />
      {option[value]}
    </label>
    // </div>
  ));

  //  <label
  //         for="choose-me"
  //         className="select-none cursor-pointer rounded-lg border-2 border-gray-200
  //    py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "
  //       ></label>
  return options.map((option, index) => (
    <label
      className={`checkbox ${
        field.value.includes(option[indexKey]) ? "active" : ""
      }`}
      key={index}
    >
      <input
        type="checkbox"
        name={name}
        value={option[indexKey]}
        checked={field.value.includes(option[indexKey])}
        onChange={(e) => {
          const ckvalue = e.target.value;
          const isChecked = e.target.checked;
          if (isChecked) {
            field.onChange([...field.value, ckvalue]);
          } else {
            field.onChange(field.value.filter((v) => v !== ckvalue));
          }
        }}
      />
      {option[value]}
    </label>
  ));
}
export default CheckboxGroup;
