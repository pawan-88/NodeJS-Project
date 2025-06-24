import { Router, Response } from 'express';
import { authenticateJWT, AuthenticatedRequest } from '../middleware/authMiddleware';

const router = Router();

router.get('/', authenticateJWT, (req: AuthenticatedRequest, res: Response) => {
  const user = req.user;
  res.status(200).json({
    id: user._id,
    name: user.name,
    email: user.email,
  });
});

export default router;