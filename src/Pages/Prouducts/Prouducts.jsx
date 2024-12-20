import DropdownFilter from '../../Components/DropdownFilter/DropdownFilter';
import Card from '../../Components/Card/Card';
import Loading from '../../Components/Loading/Loading';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { useFormik } from 'formik';
import { ProductsContext } from '../../context/Products.context';

export default function Prouducts() {
  const { data, isLoading, searchProducts, searchedData, status } =
    useContext(ProductsContext);

  async function getSortProuducts() {
    return axios.get(
      'https://ecommerce.routemisr.com/api/v1/products?sort=-price'
    );
  }
  // useQuery({})

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
        <title>Prouducts </title>
        <meta
          name="Prouducts Page Website"
          content="Freshcart | Prouducts Page"
        />
      </Helmet>
      <section>
        <div className="grid grid-cols-12 gap-5 mb-8">
          <div className="search col-span-12 sm:col-span-8 lg:col-span-10">
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
            {}
          </div>
          <div className="col-span-12 sm:col-span-4 lg:col-span-2">
            <DropdownFilter />
          </div>
        </div>

        <section className="cards grid grid-cols-12 gap-5">
          {(status === 'products'.toLowerCase()
            ? allProducts
            : searchedData
          ).map((proudect) => (
            <Card productInfo={proudect} key={proudect._id} />
          ))}
        </section>
      </section>
    </>
  );
}
