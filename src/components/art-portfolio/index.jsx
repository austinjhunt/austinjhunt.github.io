import { skeleton } from '../../helpers/utils';
import PropTypes from 'prop-types';
import { BsPenFill } from 'react-icons/bs';

const ArtPortfolio = ({ loading, artPortfolio, limit, title, website }) => {
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

  let ArtGallery = (artPortfolio) => {
    return (
      <div className="grid grid-cols-6 ">
        {artPortfolio.slice(0, limit).map((d, index) => (
          <div key={index} className="col-span-1 shadow-md p-3 ">
            <a target="_blank" title={`${d.portrait_name}`} href={website}>
              <img
                className="w- rounded"
                src={`${d.s3_copied_smaller_drawing_private_url}`}
              ></img>
            </a>
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
            <div className="grid grid-cols-2">
              <div className="col-span-1 mb-3">
                <h5 className="card-title mb-6">
                  <span className="opacity-70">{title}</span>
                </h5>
                <h6>
                  <p className="opacity-70 d-block">
                    You can find more of my work at{' '}
                    <a className="font-bold leading-sm " href={website}>
                      {website}
                    </a>
                  </p>
                </h6>
              </div>
              <div className="col-span-1 mb-3  ">
                <BsPenFill className="float-right" size="5em"></BsPenFill>
              </div>
            </div>

            {loading || artPortfolio == null || artPortfolio.length == 0
              ? renderSkeleton()
              : ArtGallery(artPortfolio)}
          </div>
        </div>
      }
    </>
  );
};

ArtPortfolio.propTypes = {
  loading: PropTypes.bool.isRequired,
  limit: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  artPortfolio: PropTypes.array,
};
export default ArtPortfolio;
