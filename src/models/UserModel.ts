// import { ImageType } from "../types/imageType"
import prisma from "./../lib/prisma"

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: number;
}

function model() {

    async function get(id?: number) {
        return id ? <User> await prisma.users.findFirst({ where: {id: id}}) 
        : <User[]> await prisma.users.findMany()
    }

    // export all function that is in the return
    return { get }
}

const UserModel = model()

export default UserModel