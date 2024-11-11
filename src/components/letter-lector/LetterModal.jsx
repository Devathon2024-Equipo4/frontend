import React from 'react'

const LetterModal = ({ content, onClose }) => {
  if (!content) return null;

  return (
    <div className="fixed inset-0 bg-plantation bg-opacity-50 flex justify-center items-center">
      <div className="bg-loblolly p-4 rounded-lg shadow-lg w-10/12 sm:w-1/2">
        <h2 className="text-xl text-plantation font-bold mb-2">Detalle</h2>
        <p>{content}</p>
        <button
          className="mt-4 px-4 py-2 bg-plantation hover:bg-plantation/50 text-white rounded-lg"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
export default LetterModal;