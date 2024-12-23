/* eslint-disable react/prop-types */
import imagLoading from '../../assets/images/Animation - 1734818008614.gif';

export function ModelBrand({ setShowModel, specificBrand, loading }) {
  return (
    <>
      {loading ? (
        <img src={imagLoading} alt="" />
      ) : (
        <div className="rounded-lg mx-2 animate-model p-3 items-center bg-slate-300 justify-center gap-8">
          <div>
            <i
              onClick={() => {
                setShowModel(false);
              }}
              className="fa-solid fa-x text-xl hover:text-red-500 duration-300 transition-colors cursor-pointer  text-end w-full mb-3"
            ></i>
            <div className="border-y-[1.5px] border-slate-200 py-5 border-solid flex items-center justify-center gap-20">
              {specificBrand && (
                <>
                  <article>
                    <h1 className="text-4xl text-primary-500 font-bold ">
                      {specificBrand.name}
                      {specificBrand.id}
                    </h1>
                    <h2 className="text-lg">{specificBrand.slug}</h2>
                  </article>
                  <div className="rounded-md overflow-hidden">
                    <img
                      src={specificBrand.image}
                      alt=""
                      className="w-full min-w-[150px]"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
