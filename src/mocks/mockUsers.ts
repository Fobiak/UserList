import type { User } from "@/models/User";

export const mockUsers: User[] = [
    { id: 1, name: 'Илья', surname: 'Иванов', age: 25, email: 'IlyaIvanov@example.com' },
    { id: 2, name: 'Сергей', surname: 'Петров', age: 30, email: 'SergeyPetrov@example.com' },
    { id: 3, name: 'Дмитрий', surname: 'Смирнов', age: 35, email: 'DmitrySmirnov@example.com' },
    { id: 4, name: 'Владимир', surname: 'Кузнецов', age: 40, email: 'VladimirKuznetsov@example.com'},
    { id: 5, name: 'Александр', surname: 'Соколов', age: 45, email: 'AlexandrSokolov@example.com' },
    { id: 6, name: 'Николай', surname: 'Павлов', age: 50, email: 'NikolayPavlov@example.com' },
    { id: 7, name: 'Максим', surname: 'Смирнов', age: 18, email: 'MaximSmirnov@example.com' },
    { id: 8, name: 'Даниил', surname: 'Вьюшкин', age: 14, email: 'DaniilKuznetsov@example.com' },
    { id: 9, name: 'Андрей', surname: 'Мышкин', age: 16, email: 'AndreySokolov@example.com' },
    { id: 10, name: 'Евгений', surname: 'Донов', age: 70, email: 'EvgeniyPavlov@example.com' }
]