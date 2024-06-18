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
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <h2 className="text-2xl font-bold mb-4"> Plays in Hyderbad </h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of me by sweets"
                subtitle="Comedy Shows | English , Kannada | 18+ | 2hr 30mins"
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of me by sweets"
                subtitle="Comedy Shows | English , Kannada | 18+ | 2hr 30mins"
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of me by sweets"
                subtitle="Comedy Shows | English , Kannada | 18+ | 2hr 30mins"
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of me by sweets"
                subtitle="Comedy Shows | English , Kannada | 18+ | 2hr 30mins"
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of me by sweets"
                subtitle="Comedy Shows | English , Kannada | 18+ | 2hr 30mins"
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of me by sweets"
                subtitle="Comedy Shows | English , Kannada | 18+ | 2hr 30mins"
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
