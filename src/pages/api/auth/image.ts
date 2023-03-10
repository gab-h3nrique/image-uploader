import type { NextApiRequest, NextApiResponse } from 'next'
import { ImageType } from '../../../types/imageType';
import ImageModel from '../../../models/ImageModel'
import { verify } from '../../../lib/jwtToken';
import { authorizationToken } from '../../../lib/auth';
import UserModel from '../../../models/UserModel';

// 200 OK
// 201 Created
// 202 Accepted
// 203 Non-Authoritative Information
// 204 No Content
// 205 Reset Content
// 206 Partial Content

// 400 Bad Request
// 401 Unauthorized
// 402 Payment Required
// 403 Forbidden
// 404 Not Found
// 405 Method Not Allowed
// 406 Not Acceptable
// 429 Too Many Requests
// 500 Internal Server Error
// 501 Not Implemented
// 502 Bad Gateway
// 503 Service Unavailable

export const config = {
    api: {
        bodyParser: {
        sizeLimit: '10mb',
        },
    },
}

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
    
    try {
    
        const { method } = req

        if(method === 'GET') {

            const { id } = req.query

            const imageDb = await ImageModel.get(Number(id))

            return res.status(200).json(imageDb)

        }
        
        if(method === 'POST') {
            
            const { image, name } = req.body

            const token = await authorizationToken(req)
            
            const decodedToken = await verify(token, process.env.ACCESS_TOKEN as string)
            
            if(!decodedToken) return res.status(406).json({ message: 'missing params' })
            if(!image) return res.status(406).json({ message: 'missing params' })

            const userDb :any = await UserModel.get(Number(decodedToken.id))

            if(!userDb) return res.status(404).json({ message: 'user not found' })

            const imageDb = await ImageModel.create({image: image, name: name || undefined, userId: userDb.id})

            return res.status(200).json({ image: imageDb})
            
        }

        if(method === 'DELETE') {

            const { id } = req.query

            if(!id) return res.status(406).json({ message: 'missing params' })

            const imageDb = await ImageModel.delete(Number(id))

            return res.status(200).json(imageDb)

        }
        
    } catch(error) {

        console.error(error)
        return res.status(500).json({ message: error })
        
    }
    // return res.status(405).json({ message: 'method Not allowed' })
}