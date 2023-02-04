import { ImageType } from "../types/imageType"
import prisma from "./../lib/prisma"


function model() {

    async function create(image: any) {
        return <ImageType> await prisma.image.create({
            data: image,
        })
        // return <ImageType> await prisma.image.upsert({
        //     where: {id: image.id ? image.id : -1},
        //     create:{...image, userId: id},
        //     update:{...image, userId: id},
        // })
    }

    async function get(id?: number) {
        return id ? <ImageType> await prisma.image.findFirst({ where: {id: id}, include: {user: true}}) 
        : <ImageType[]> await prisma.image.findMany({ include: {user: true}, orderBy: { id: 'desc'} })
    }

    async function deleteMethod(id: number) {
        return <ImageType> await prisma.image.delete({ where: {id: id} })
    }

    // export all function that is in the return
    return { create, get, delete:deleteMethod }
}

const ImageModel = model()

export default ImageModel