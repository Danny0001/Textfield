import express from 'express'
import passport from 'passport'
import AuthController from '../controllers/auth'

const router = express.Router()
const auth = new AuthController();

router.get('/', (req, res) => res.send("get auth"));
router.post('/signin', (req, res) => auth.signin(req, res));
router.post('/signup', (req, res) => auth.signup(req, res));

router.get('/:email/exists', (req, res) => auth.existEmail(req, res))

export default router;
