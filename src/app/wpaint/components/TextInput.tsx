interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const TextInput = ({ value, onChange, placeholder }: TextInputProps) => (
  <div className="mt-4 px-4 2xl:w-2/3 mx-auto flex justify-center">
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-400 px-4 py-2 rounded w-full sm:w-1/2 text-black"
    />
  </div>
);

export default TextInput;
