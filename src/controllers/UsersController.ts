import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';

class UsersController {

    async create(request: Request, response: Response){
        
        const { name, email } = request.body;

        const usersRepository = getCustomRepository(UsersRepository);

        const users = usersRepository.create({
            name,
            email
        });

        await usersRepository.save(users);

        return response.json(users);
    }

    async read(request: Request, response: Response){    
        const { id } = request.body
        
        const user = await getCustomRepository(UsersRepository)
        .createQueryBuilder("user")
        .where("user.id = :id", {id: id})
        .getOne();

        return response.json(user);
    }

    async update(request: Request, response: Response){
        
        const { id, new_name, new_email } = request.body;

        const usersRepository = getCustomRepository(UsersRepository);

        const user = await getCustomRepository(UsersRepository)
        .createQueryBuilder("user")
        .where("user.id = :id", {id: id})
        .getOne();

        user.name  = new_name;
        user.email = new_email;

        await usersRepository.save(user);

        return response.json(user);
    }

    async delete(request: Request, response: Response){
        
        const { id } = request.body;

        const usersRepository = getCustomRepository(UsersRepository);

        const user = await getCustomRepository(UsersRepository)
        .createQueryBuilder("user")
        .where("user.id = :id", {id: id})
        .getOne();

        await usersRepository.delete(user);

        return response.json({
            user,
            message: "User has ben deleted!"
        });
    }
    
}

export {UsersController};