import { Fragment } from 'react';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { ga, languageColor, skeleton } from '../../helpers/utils';
import { MdInsertLink } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

const RecentActivity = ({ data, loading, github, googleAnalytics }) => {
  if (!loading && Array.isArray(data) && data.length === 0) {
    return <></>;
  }

  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < github.limit; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="flex justify-between flex-col p-1 h-full w-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {skeleton({
                      width: 'w-32',
                      height: 'h-8',
                      className: 'mb-1',
                    })}
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
  const formatCreatedAtString = (createdAt) => {
    const date = new Date(createdAt);
    const options = {
      timeZone: 'America/New_York',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    return `${date.toLocaleString('en-US', options)}`;
  };
  const renderProjects = () => {
    return data.map((item, index) => (
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer hover:bg-base-200"
        href={`https://github.com/${item.repo.name}`}
        key={index}
        onClick={(e) => {
          e.preventDefault();

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

          window?.open(`https://github.com/${item.repo.name}`, '_blank');
        }}
      >
        <div className="flex justify-between flex-col p-3 h-full w-full">
          <div>
            <div className="flex items-center">
              <div className="card-title text-sm tracking-wide flex  opacity-60">
                <p>
                  <span className="font-bold">{item.type}</span> on{' '}
                  <span className="font-bold">{item.repo.name}</span> at{' '}
                  <span className="font-bold">
                    {formatCreatedAtString(item.created_at)}
                  </span>
                </p>
              </div>
            </div>
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
                      skeleton({ width: 'w-40', height: 'h-8' })
                    ) : (
                      <>
                        <span className="text-base-content opacity-70">
                          Recent Contributions
                        </span>
                      </>
                    )}
                  </h5>
                  <span className="ml-auto">
                    <FaGithub size={'3em'}></FaGithub>
                  </span>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 gap-6">
                    {loading || !data ? renderSkeleton() : renderProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

RecentActivity.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  github: PropTypes.object.isRequired,
  googleAnalytics: PropTypes.object.isRequired,
};

export default RecentActivity;
