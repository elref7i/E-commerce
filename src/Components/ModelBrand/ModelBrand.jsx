import { useContext } from 'react';
import { RelatedContext } from '../../context/Related.context';

export function ModelBrand({ setShowModel }) {
  const { specificBrand } = useContext(RelatedContext);

  console.log(specificBrand);

  // const { name, slug, image } = specificBrand;

  return (
    <>
      <div className="rounded-lg animate-model p-3 items-center bg-slate-300 justify-center gap-8">
        <i
          onClick={() => {
            setShowModel(false);
          }}
          className="fa-solid fa-x text-xl hover:text-red-500 duration-300 transition-colors cursor-pointer  text-end w-full mb-3"
        ></i>
        <div className="border-y-[1.5px] border-slate-200 py-5 border-solid flex items-center justify-center gap-20">
          {specificBrand ? (
            <>
              <article>
                <h1 className="text-4xl text-primary-500 font-bold ">
                  {specificBrand.name}
                </h1>
                <h2 className="text-lg">{specificBrand.slug}</h2>
              </article>
              <div className="rounded-md overflow-hidden">
                <img src={specificBrand.image} alt="" className="w-full" />
              </div>
            </>
          ) : (
            <p>Waiting</p>
          )}
        </div>
      </div>
    </>
  );
}
