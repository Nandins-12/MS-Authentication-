import { Router, Request, Response} from "express";

const router = Router();

router.get('/users', (req: Request, res: Response) => {
    const users = [{userName: 'Fernando'}];
    res.status(200).json(users);
});

router.get('/users/:uuid', (req: Request<{ uuid: string}>, res: Response) => {
    const uuid = req.params.uuid;
    res.status(200).json(uuid);
});

router.post('/users', (req: Request, res: Response) => {
    const newUser = req.body;
    res.status(201).json(newUser);
});

router.patch('/users/:uuid', (req: Request<{ uuid: string }>, res: Response) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    res.status(201).json(modifiedUser);
});

router.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response) => {
    res.sendStatus(200);
});

export default router;

// get /users
// get /users/:uuid
// post /users
// put /users/:uuid
// delete /users/:uuid