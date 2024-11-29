const AmountDisplay = ({ label, quantity, img }) => {
  return (
    <div className="grid grid-cols-2 grid-flow-row">
       {img && <img src={`/img${img}`} alt={label} className="h-20 row-span-2" />}
      <p className="text-xl">{quantity}</p>
      <p className="text-xl">{label}</p>
    </div>
  );
};

export default AmountDisplay;
