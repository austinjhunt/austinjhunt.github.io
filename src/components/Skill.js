import { useContext } from "react";
import config from "../config";
import { LoadingContext } from "../contexts/LoadingContext";
import { skeleton } from "../helpers/utils";
import { FaToolbox } from "react-icons/fa";

const Skill = () => {
  const [loading] = useContext(LoadingContext);

  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ width: "w-16", height: "h-4", className: "m-1" })}
        </div>
      );
    }

    return array;
  };

  return (
    <>
      {typeof config.skills !== "undefined" && config.skills.length !== 0 && (
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="pb-0-important mx-4 flex items-center justify-between">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: "w-32", height: "h-8" })
                ) : (
                  <span className="opacity-70">Tech Stack &amp; Skills</span>
                )}
              </h5>
              <span className="ml-auto">
                <FaToolbox size={config.mainIconSize}></FaToolbox>
              </span>
            </div>
            <div className="p-3 flow-root">
              <div className="-m-1 flex flex-wrap">
                {loading
                  ? renderSkeleton()
                  : config.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="m-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 badge-primary bg-opacity-75 rounded-full"
                      >
                        {skill}
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Skill;
