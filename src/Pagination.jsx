import React from 'react';
import store from './mobxStore';
import { observer } from 'mobx-react-lite';
const PaginationReact = () => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}
    >
      <button
        className="btn btn-primary"
        disabled={store.page !== 1 ? false : true}
        onClick={() => store.prevPage()}
      >
        <i className="bi bi-chevron-left"></i>
      </button>
      {store.page !== 1 && <span>...</span>}
      {store.page > 5 && (
        <button
          className="btn btn-secondary"
          onClick={() => store.setFirstPage()}
        >
          1
        </button>
      )}
      {store.page !== 1 && <span>...</span>}
      <div style={{ display: 'flex' }}>
        {store.paginatedButtons.map((e, i) => (
          <div key={e}>
            <button
              className={store.page === e ? 'btn btn-warning' : 'btn'}
              onClick={() => store.setThisPage(e)}
            >
              {e}
            </button>
          </div>
        ))}
      </div>

      {store.jsonRes.length / store.perPage >= store.page && <span>...</span>}
      <button className="btn btn-secondary" onClick={() => store.setLastPage()}>
        {store.jsonRes.length / store.perPage}
      </button>

      <button
        className="btn btn-primary"
        disabled={
          store.page === store.jsonRes.length / store.perPage ? true : false
        }
        onClick={() => store.nextPage()}
      >
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
};
export default observer(PaginationReact);
