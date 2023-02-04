
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Api from '../../lib/api'
import Time from '../../lib/time'
import { ImageType } from '../../types/imageType'


const Home: NextPage = () => {

    const [imageArray, setImageArray] = useState<ImageType[]>([])

    useEffect(()=>{
        (async()=>{
            setImageArray(await Api.get('api/auth/image'))
        })()
    },[])

    return (
        <Layout page='home'>
            
            <section className="w-full h-full flex justify-center items-center ">
                <div className="flex flex-col min-w-[30rem] max-h-[30rem] overflow-auto bg-slate-300 p-4 gap-2 border-4 border-white rounded-xl">
                    <p onClick={()=>console.log(imageArray)} className="text-lg font-semibold text-slate-700 px-2">Imagens</p>
                    
                    {
                        imageArray && imageArray.map((item:any, key)=>(
                            <div key={key} className="flex gap-2">
                                <section className="flex justify-start gap-3 p-2 w-full bg-slate-300 border-2 border-white rounded-xl cursor-pointer">
                                    <p className="text-sm font-semibold text-slate-500 w-7 whitespace-nowrap">{item.id}</p>
                                    <p className="text-sm font-semibold text-slate-500 w-32 text-ellipsis whitespace-nowrap overflow-hidden">{item.name}</p>
                                    <p className="text-sm font-semibold text-slate-500 w-44 text-ellipsis whitespace-nowrap overflow-hidden">{item.user.name}</p>
                                    <p className="text-sm font-semibold text-slate-500 w-22 whitespace-nowrap ml-auto">{Time.creationTime(item.createdAt)}</p>
                                </section>
                                <button className='rounded-xl bg-slate-700 hover:bg-slate-900 px-3 duration-150'>
                                    <p className="text-sm text-white">apagar</p>
                                </button>
                            </div>
                        ))
                    }

                </div>
            </section>

        </Layout>
    )
}
export default Home