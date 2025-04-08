import { Fragment } from "react";
import { skeleton } from "../../helpers/utils";
import PropTypes from "prop-types";
import { FaLink } from "react-icons/fa";

const FreelanceServices = ({ loading, data }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < data.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-600" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0">
                <div className="w-24 h-24 mask mask-squircle">
                  {skeleton({
                    width: "w-full",
                    height: "h-full",
                    shape: "",
                  })}
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        width: "w-full",
                        height: "h-8",
                        className: "mb-2 mx-auto md:mx-0",
                      })}
                    </h2>
                    {skeleton({
                      width: "w-24",
                      height: "h-3",
                      className: "mx-auto md:mx-0",
                    })}
                    <div className="mt-3">
                      {skeleton({
                        width: "w-full",
                        height: "h-4",
                        className: "mx-auto md:mx-0",
                      })}
                    </div>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {skeleton({
                        width: "w-32",
                        height: "h-4",
                        className: "md:mr-2 mx-auto md:mx-0",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const Project = ({ project_url, title, summary }) => {
    return (
      <div className="my-3 bg-base-100 hover:bg-base-300 shadow p-3">
        <a href={project_url}>
          <FaLink className="inline-block" /> {title}: {summary}
        </a>
      </div>
    );
  };

  const render = () => {
    return data && data.length ? (
      data.map((svc, index) => (
        <div key={index} className="flex justify-between flex-col px-3 h-full w-full">
          <div className="flex items-center" style={{ alignSelf: "start" }}>
            <div className="text-sm tracking-wide">
              <h6 className="uppercase text-align-left display-block font-bold">{svc.title}</h6>
              <p className="display-block text-align-right opacity-60">{svc.summary}</p>
            </div>
          </div>
          {/* <div className="mt-3">
            <h3 className="uppercase opacity-80">Projects</h3>
            {svc.projects.map((project, index2) => (
              <Project key={index2} {...project} />
            ))}
          </div> */}
        </div>
      ))
    ) : (
      <div className="text-center mb-6">
        <p className="mt-1 text-sm opacity-50 text-base-content">No services to sell right now.</p>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div
              className={`card compact bg-base-100 ${
                loading || (data && data.length) ? "shadow bg-opacity-40" : "shadow-lg"
              }`}
            >
              <div className="card-body">
                <div className="mx-3 mb-2">
                  <h1 className="card-title text-base-content opacity-70">Freelance Services</h1>
                  <h2 className="mt-2 uppercase card-subtitle   opacity-70">
                    Need a developer? I'd love to help. Reach out!
                  </h2>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 gap-6">{loading || !data ? renderSkeleton() : render()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

FreelanceServices.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
    }),
  ),
};

export default FreelanceServices;
