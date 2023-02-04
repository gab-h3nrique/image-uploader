
import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import SpinnerIcon from '../../components/icons/SpinnerIcon'
import Layout from '../../components/Layout'
import ModalComponent from '../../components/modals/ModalComponent'
import Api from '../../lib/api'
import Time from '../../lib/time'
import { ImageType } from '../../types/imageType'


const Home: NextPage = () => {

    const [imageArray, setImageArray] = useState<ImageType[]>([])
    const [srcImage, setSrcImage] = useState<string | null>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [user, setUser] = useState<any>()

    async function getImages() {
        setImageArray(await Api.get('api/auth/image'))
    }
    async function getUser() {
        setUser(await Api.get('api/auth/user'))
    }
    async function deleteImage(id:number) {
        await Api.delete('api/auth/image', { id: id })
        getImages()
    }

    useEffect(()=>{
        getImages()
        getUser()
    },[])

    return (
        <Layout page='home' user={user}>
            <>
                {
                    imageArray.length > 0 
                    ?   <section className="w-full h-full flex justify-center items-center">
                    <div className="flex flex-col min-w-[30rem] max-h-[30rem] overflow-auto bg-slate-300 p-4 gap-2 border-4 border-white rounded-xl">
                        <p onClick={()=>console.log(srcImage)} className="text-lg font-semibold text-slate-700 px-2">Imagens</p>
                        
                        {
                            imageArray && imageArray.map((item:any)=>(
                                <div key={item.id} className="flex gap-2">
                                    <section onClick={()=> {setSrcImage(item.image); setIsOpen(true)}} className="flex justify-start gap-3 p-2 w-full bg-slate-300 border-2 border-white rounded-xl cursor-pointer">
                                        <p className="text-sm font-semibold text-slate-500 w-7 whitespace-nowrap">{item.id}</p>
                                        <p className="text-sm font-semibold text-slate-500 w-32 text-ellipsis whitespace-nowrap overflow-hidden">{item.name}</p>
                                        <p className="text-sm font-semibold text-slate-500 w-44 text-ellipsis whitespace-nowrap overflow-hidden">{item.user.name}</p>
                                        <p className="text-sm font-semibold text-slate-500 w-22 whitespace-nowrap ml-auto">{Time.creationTime(item.createdAt)}</p>
                                    </section>
                                    <button onClick={async()=> deleteImage(item.id)} className='rounded-xl bg-slate-700 hover:bg-slate-900 px-3 duration-150'>
                                        <p className="text-sm text-white">apagar</p>
                                    </button>
                                </div>
                            ))
                        }

                    </div>
                        </section>

                    :   <div className="animate-ping m-auto "><SpinnerIcon className="h-12 w-12 text-white fill-slate-900"/></div>

                }
                <ModalComponent open={isOpen} close={()=>setIsOpen(false)} className={`p-2`} >
                    <div className="flex border-4 border-white rounded-xl overflow-hidden">
                       {/* <Image src={''} alt=''/> */}
                       {srcImage && <Image src={srcImage} alt="" width={300} height={100}/>}
                    </div>
                </ModalComponent>
            </>
        </Layout>
    )
}
export default Home