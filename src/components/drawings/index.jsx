import { skeleton } from '../../helpers/utils';
import PropTypes from 'prop-types';

const Drawings = ({ drawings, loading }) => {
  if (!loading && Array.isArray(drawings) && drawings.length === 0) {
    return <></>;
  }
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <li key={index}>
          <span>
            {skeleton({ width: 'w-2', height: 'h-2', className: 'mr-2' })}
            <div className="w-full">
              <div className="block justify-between">
                <div>
                  {skeleton({
                    width: 'w-9/12',
                    height: 'h-4',
                    className: 'mb-2',
                  })}
                </div>
                <div>
                  {skeleton({
                    width: 'w-6/12',
                    height: 'h-4',
                    className: 'mb-2',
                  })}
                </div>
              </div>
              <div>{skeleton({ width: 'w-6/12', height: 'h-3' })}</div>
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
          <div key={index} className="inline-flex w-64">
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
              <span className="opacity-70">Recent Portraiture</span>
            </h5>
            {loading || drawings.length == 0
              ? renderSkeleton()
              : ArtGallery(drawings)}
          </div>
        </div>
      }
    </>
  );
};

Drawings.propTypes = {
  drawings: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

export default Drawings;
