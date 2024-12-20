import Card from '../../Components/Card/Card';
import Loading from '../../Components/Loading/Loading';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import CategorySlider from '../../Components/CategorySlider/CategorySlider';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { ProductsContext } from '../../context/Products.context';
import { useFormik } from 'formik';
import { WishListContext } from '../../context/WishList.context';
export default function Home() {
  const { data, isLoading, searchProducts, searchedData, status } =
    useContext(ProductsContext);
  const { checkProduct } = useContext(WishListContext);

  const formik = useFormik({
    initialValues: {
      valueInput: '',
    },
  });

  if (isLoading) return <Loading />;

  const {
    data: { data: allProducts },
  } = data;
  return (
    <>
      <Helmet>
        <title>Home </title>
        <meta name="Home Page Website" content="Freshcart | Home Page" />
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
        {(status === 'products'.toLowerCase() ? allProducts : searchedData).map(
          (proudect) => (
            <Card
              productInfo={proudect}
              checkProduct={checkProduct}
              key={proudect._id}
            />
          )
        )}
      </section>
    </>
  );
}
