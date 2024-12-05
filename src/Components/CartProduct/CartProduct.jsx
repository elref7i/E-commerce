/* eslint-disable react/prop-types */
export default function CartProduct({ cartInfo }) {
  console.log(cartInfo);
  const { category, title, imageCover } = cartInfo.product;

  return (
    <>
      <div className="flex items-center gap-0 sm:gap-5  justify-center sm:justify-between shadow-md p-3 flex-wrap relative">
        <div className="flex gap-5 items-center ">
          <div className="">
            <img
              src={imageCover}
              className="w-[150px] h-full object-cover"
              alt=""
            />
          </div>
          <article>
            <h2 className="text-nowrap text-lg font-semibold text-primary-500">
              Ahmed khaled refai
            </h2>
            <h3 className="">Labtop</h3>
            <h4 className="text-primary-300">$1117</h4>
          </article>
        </div>
        <div className="addtion  flex justify-center gap-5 items-center bg-slate-200 p-2 rounded-md">
          <i className="fa-solid fa-minus text-lg font-bold text-primary-500 hover:text-primary-700 duration-300 transition-colors cursor-pointer"></i>
          <div className="counter text-xl font-bold text">1</div>
          <i className="fa-solid fa-plus text-lg font-bold text-primary-500 hover:text-primary-700 duration-300 transition-colors cursor-pointer"></i>
        </div>
        <div className="size-8 absolute top-0 right-0 m-3 bg-slate-200 text-red-600  flex rounded-full items-center justify-center hover:text-slate-200 hover:bg-red-600 duration-200 transition-colors">
          <i className="fa-solid fa-x text-lg cursor-pointer "></i>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="w-[200px]">
        </div>
        <h2 className="text-lg">Ahmed khaled Refai</h2>
   
        <div className="addtion  flex justify-center gap-5 items-center ">
          <i className="fa-solid fa-minus text-lg font-bold text-primary-500 hover:text-primary-700 duration-300 transition-colors cursor-pointer"></i>
          <div className="counter text-xl font-bold text">1</div>
          <i className="fa-solid fa-plus text-lg font-bold text-primary-500 hover:text-primary-700 duration-300 transition-colors cursor-pointer"></i>
        </div>
        <i className="fa-solid fa-x text-red-600 text-lg cursor-pointer"></i> */
}
