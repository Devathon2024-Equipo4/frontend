const AmountDisplay = ({ label, quantity }) => {
  return (
    <div>
      <p className="text-2xl">{label}</p>
      <p className="text-xl">{quantity}</p>
    </div>
  );
};

export default AmountDisplay;
