import trash from './trash3-fill.svg'

const TodoBox = ({id , todoText,deleteFunction})=>{
    return (

        <div className="flex  justify-between px-3 w-[90%] bg-[#505050] my-3 mx-auto rounded-[4px]">
            <p className="text-white">
                {todoText}
            </p>

            <button onClick={()=>deleteFunction(id)} className="text-white"><img src={trash} alt='trash'/></button>
        </div>


    )
}

export default TodoBox