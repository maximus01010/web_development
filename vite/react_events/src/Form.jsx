function handleformsubmit(e){
    e.preventDefault()
    console.log('form submitted')
}
export default function Form(){
    return(
        <form onSubmit={handleformsubmit}>
            <button>submit</button>
        </form>
    )
}