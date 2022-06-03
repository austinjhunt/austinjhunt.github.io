import { skeleton } from "../helpers/utils";
import { useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext";

const Drawings = (props) => {
  const [loading] = useContext(LoadingContext);

  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <li key={index}>
          <span>
            {skeleton({ width: "w-2", height: "h-2", className: "mr-2" })}
            <div className="w-full">
              <div className="block justify-between">
                <div>
                  {skeleton({
                    width: "w-9/12",
                    height: "h-4",
                    className: "mb-2",
                  })}
                </div>
                <div>
                  {skeleton({
                    width: "w-6/12",
                    height: "h-4",
                    className: "mb-2",
                  })}
                </div>
              </div>
              <div>{skeleton({ width: "w-6/12", height: "h-3" })}</div>
            </div>
          </span>
        </li>
      );
    }

    return array;
  };

  let ArtGallery = (drawings) => {
    return (
      <div className="w-full flex-wrap">
        {drawings.map((d, index) => (
          <div key={index} className="inline-flex w-7 h-7 hover:w-12 ">
            <img
              className="w-full h-full"
              src={`${d.s3_copied_smaller_drawing_private_url}`}
            ></img>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <h5 className="card-title mb-6">
              <span className="opacity-70">Art</span>
            </h5>
            {loading || props.drawings.length == 0
              ? renderSkeleton()
              : ArtGallery(props.drawings)}
          </div>
        </div>
      }
    </>
  );
};

export default Drawings;
