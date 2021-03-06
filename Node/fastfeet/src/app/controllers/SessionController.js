import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not exists.' });
    }

    const isCorrectPassword = await user.isCorrectPassword(password);

    if (!isCorrectPassword) {
      return res.status(401).json({ error: 'Passwords does not match.' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secretKey, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
