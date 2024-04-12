const { Router } = require('express');
const router = Router();

const { storeTask } = require('../controllers/taskControllers');

router.post('/store/task', storeTask);

module.exports = router;
