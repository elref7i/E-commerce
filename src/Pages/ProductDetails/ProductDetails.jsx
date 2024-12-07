import testImage from '../../assets/images/favicon.png';
export default function ProductDetails() {
  return (
    <>
      <section className="grid grid-cols-12 gap-8  bg-slate-100 p-4 rounded-xl">
        <div className="image-product col-span-4 rounded-md shadow-lg overflow-hidden">
          <img
            src="https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg"
            alt=""
          />
        </div>
        <article className="col-span-8 py-5 flex flex-col justify-between bg-slate-400">
          <div>
            <div className="product-details space-y-6 ">
              <div className="brand flex items-center">
                <img src={testImage} className="w-12" alt="" />
                <h3 className="name-brand font-semibold">Nike</h3>
              </div>
              <div className="space-y-2">
                <h2 className="title font-extrabold text-2xl">Woman Shawl</h2>
                <p className="text-sm text-slate-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, atque.
                </p>
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <span>4.5</span>
                </div>
                <h4 className="price text-primary-500 font-semibold">$350</h4>
              </div>
            </div>
          </div>
          <div className="flex gap-8 items-center justify-between">
            <button className="btn bg-primary-500 px-6 py-2 flex-1">
              Add Cart
            </button>
            <div className="size-12 border-2 border-solid border-primary-500 rounded-3xl flex items-center justify-center ">
              <i className="fa-solid fa-heart text-2xl "></i>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
