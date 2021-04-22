import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
    chat: boolean;
    username: string;
}

interface ISettingsRead {
    id_r: string;
}

interface ISettingsUpdate {
    id_u: string;
    chat_u: boolean;
    username_u: string;
}

interface ISettingsDelete {
    id_d: string;
}

class SettingsService {
    async create({ chat, username }: ISettingsCreate) {
        const settingsRepository = getCustomRepository(SettingsRepository);

        const userAlreadyExists = await settingsRepository.findOne({
            username
        });

        if (userAlreadyExists) {
            throw new Error("Settings already exists!");
        }

        const settings = settingsRepository.create({
            username,
            chat
        });

        await settingsRepository.save(settings);
        return settings;
    }

    async read({ id_r }: ISettingsRead) {
        const settings = await getCustomRepository(SettingsRepository)
            .createQueryBuilder("settings")
            .where("settings.id = :id", { id: id_r })
            .getOne();

        if (!settings) {
            throw new Error("Settings do not exists!");
        }

        return settings;
    }

    async update({ id_u, chat_u, username_u }: ISettingsUpdate) {
        const settingsRepository = getCustomRepository(SettingsRepository);

        const settings = await getCustomRepository(SettingsRepository)
            .createQueryBuilder("settings")
            .where("settings.id = :id", { id: id_u })
            .getOne();

        if (!settings) {
            throw new Error("Settings do not exists!");
        }

        settings.username = username_u;
        settings.chat = chat_u;

        await settingsRepository.save(settings);

        return settings;
    }

    async delete({ id_d }: ISettingsDelete) {
        const settingsRepository = getCustomRepository(SettingsRepository);

        const settings = await getCustomRepository(SettingsRepository)
            .createQueryBuilder("settings")
            .where("settings.id = :id", { id: id_d })
            .getOne();

        if (!settings) {
            throw new Error("Settings do not exists!");
        }

        await settingsRepository.delete(settings);

        return settings;
    }
}

export { SettingsService }