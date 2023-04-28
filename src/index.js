import { createRoot } from 'react-dom/client';
import { App } from './componenets';

const root = createRoot(document.querySelector('#app'));

root.render(<App />);