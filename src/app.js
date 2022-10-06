/**
 * Init file
 *
 * @package    src
 * @author     Taras Hryts <streaming9663@gmail.com>
 * @copyright  2020 Say Digital Company
 * @license    Turing License
 * @version    2.0
 * @link       https://turing.ly
 */

var express = require('express')
var path = require('path')
var cors = require('cors')

var bodyParser = require('body-parser')
const dotenv = require('dotenv')
var apiRouter = require('./routes/index')
dotenv.config()
const app = express()

app.use(express.json())
app.use('/public', express.static(path.join(__dirname, '../public/upload')))
app.use('/uploads', express.static('uploads'))

app.use(express.static(path.join(__dirname, 'assets')))
// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
// app.use(cors({origin: 'https://discoverilla.com'}))
const corsOpts = {
  origin: '*',

  methods: [
     'GET',
     'POST',
  ],

  allowedHeaders: [
     'Content-Type',
  ],
}

app.use(cors(corsOpts));

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/api', apiRouter)

app.use(function (err, req, res, next) {
    return res.status(500).json(err)
})

module.exports = app
