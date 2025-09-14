
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    let course = props.course;

    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            //Already liked, so remove it
            setLikedCourses(likedCourses.filter((id) => id !== course.id));
            toast.warning("Course Unliked Successfully");
        }
        else {
            //Not liked yet, so add it
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses([...likedCourses, course.id]);
            }
            toast.success("Course Liked Successfully")
        }
    }
    return (
        <div className='w-[300px] bg-blue-950 rounded-md overflow-hidden shadow-lg text-white flex flex-col'>
            <div className='relative'>
                <img src={course.image.url}></img>

                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-1.3rem] 
                                grid place-items-center'>
                    <button onClick={clickHandler}>
                        {likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />}
                    </button>
                </div>
            </div>

            <div className='p-4'>
                <p className='text-white font-semibold text-2xl leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>{course.description.length > 100 ? (course.description.substr(0, 100) + '...') : (course.description)}</p>
            </div>
        </div>
    );
}

export default Card;