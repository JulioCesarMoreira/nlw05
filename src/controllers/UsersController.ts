import { Request, Response } from 'express'
import { UsersService } from '../services/UsersServices';

class UsersController {

    async create(request: Request, response: Response) {

        const { name, email } = request.body;

        const usersService = new UsersService;

        try {
            const users = await usersService.create({ name, email });

            return response.json(users);
        } catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }

    async read(request: Request, response: Response) {
        const { id_r } = request.body

        const usersService = new UsersService;

        try {
            const users = await usersService.read({ id_r });

            return response.json(users);
        } catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }

    async update(request: Request, response: Response) {

        const { id_u, name_u, email_u } = request.body;

        const usersService = new UsersService;

        try {
            const users = await usersService.update({ id_u, name_u, email_u });

            return response.json(users);
        } catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }

    async delete(request: Request, response: Response) {

        const { id_d } = request.body;

        const usersService = new UsersService;

        try {
            const users = await usersService.delete({ id_d });

            return response.json(users);
        } catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }

}

export { UsersController };