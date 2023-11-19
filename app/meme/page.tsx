import { resolve } from 'path'
import Cards from '../components/cards/Cards'

const page = async () => {
  await new Promise((resolve:any)=>{
    setTimeout(async()=>{
      resolve()
    },2000)
  })
  return (
    <>
    <Cards />
    </>
  )
}

export default page