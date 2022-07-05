import { Router } from './router.js';

const router = new Router()

router.add('/', '/pages/Home.html')
router.add('/universo', '/pages/Universe.html')
router.add('/exploracao', '/pages/Explorer.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()