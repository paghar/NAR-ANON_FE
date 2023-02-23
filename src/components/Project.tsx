
import React from 'react'

const Project = () => {

  const events = [
    { name: "Registration", details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur praesentium at ratione numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur praesentium at ratione numquam." },
    { name: "Introduction", details: "Repellat, earum distinctio quidem voluptatem ad magni aperiam tenetur quia veniam maxime animi excepturi placeat repellendus alias, accusamus, optio eligendi saepe autem.Repellat, earum distinctio quidem voluptatem ad magni aperiam tenetur quia veniam maxime animi excepturi placeat repellendus alias, accusamus, optio eligendi saepe autem." },
    { name: "Marketing meeting", details: "Tempore quisquam soluta voluptas saepe sit, velit accusamus at unde, nostrum, alias explicabo rerum exercitationem officiis beatae optio natus.Tempore quisquam soluta voluptas saepe sit, velit accusamus at unde, nostrum, alias explicabo rerum exercitationem officiis beatae optio natus." },
    { name: "Financial reunion", details: "Reiciendis ad perspiciatis facere temporibus necessitatibus consequatur ea cupiditate dolores quisquam voluptas.Reiciendis ad perspiciatis facere temporibus necessitatibus consequatur ea cupiditate dolores quisquam voluptas." },
  ]
  
  return (   
      <div className="flex flex-col items-center">
        {/* :TITLE CONTAINER */}
        <div className="max-w-2xl text-center">
          <h2 className="text-2xl sm:text-4xl  tracking-wide">
            <span className="text-black-600">Projects</span>          
          </h2>
          <p className="mt-5 text-sm text-black-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, alias exercitationem id ut quod voluptates est. Veritatis distinctio quam cumque!</p>
        </div>
        {/* :SCHEDULE */}
        <div className="mt-10 max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full ">          
          <ul className="flex flex-col space-y-5" aria-label="schedule events">
            {events.map((event,index) => (
              <li key={index} className="group w-full block py-3 px-4 border-2 border-gray-100 rounded-md overflow-hidden hover:border-orange-500">                   
                  {/* ::Header */}       
                  <div className="flex flex-col sm:flex-row sm:space-x-10">                                                       
                    <p className="text-base text-gray-700 font-bold uppercase">{event.name}</p>
                  </div>                  
                  {/* ::Details */}
                  <div className="pt-0 h-0 flex flex-col justify-between opacity-0 transition-all duration-150 ease-in transform group-hover:pt-4 group-hover:h-28 group-hover:opacity-100">
                    <p className="text-xs text-gray-700 text-justify">{event.details}</p>                    
                  </div>               
              </li>
            ))
            }
          </ul>
        </div>
      </div>  
  )
}

export default Project
