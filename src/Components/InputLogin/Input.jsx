const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <section>
      <input
        value={value}
        onChange={onchange}
        type={type}
        placeholder={placeholder}
      />
    </section>
  );
};

export default Input;
