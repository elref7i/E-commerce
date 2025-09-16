import DropdownFilter from "../../Components/DropdownFilter/DropdownFilter";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading/Loading";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { useFormik } from "formik";
import { ProductsContext } from "../../context/Products.context";

export default function Prouducts() {
  const { data, isLoading, searchProducts, searchedData, status } =
    useContext(ProductsContext);
  const formik = useFormik({
    initialValues: {
      valueInput: "",
    },
  });

  if (isLoading) return <Loading />;

  const products =
    status === "products".toLowerCase()
      ? data.products.data
      : status === "sortHigh".toLowerCase()
      ? data.sortedHProducts.data
      : status === "sortLow".toLowerCase()
      ? data.sortedLProducts.data
      : searchedData;

  return (
    <>
      <Helmet>
        <title>Products - Freshcart</title>
        <meta
          name="description"
          content="Discover a variety of products in different categories on Freshcart. Shop now and enjoy exclusive deals."
        />
        <meta
          name="keywords"
          content="Freshcart, Products, Shopping, Online Store, Deals, Categories"
        />
        <meta
          property="og:title"
          content="Products - Freshcart"
        />
        <meta
          property="og:description"
          content="Explore our extensive product catalog and find the best deals on Freshcart. Your go-to online store for quality products."
        />
      </Helmet>

      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          All Products
        </h1>
        <p className="text-gray-600">
          Discover our complete collection of products
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="flex-1">
            <div className="relative">
              <input
                name="valueInput"
                type="search"
                value={formik.values.valueInput}
                placeholder="Search for products..."
                className="form-control w-full pl-12 pr-4 py-3 text-lg"
                onChange={(e) => {
                  formik.handleChange(e);
                  searchProducts(e.target.value);
                }}
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="fa-solid fa-search text-gray-400 text-lg" />
              </div>
              {formik.values.valueInput && (
                <button
                  type="button"
                  onClick={() => {
                    formik.setFieldValue("valueInput", "");
                    searchProducts("");
                  }}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  <i className="fa-solid fa-times text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
          </div>
          <div className="lg:w-64">
            <DropdownFilter />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section>
        {products && products.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-900">
                {formik.values.valueInput ? "Search Results" : "Products"}
              </h2>
              {formik.values.valueInput && (
                <p className="text-gray-600">
                  {products.length} product(s) found
                </p>
              )}
            </div>
            <div className="responsive-grid">
              {products.map((product) => (
                <Card
                  productInfo={product}
                  key={product._id}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <i className="fa-solid fa-search text-6xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-6">
              {formik.values.valueInput
                ? "Try adjusting your search terms or browse different categories"
                : "We're working on adding more products for you"}
            </p>
            {formik.values.valueInput && (
              <button
                onClick={() => {
                  formik.setFieldValue("valueInput", "");
                  searchProducts("");
                }}
                className="btn btn-outline btn-md"
              >
                Clear Search
              </button>
            )}
          </div>
        )}
      </section>
    </>
  );
}
