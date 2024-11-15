import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';

function App() {
  return (
    <Suspense fallback={<p>1</p>}>
      <Routes>
        <Route path="/">
          <Route path="/" />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
