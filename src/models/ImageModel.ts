import { ImageType } from "../types/imageType"
import prisma from "./../lib/prisma"


function model() {

    async function create(image: ImageType) {
        return <ImageType> await prisma.image.upsert({
            where: {id: image.id ? image.id : -1},
            create:{...image},
            update:{...image},
        })
    }

    async function get(id?: number) {
        return id ? <ImageType> await prisma.image.findFirst({ where: {id: id}}) 
        : <ImageType[]> await prisma.image.findMany()
    }

    // export all function that is in the return
    return { create, get }
}

const ImageModel = model()

export default ImageModel