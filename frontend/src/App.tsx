import { useContext, useEffect, useState } from 'react';
import './App.css'
import FilterCard from './components/FilterCard'
import Header from './components/Header'
import ProductCard from './components/ProductCard';

import { ProductDTO } from './moldes/ProductDTO';
import * as productService from './services/product-service';
import { ContextListCount } from './util/context-listing';

type QueryParams = {
  valueMin: number;
  valueMax: number;
};

function App() {
  const MIN_PRICE = 0;
  const MAX_PRICE = Number.MAX_VALUE;

  const [queryParams, setQueryParams] = useState<QueryParams>({
    valueMin: MIN_PRICE,
    valueMax: MAX_PRICE,
  });

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [contextListCount, setContextListCount] = useState<number>(0);

  useEffect(() => {
    const newFilter = productService.findByPrice(queryParams.valueMin, queryParams.valueMax);
    setProducts(newFilter);
    setContextListCount(newFilter.length);
  }, [queryParams]);

  function handleFilter(min: number, max: number) {
    const newMin = min;
    const newMax = max;
    setQueryParams({ valueMin: newMin || MIN_PRICE, valueMax: newMax || MAX_PRICE });
  }

  return (
    <>
      <ContextListCount.Provider value={{ contextListCount, setContextListCount }}>
        <Header />
        <section id='content'>
          <FilterCard onNewFilter={handleFilter} />
          <div className='container'>
            <div className='container-card-prod'>
              {
                products.map(
                  product => <ProductCard key={product.id} product={product} />
                )
              }
            </div>
          </div>
        </section>
      </ContextListCount.Provider>
    </>
  );
}
export default App
