import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Meta from '../components/Meta';
import Paginate from '../components/Paginate';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import './shop-screen.css';

const HEAT_FILTERS = {
  mild: { label: 'Mild', range: '1–3/10' },
  medium: { label: 'Medium', range: '4–6/10' },
  hot: { label: 'Hot', range: '7–8/10' },
  'very-hot': { label: 'Very Hot', range: '9/10' },
  extreme: { label: 'Extreme', range: '10/10' },
};

const ShopScreen = ({ match, location }) => {
  const keyword = match.params.keyword || '';
  const pageNumber = match.params.pageNumber || 1;
  const requestedHeat = new URLSearchParams(location.search).get('heat') || '';
  const heat = HEAT_FILTERS[requestedHeat] ? requestedHeat : '';
  const activeHeat = heat ? HEAT_FILTERS[heat] : null;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const {
    loading,
    error,
    products = [],
    page = Number(pageNumber),
    pages = 0,
  } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber, heat));
  }, [dispatch, keyword, pageNumber, heat]);

  const retryProducts = () => {
    dispatch(listProducts(keyword, pageNumber, heat));
  };

  const hasSearch = Boolean(keyword);
  const hasHeat = Boolean(activeHeat);
  const hasFilters = hasSearch || hasHeat;

  let pageTitle = 'All Sauces | Burnsville';
  let pageDescription = 'Browse the current Burnsville hot sauce catalogue.';

  if (hasSearch && hasHeat) {
    pageTitle = `Search results for ${keyword} · ${activeHeat.label} | Burnsville`;
    pageDescription = `Browse Burnsville catalogue results for ${keyword} in the ${activeHeat.label.toLowerCase()} heat range (${activeHeat.range}).`;
  } else if (hasSearch) {
    pageTitle = `Search results for ${keyword} | Burnsville`;
    pageDescription = `Browse Burnsville catalogue results for ${keyword}.`;
  } else if (hasHeat) {
    pageTitle = `${activeHeat.label} Sauces | Burnsville`;
    pageDescription = `Browse Burnsville sauces in the ${activeHeat.label.toLowerCase()} heat range (${activeHeat.range}).`;
  }

  const breadcrumbLabel = hasSearch
    ? 'Search'
    : hasHeat
      ? activeHeat.label
      : 'Shop';

  const heading = hasSearch
    ? 'Search results'
    : hasHeat
      ? `${activeHeat.label} sauces`
      : 'All sauces';

  const summary = hasSearch && hasHeat
    ? `Showing catalogue matches for “${keyword}” in the ${activeHeat.label.toLowerCase()} range (${activeHeat.range}).`
    : hasSearch
      ? `Showing catalogue matches for “${keyword}”.`
      : hasHeat
        ? `Showing sauces rated ${activeHeat.range} on the Burnsville heat scale.`
        : 'Explore the current range by name, rating and price.';

  return (
    <>
      <Meta
        title={pageTitle}
        description={pageDescription}
        keywords='Burnsville, hot sauce, sauce catalogue'
      />

      <section className='burnsville-shop' aria-labelledby='burnsville-shop-title'>
        <div className='burnsville-shop__masthead'>
          <div className='burnsville-shop__masthead-inner'>
            <nav className='burnsville-shop__breadcrumb' aria-label='Breadcrumb'>
              <Link to='/'>Home</Link>
              <span aria-hidden='true'>/</span>
              <span aria-current='page'>{breadcrumbLabel}</span>
            </nav>

            <p className='burnsville-shop__eyebrow'>Burnsville collection</p>
            <h1 id='burnsville-shop-title'>{heading}</h1>
            <p className='burnsville-shop__summary'>{summary}</p>
          </div>
        </div>

        <div className='burnsville-shop__inner'>
          <div className='burnsville-shop__toolbar'>
            <p aria-live='polite'>
              {!loading && !error
                ? `${products.length} ${
                    products.length === 1 ? 'sauce' : 'sauces'
                  } on this page`
                : 'Catalogue listing'}
            </p>
            <p>
              Page {page || 1}
              {pages > 0 ? ` of ${pages}` : ''}
            </p>
            {hasFilters && (
              <Link className='burnsville-shop__clear-link' to='/shop'>
                Clear filters <span aria-hidden='true'>→</span>
              </Link>
            )}
          </div>

          <div className='burnsville-shop__content'>
            {loading ? (
              <div className='burnsville-shop__state' role='status'>
                <span className='burnsville-shop__loader' aria-hidden='true' />
                <p className='burnsville-shop__state-label'>Loading collection</p>
                <h2>Bringing the sauces into view</h2>
              </div>
            ) : error ? (
              <div
                className='burnsville-shop__state burnsville-shop__state--error'
                role='alert'
              >
                <p className='burnsville-shop__state-label'>Collection unavailable</p>
                <h2>Unable to load sauces</h2>
                <p className='burnsville-shop__state-message'>{error}</p>
                <button onClick={retryProducts} type='button'>
                  Try again
                </button>
              </div>
            ) : products.length === 0 ? (
              <div className='burnsville-shop__state'>
                <p className='burnsville-shop__state-label'>Nothing to show</p>
                <h2>
                  {hasHeat
                    ? `No ${activeHeat.label.toLowerCase()} sauces found`
                    : hasSearch
                      ? 'No sauces found'
                      : 'The collection is currently empty'}
                </h2>
                <p className='burnsville-shop__state-message'>
                  {hasFilters
                    ? 'Try another heat level or return to the complete catalogue.'
                    : 'Please check the catalogue again later.'}
                </p>
                {hasFilters && (
                  <Link className='burnsville-shop__state-link' to='/shop'>
                    View all sauces
                  </Link>
                )}
              </div>
            ) : (
              <>
                <div className='burnsville-shop__grid'>
                  {products.map((product) => (
                    <Product key={product._id} product={product} />
                  ))}
                </div>

                {pages > 1 && (
                  <nav
                    className='burnsville-shop__pagination'
                    aria-label='Product pages'
                  >
                    <Paginate
                      pages={pages}
                      page={page}
                      keyword={keyword}
                      heat={heat}
                    />
                  </nav>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

ShopScreen.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      keyword: PropTypes.string,
      pageNumber: PropTypes.string,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShopScreen;
