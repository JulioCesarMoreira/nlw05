import e from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUsersCreate {
    name: string;
    email: string;
}

interface IUsersRead {
    id_r: string;
}

interface IUsersUpdate {
    id_u: string;
    name_u: string;
    email_u: string;
}

interface IUsersDelete {
    id_d: string;
}

class UsersService {
    async create({ name, email } : IUsersCreate){
        const usersRepository = getCustomRepository(UsersRepository);

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists){
            throw new Error("User already exists!");
        }

        const users = usersRepository.create({
            name,
            email
        });

        await usersRepository.save(users);
        return users;
    }

    async read({ id_r } : IUsersRead){    
        const users = await getCustomRepository(UsersRepository)
        .createQueryBuilder("users")
        .where("users.id = :id", {id: id_r})
        .getOne();

        if(!users){
            throw new Error("User do not exists!");
        }

        return users;
    }

    async update({ id_u, name_u, email_u } : IUsersUpdate){
        const usersRepository = getCustomRepository(UsersRepository);

        const users = await getCustomRepository(UsersRepository)
        .createQueryBuilder("users")
        .where("users.id = :id", {id: id_u})
        .getOne();

        if(!users){
            throw new Error("User do not exists!");
        }

        users.name  = name_u;
        users.email = email_u;

        await usersRepository.save(users);

        return users;
    }

    async delete({ id_d } : IUsersDelete){
        const usersRepository = getCustomRepository(UsersRepository);

        const users = await getCustomRepository(UsersRepository)
        .createQueryBuilder("users")
        .where("users.id = :id", {id: id_d})
        .getOne();
        
        if(!users){
            throw new Error("User do not exists!");
        }

        await usersRepository.delete(users);

        return users;
    }
}

export { UsersService }