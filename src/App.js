import React, { useEffect } from 'react';
import './style.css';
import store from './mobxStore.js';
import { observer } from 'mobx-react-lite';
import Pagination from './Pagination.jsx';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
function App() {
  useEffect(() => {
    store.fetchJson();

    console.log(store);
  }, []);
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {store.paginationJson.map((e) => (
          <div style={{ display: 'flex', gap: '10px' }} key={e.id}>
            <p>{e.id}</p>
            <p>{e.name}</p>
          </div>
        ))}
      </div>

      <Pagination />
    </div>
  );
}

export default observer(App);
