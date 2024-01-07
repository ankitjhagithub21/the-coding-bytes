import React from 'react'
import CourseBox from '../../components/CourseBox/CourseBox'
import courses from './data'


const Courses = () => {


    return (
        <section>
            <div className="container px-5 py-24 mx-auto">
                <h1 className="text-4xl font-bold mb-10 text-center">Our Courses</h1>
                <div className="flex flex-wrap -m-4">
                    {
                        courses.map((course) => {
                            return <CourseBox key={course.id} data={course} />
                        })
                    }

                </div>
            </div>
        </section>

    )
}

export default Courses