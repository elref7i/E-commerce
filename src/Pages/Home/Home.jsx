import Card from '../../Components/Card/Card';
import Loading from '../../Components/Loading/Loading';
import CategorySlider from '../../Components/CategorySlider/CategorySlider';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { ProductsContext } from '../../context/Products.context';
import { useFormik } from 'formik';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';

export default function Home() {
  const { data, isLoading, searchProducts, searchedData, status } =
    useContext(ProductsContext);

  const formik = useFormik({
    initialValues: {
      valueInput: '',
    },
  });

  if (isLoading) return <Loading />;

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
        <meta property="og:title" content="Home - Freshcart" />
        <meta
          property="og:description"
          content="Browse through a wide range of products and exclusive offers on Freshcart. Your one-stop shopping destination."
        />
      </Helmet>
      <section className="grid grid-cols-12 mb-8">
        <HomeSlider />
      </section>
      <section className="mb-8 ">
        <CategorySlider />
      </section>
      <form className="mb-8 w-3/4 mx-auto">
        <input
          name="valueInput"
          type="search"
          value={formik.values.valueInput}
          placeholder="Search ..."
          className="form-control border-b-2 w-full"
          onChange={(e) => {
            formik.handleChange(e);
            searchProducts(e.target.value);
          }}
        />
      </form>
      <section className="cards grid grid-cols-12 gap-5">
        {(status === 'products'.toLowerCase()
          ? data.products.data
          : searchedData
        ).map((proudect) => (
          <Card productInfo={proudect} key={proudect._id} />
        ))}
      </section>
    </>
  );
}
