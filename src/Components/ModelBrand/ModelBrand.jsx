import imagLoading from '../../assets/images/Animation - 1734818008614.gif';

// eslint-disable-next-line react/prop-types
export function ModelBrand({ setShowModal, specificBrand, loading }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 mx-auto animate-scale-up">
      {loading ? (
        <img src={imagLoading} alt="Loading" className="mx-auto" />
      ) : (
        specificBrand && (
          <>
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-primary-500">
                {specificBrand.name}
              </h1>
              <i
                onClick={() => setShowModal(false)}
                className="fa-solid fa-xmark text-2xl text-gray-500 cursor-pointer hover:text-red-500 transition-colors"
              ></i>
            </div>
            <div className="my-4">
              <img
                src={specificBrand.image}
                alt={specificBrand.name}
                className="w-full h-48 object-contain rounded-md"
              />
            </div>
            <p className="text-gray-600">{specificBrand.slug}</p>
          </>
        )
      )}
    </div>
  );
}
