
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Api from '../../lib/api'

interface UploadImage {success: boolean, message:string}

const Upload: NextPage = () => {
    const [image, setImage] = useState<any>()
    const [returnUpload, setReturnUpload] = useState<UploadImage>({success: false, message:''})
    const [imageInfo, setImageInfo] = useState<any>()
    const [user, setUser] = useState<any>()
    
    function getBaseUrl(files:any)  {

        setImageInfo(files[0])
        console.log(imageInfo)

        let file = files[0]
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result)
        };
        reader.readAsDataURL(file);

    }

    async function getUser() {
        setUser(await Api.get('/api/auth/user'))
    }

    async function saveImage(imageParam:any) {
        if(!imageParam) return;
        
        const { message, ...image } = await Api.post('/api/auth/image', { image:imageParam, name: imageInfo.name })
        
        if(message) return setReturnUpload({success:false ,message:message})

        setReturnUpload({success:true , message:''})

    }

    useEffect(()=>{
        getUser()
    },[])

    return (
        <Layout page='upload' user={user}>
            <section onClick={()=>console.log(returnUpload)} className="flex w-full h-full justify-center items-center ">

                <div className="flex flex-col justify-center items-center gap-2 w-[30rem]">

                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-[10rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-slate-900 hover:bg-slate-700 duration-150">
                        
                    
                        
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">

                            {
                                !image 
                                ? (
                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                )
                                : (
                                    <div className="bg-black w-[5rem] h-[3rem] flex rounded-lg overflow-hidden">
                                        {image && <Image src={image} alt="" width={300} height={100}/>}
                                    </div>
                                )
                            }
                            
                            
                           
                            {
                                imageInfo?.name ? (
                                    <>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">{(imageInfo.name.split('.'))[0]}</span></p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{imageInfo.type}</p>
                                    </>

                                ) : (
                                    <>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Clique</span> para fazer upload da imagem</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG</p>
                                    </>
                                )
                            }
                            
                        </div>
                        <input id="dropzone-file" type="file" onChange={(e)=> getBaseUrl(e.target.files)} className="hidden" />
                    </label>

                    <button onClick={()=> saveImage(image)} className="flex items-center justify-center p-2 gap-2 w-full rounded-lg bg-slate-900 hover:bg-slate-700 duration-150" >

                        {
                            !returnUpload.success ?
                            <svg className="fill-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z"/>
                            </svg>
                            :
                            <svg className="fill-green-600 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                            </svg>

                        }
                        <p className="text-white font-semibold text-sm whitespace-nowrap">{returnUpload.success ? 'Imagem salva!' : returnUpload.message ? returnUpload.message : 'Fazer upload'}</p>
                        
                    </button>

                    

                </div>



            </section>
        </Layout>
    )
}
export default Upload