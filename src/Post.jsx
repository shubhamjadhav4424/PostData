import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContent } from './counterSlice';

function Post() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchContent())
    },[dispatch])
    
const contents = useSelector((state) => state.content.contents)
  const isLoading = useSelector((state) => state.content.isLoading)
  const error = useSelector((state) => state.content.error)

  let filtered=[];

  let filteration=contents.filter((ele,ind,contents)=>{
    if(ind%2==0){
    }
    else{
        filtered.push(ele);
    }
  })


  if (isLoading) {
    return 'loading...'
  }

  if (error) {
    return error
  }



  return (
    <div>
        <div>
            {
            
            filtered.map((ele,ind)=>{
                    return(
                        <div key={ind} className='flex gap-[20px]'>
                            <div>{ele.id}</div>
                            <div>{ele.title}</div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Post