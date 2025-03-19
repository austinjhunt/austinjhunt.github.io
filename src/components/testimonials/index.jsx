import { Fragment } from "react";
import PropTypes from "prop-types";
import { ga, skeleton } from "../../helpers/utils";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = ({ data, loading, googleAnalytics }) => {
  if (!loading && Array.isArray(data) && data.length === 0) {
    return <></>;
  }

  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < data.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="flex justify-between flex-col p-1 h-full w-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {skeleton({
                      width: "w-32",
                      height: "h-8",
                      className: "mb-1",
                    })}
                  </h5>
                </span>
              </div>
              <div className="mb-5 mt-1">
                {skeleton({
                  width: "w-full",
                  height: "h-4",
                  className: "mb-2",
                })}
                {skeleton({ width: "w-full", height: "h-4" })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-grow">
                <span className="mr-3 flex items-center">{skeleton({ width: "w-12", height: "h-4" })}</span>
                <span className="flex items-center">{skeleton({ width: "w-12", height: "h-4" })}</span>
              </div>
              <div>
                <span className="flex items-center">{skeleton({ width: "w-12", height: "h-4" })}</span>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };
  const formatCreatedAtString = (createdAt) => {
    const date = new Date(createdAt);
    const options = {
      timeZone: "America/New_York",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return `${date.toLocaleString("en-US", options)}`;
  };
  const renderProjects = () => {
    return data.map((item, index) => (
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer hover:bg-base-200"
        href={item.projectLink ? item.projectLink : "#"}
        key={index}
        onClick={(e) => {
          e.preventDefault();
          if (!item.projectLink) {
            return;
          } else {
            try {
              if (googleAnalytics?.id) {
                ga.event({
                  action: "Click testimonial project",
                  params: {
                    project: item.name,
                  },
                });
              }
            } catch (error) {
              console.error(error);
            }
            window?.open(item.projectLink, "_blank");
          }
        }}
      >
        <div className="flex justify-between flex-col p-3 h-full w-full">
          <div className="flex items-center" style={{ alignSelf: "start" }}>
            <div className="flex mr-3" style={{ alignItems: "flex-start", height: "100%" }}>
              <FaQuoteLeft></FaQuoteLeft>
            </div>

            <div className="text-sm tracking-wide opacity-60">
              <h6
                style={{
                  display: "block",
                  textAlign: "left",
                  textTransform: "uppercase",
                  fontStyle: "italic",
                  marginBottom: "0.5rem",
                }}
              >
                {"on "}
                {item.category}
              </h6>
              <p style={{ display: "block", textAlign: "left" }}>
                <em>{item.testimonial}</em>
              </p>
            </div>
            <div className="flex ml-3" style={{ alignSelf: "end" }}>
              <FaQuoteRight></FaQuoteRight>
            </div>
          </div>
          <div>
            <p style={{ display: "block", textAlign: "right", marginTop: "1rem" }}>
              -{" "}
              <span className="font-bold">
                {item.client}, {item.date}
              </span>
            </p>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ width: "w-40", height: "h-8" })
                    ) : (
                      <>
                        <span className="text-base-content opacity-70">Testimonials</span>
                      </>
                    )}
                  </h5>
                  <span className="ml-auto">
                    <FaQuoteLeft fontSize={"2em"} style={{ display: "inline-flex", marginRight: "0.5rem" }} />
                    <FaQuoteRight fontSize={"2em"} style={{ display: "inline-flex" }} />
                  </span>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 gap-6">{loading || !data ? renderSkeleton() : renderProjects()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Testimonials.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  googleAnalytics: PropTypes.object.isRequired,
};

export default Testimonials;
