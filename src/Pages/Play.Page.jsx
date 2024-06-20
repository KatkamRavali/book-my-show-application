import React from "react";

// ---------- Import Default Layout --------
import DefaultHoc from "../Layouts/Default.Hoc";

// ----------- Import Poster --------
import Poster from "../Components/Poster/Poster.Component";

// ------------- Import Filters ---------
import Filters from "../Components/PlayFilters/Filter.Component";

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <h2 className="text-2xl font-bold mb-4"> Plays in Hyderbad </h2>
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <div className="flex flex-wrap">
            {/* ----- Anaganaga ----- */}
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMyBKdW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00371711-qzctsjqgwg-portrait.jpg"
                title="Anaganaga"
                subtitle="Dating | English, Hindi, Kannada, Malayalam, Tamil, Telugu, Bengali | 18yrs + | 2hrs"
              />
            </div>

            {/* ---- Open Mic -Poetry, Storytelling ------ */}
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay1={true}
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMyBKdW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00398746-ybwxzschyw-portrait.jpg"
                title="Open Mic -Poetry, Storytelling"
                subtitle="Classic, Romantic | Hindi, English, Telugu | All age groups | 1hr 30mins"
              />
            </div>

            {/* --------- Milli ------- */}
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay2={true}
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMiBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00401390-hrqpwybyhw-portrait.jpg"
                title="Milli"
                subtitle="Drama | English, Hindi | 18yrs + | 50mins"
              />
            </div>

            {/* -------- Parboni 2024- 'Natyotsav' ----- */}
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay3={true}
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEp1bA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00399129-mlpzdfnwnj-portrait.jpg"
                title="Parboni 2024- 'Natyotsav'"
                subtitle="Contemporary | Bengali | All age groups | 2hrs"
              />
            </div>

            {/* ------ REFUND & MUNDADUGU by Samahaara ----- */}
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay4={true}
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMiBKdW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00401864-kjakzpaznh-portrait.jpg"
                title="REFUND & MUNDADUGU by Samahaara"
                subtitle="Classic | Multi Language | 10yrs + | 2hrs"
              />
            </div>

            {/* -------- Middle Class Melodies -------- */}
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay5={true}
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyOSBKdW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00402007-ntxjkrycdc-portrait.jpg"
                title="Middle Class Melodies"
                subtitle="Comedy, Drama | 1hr 20mins"
              />
            </div>

            {/* ----- Olakhlat Ka Sir? ---- */}
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay6={true}
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA1IEp1bA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00402036-xpptbpwzlt-portrait.jpg"
                title="Olakhlat Ka Sir?"
                subtitle="Drama | Marathi | 1hr"
              />
            </div>

            {/* -------- Ajaramaram - Telugu Play -------- */}
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay7={true}
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyNyBKdW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00401995-ybgdplmwqx-portrait.jpg"
                title="Ajaramaram - Telugu Play"
                subtitle="Action, Drama | Telugu | All age groups | 1hr 45mins"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <Filters
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
          </div>

          <div>
            <Filters
              title="Language"
              tags={["English", "Kannada", "Telugu", "Hindi"]}
            />
          </div>

          <div>
            <Filters title="Categories" tags={["Theatre", "StoryTelling"]} />
          </div>

          <div>
            <Filters
              title="Genres"
              tags={[
                "Classic",
                "Drama",
                "Comedy",
                "Contemporary",
                "Regional",
                "Romantic",
              ]}
            />
          </div>

          <div>
            <Filters
              title="More Filters"
              tags={["Outdoor Events", "Fast Filling"]}
            />
          </div>

          <div>
            <Filters
              title="Price"
              tags={["Free", "0 - 500", "501 - 2000", "Above 2000"]}
            />
          </div>

          <button className="border-2 m-1 p-1 text-center text-red-400 bg-white">
            Browse By Venues
          </button>
        </div>
      </div>
    </>
  );
};

export default DefaultHoc(PlayPage);
