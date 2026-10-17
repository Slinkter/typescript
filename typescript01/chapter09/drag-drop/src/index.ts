import { prjState } from './state/state';
import { Input } from './components/input';
import { List } from './components/list';

new Input();
new List('active');
new List('finished');

// Proyectos de ejemplo precargados para probar inmediatamente
prjState.addProject('ES6 Modules', 'Código dividido en archivos pequeños dentro de src/', 2);
prjState.addProject('Webpack Bundle', 'Empaquetado en un único archivo dist/bundle.js', 4);
