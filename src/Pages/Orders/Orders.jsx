export default function Orders() {
  return (
    <>
      <section>
        <div className="order">
          <header className="flex items-center justify-between">
            <h3>
              order ID <span>#34821</span>
            </h3>
            <div className="status flex gap-2 items-center *:font-cairo">
              <h4 className="bg-blue-600 p-2 rounded-md w-fit">غير مدفوع</h4>
              <h4 className="bg-blue-600 p-2 rounded-md w-fit">قيد التوصيل</h4>
            </div>
          </header>
          <div className="all-product-order"></div>
        </div>
      </section>
    </>
  );
}
