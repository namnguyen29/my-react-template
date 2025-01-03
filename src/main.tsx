import ReactDOM from 'react-dom/client';

import { App } from './app/App';
import './styles.scss';
import '@mantine/nprogress/styles.css';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(<App />);
