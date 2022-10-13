/**
 * Index router file
 *
 * @package   backend/src/routes
 * @author    Taras Hryts <streaming9663@gmail.com>
 * @author    WangTuring <wangwang@turing.com>
 * @copyright 2020 Say Digital Company
 * @license   Turing License
 * @version   2.0
 * @link      https://turing.ly
 */

const express = require('express')
const router = express.Router()

const galaxyController = require('../controller/galaxyController');
const pointController = require('../controller/pointController');

router.get('/galaxy/getOne', galaxyController.getOne)
router.post('/galaxy/uploadGalaxy', galaxyController.uploadOne)
router.get('/point/getAll', pointController.getALL)

/**
 * Authentication page API router
 */

module.exports = router
