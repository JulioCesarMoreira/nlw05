import { Request, Response } from 'express'
import { SettingsService } from '../services/SettingsService';

class SettingsController {

    async create(request: Request, response: Response) {

        const { username, chat } = request.body;

        const settingsService = new SettingsService();

        try {

            const settings = await settingsService.create({ chat, username });

            return response.json(settings);

        } catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }

    async read(request: Request, response: Response) {
        const { id_r } = request.body

        const settingsService = new SettingsService();

        try {
            const settings = await settingsService.read({ id_r });

            return response.json(settings);
        } catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }

    async update(request: Request, response: Response) {

        const { id_u, username_u, chat_u } = request.body;

        const settingsService = new SettingsService();

        try {
            const settings = await settingsService.update({ id_u, username_u, chat_u });

            return response.json(settings);
        } catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }

    async delete(request: Request, response: Response) {

        const { id_d } = request.body;

        const settingsService = new SettingsService();

        try {
            const settings = await settingsService.delete({ id_d });

            return response.json({
                settings,
                message: "User has ben deleted!"
            });
        } catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }

}

export { SettingsController };