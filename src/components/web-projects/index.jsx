import { Fragment, useContext } from 'react';
import { ga, skeleton } from '../../helpers/utils';
import { BiCodeAlt } from 'react-icons/bi';
import { GiSpiderWeb } from 'react-icons/gi';
import { BsStack } from 'react-icons/bs';
import PropTypes from 'prop-types';

const WebProjects = ({ loading, webPortfolio, googleAnalytics }) => {
  let portfolioItems = webPortfolio.items;
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < webPortfolio.limit; index++) {
      array.push(
        <div className="card shadow-md compact bg-base-100" key={index}>
          <div className="flex justify-between flex-col p-8 h-full w-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {skeleton({ width: 'w-32', height: 'h-8' })}
                  </h5>
                </span>
              </div>
              <div className="mb-5 mt-1">
                {skeleton({
                  width: 'w-full',
                  height: 'h-4',
                  className: 'mb-2',
                })}
                {skeleton({ width: 'w-full', height: 'h-4' })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-grow">
                <span className="mr-3 flex items-center">
                  {skeleton({ width: 'w-12', height: 'h-4' })}
                </span>
                <span className="flex items-center">
                  {skeleton({ width: 'w-12', height: 'h-4' })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {skeleton({ width: 'w-12', height: 'h-4' })}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return array;
  };

  const renderTechForProject = (project) => {
    return project.tech.map((tech, index) => (
      <div
        key={index}
        className="m-1 text-s inline-flex items-center font-bold leading-sm uppercase px-3 py-1 badge-primary bg-opacity-75 rounded-full"
      >
        {tech}
      </div>
    ));
  };

  const renderProjects = () => {
    return portfolioItems.map((item, index) => (
      <div
        className="col-span-1 card shadow-lg compact bg-base-100 cursor-pointer"
        key={index}
        onClick={() => {
          try {
            if (googleAnalytics?.id) {
              ga.event({
                action: 'Click project',
                params: {
                  project: item.name,
                },
              });
            }
          } catch (error) {
            console.error(error);
          }
          window.open(item.url, '_blank');
        }}
      >
        <div className="flex justify-between flex-col p-8 h-full w-full">
          <div>
            <div className="flex items-center opacity-60  pb-2 border-bottom">
              <span>
                <h5 className="card-title text-lg">{item.name}</h5>
              </span>
              <span className="ml-auto">
                <BiCodeAlt size={'2em'}></BiCodeAlt>
              </span>
            </div>
            <div>
              <img src={`${item.image}`}></img>
            </div>
            <p className="mb-5 mt-1 text-base-content text-opacity-60 text-sm">
              {item.description}
            </p>
            <div>
              <div className="flex items-center pb-2 border-bottom">
                <span>
                  <h6>Tech Stack:</h6>
                </span>
                <span className="ml-auto">
                  <BsStack></BsStack>
                </span>
              </div>
              {renderTechForProject(item)}
            </div>
          </div>
          <div className="flex justify-between text-sm text-base-content text-opacity-60">
            <div className="flex flex-grow"></div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow-sm">
              <div className="card-body">
                <ul className="menu row-span-3 bg-base-100 text-base-content">
                  <li>
                    <div className="pb-0-important mx-4 flex items-center justify-between">
                      <h5 className="card-title">
                        {loading ? (
                          skeleton({ width: 'w-28', height: 'h-8' })
                        ) : (
                          <span className="opacity-70">
                            {webPortfolio.title}
                          </span>
                        )}
                      </h5>
                      {loading ? (
                        skeleton({ width: 'w-10', height: 'h-5' })
                      ) : (
                        <span>
                          <GiSpiderWeb size="5em"></GiSpiderWeb>
                        </span>
                      )}
                    </div>
                  </li>
                </ul>
                <div className="grid grid-cols-2 gap-6">
                  {loading || !portfolioItems
                    ? renderSkeleton()
                    : renderProjects()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

WebProjects.propTypes = {
  webPortfolio: PropTypes.object.isRequired,
  googleAnalytics: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default WebProjects;
