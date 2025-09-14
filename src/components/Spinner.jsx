
import './Spinner.css';
const Spinner = () => {
    console.log("Spinner Rendered");
    return(
        <div className='flex flex-col items-center space-y-2'>
            <div className="spinner"></div>
            <p className='text-blue-950 text-lg font-semibold'>Loading...</p>

        </div>
    )
}

export default Spinner;