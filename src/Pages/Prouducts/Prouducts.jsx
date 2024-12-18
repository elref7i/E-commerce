import DropdownFilter from '../../Components/DropdownFilter/DropdownFilter';
import Card from '../../Components/Card/Card';
import Loading from '../../Components/Loading/Loading';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { useFormik } from 'formik';

export default function Prouducts() {
  const [status, setStatus] = useState('prouducts'.toLowerCase());
  const [searchedData, setSearchedData] = useState(null);
  async function getProuducts() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products');
  }
  async function getSortProuducts() {
    return axios.get(
      'https://ecommerce.routemisr.com/api/v1/products?sort=-price'
    );
  }

  // استخدام useQuery بشكل ديناميكي

  let { data: products, isLoading: loadingAllProuducts } = useQuery({
    queryKey: ['Products', 'All Proudcuts '], // يمكن إضافة "sort" عند الحاجة لتغيير الـ URL
    queryFn: getProuducts,
    refetchOnMount: false,
  });

  let { data: sortProuducts, isLoading: loadingSortProuducts } = useQuery({
    queryKey: ['sortProuducts', { sortdata: 'Sort Proudcuts high to low' }], // يمكن إضافة "sort" عند الحاجة لتغيير الـ URL
    queryFn: getSortProuducts,
    refetchOnMount: false,
  });

  function searchProducts(value) {
    console.log(value);
    const productFilter = allProducts.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );

    setSearchedData(productFilter);
    setStatus('search');
    console.log(productFilter);
  }
  const formik = useFormik({
    initialValues: {
      valueInput: '',
    },
  });

  if (loadingAllProuducts || loadingSortProuducts) return <Loading />;

  const {
    data: { data: allProducts },
  } = products;
  const {
    data: { data: allSortproducts },
  } = sortProuducts;
  // console.log(data.data.data);
  // for (let i = 0; i < data.data.data.length; i++) {
  //   console.log(data.data.data[i].title);
  // }
  // console.log(data);

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
            <DropdownFilter setStatus={setStatus} />
          </div>
        </div>

        <section className="cards grid grid-cols-12 gap-5">
          {(status === 'prouducts'.toLowerCase()
            ? allProducts
            : status === 'sortHigh'.toLowerCase()
            ? allSortproducts
            : searchedData
          ).map((proudect) => (
            <Card productInfo={proudect} key={proudect._id} />
          ))}
        </section>
      </section>
    </>
  );
}
