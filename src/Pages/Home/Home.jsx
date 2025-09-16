import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading/Loading";
import CategorySlider from "../../Components/CategorySlider/CategorySlider";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { ProductsContext } from "../../context/Products.context";
import { useFormik } from "formik";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";

export default function Home() {
  const { data, isLoading, searchProducts, searchedData, status } =
    useContext(ProductsContext);

  const formik = useFormik({
    initialValues: {
      valueInput: "",
    },
  });

  if (isLoading) return <Loading />;

  const products =
    status === "products".toLowerCase() ? data.products.data : searchedData;

  return (
    <>
      <Helmet>
        <title>Home - Freshcart</title>
        <meta
          name="description"
          content="Welcome to Freshcart. Shop the latest products from a variety of categories and enjoy fast delivery."
        />
        <meta
          name="keywords"
          content="Freshcart, Home, Shopping, Online Store, Deals"
        />
        <meta
          property="og:title"
          content="Home - Freshcart"
        />
        <meta
          property="og:description"
          content="Browse through a wide range of products and exclusive offers on Freshcart. Your one-stop shopping destination."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="mb-8 lg:mb-12">
        <HomeSlider />
      </section>

      {/* Categories Section */}
      <section className="mb-8 lg:mb-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Shop by Category
          </h2>
          <p className="text-gray-600">
            Discover products from our diverse range of categories
          </p>
        </div>
        <CategorySlider />
      </section>

      {/* Search Section */}
      <section className="mb-8 lg:mb-12">
        <div className="max-w-2xl mx-auto">
          <form className="relative">
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
          </form>
        </div>
      </section>

      {/* Products Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            {formik.values.valueInput ? "Search Results" : "Featured Products"}
          </h2>
          {formik.values.valueInput && (
            <p className="text-gray-600">
              {products?.length || 0} product(s) found
            </p>
          )}
        </div>

        {products && products.length > 0 ? (
          <div className="responsive-grid">
            {products.map((product) => (
              <Card
                productInfo={product}
                key={product._id}
              />
            ))}
          </div>
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
                ? "Try adjusting your search terms or browse our categories"
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
