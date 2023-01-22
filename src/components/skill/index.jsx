import { skeleton } from '../../helpers/utils';
import PropTypes from 'prop-types';
import { FaToolbox } from 'react-icons/fa';
import Tabs from '../tabs';

const Skill = ({ loading, skills }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ width: 'w-16', height: 'h-4', className: 'm-1' })}
        </div>
      );
    }

    return array;
  };

  let options = Object.keys(skills).map((key, index) => {
    return {
      key: index,
      title: key,
      body: (
        <div className="p-3 flow-root">
          <div className="-m-1 flex flex-wrap">
            {loading
              ? renderSkeleton()
              : skills[key].map((skill, index) => (
                  <div
                    key={index}
                    className="m-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 badge-primary bg-opacity-75 rounded-full"
                  >
                    {skill}
                  </div>
                ))}
          </div>
        </div>
      ),
    };
  });

  return (
    <>
      {typeof skills !== 'undefined' &&
        (skills.Soft.length !== 0 ||
          skills.Hard.length !== 0 ||
          skills['Currently Learning'] !== 0) && (
          <div className="card shadow-lg compact bg-base-100">
            <div className="card-body">
              <div className="pb-0-important mx-4 flex items-center justify-between">
                <h5 className="card-title">
                  {loading ? (
                    skeleton({ width: 'w-32', height: 'h-8' })
                  ) : (
                    <span className="opacity-70">Skills</span>
                  )}
                </h5>
                <span className="ml-auto">
                  <FaToolbox size={'4em'}></FaToolbox>
                </span>
              </div>
              <Tabs name={'skilltypes'} options={options} color="pink"></Tabs>
            </div>
          </div>
        )}
    </>
  );
};

Skill.propTypes = {
  loading: PropTypes.bool.isRequired,
  skills: PropTypes.object.isRequired,
};

export default Skill;
