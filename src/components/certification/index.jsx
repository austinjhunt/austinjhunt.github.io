import { skeleton } from '../../helpers/utils';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

const CertItem = ({ year, name, body, link }) => (
  <div className="font-semibold badge-primary p-3 rounded w-fit m-3 inline-flex">
    <a href={link} target="_blank" rel="noreferrer">
      {year} - {name}
    </a>
  </div>
);

const Certification = ({ certifications, loading }) => {
  // don't wait for API responses since these are stored locally.
  loading = false;
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <CertItem
          key={index}
          year={skeleton({
            width: 'w-5/12',
            height: 'h-4',
          })}
          name={skeleton({
            width: 'w-6/12',
            height: 'h-4',
            className: 'my-1.5',
          })}
          body={skeleton({ width: 'w-6/12', height: 'h-3' })}
        />
      );
    }

    return array;
  };

  return (
    <>
      {certifications?.length !== 0 && (
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-70">
                    Certifications
                  </span>
                )}
              </h5>
            </div>
            <div className="text-base-content text-opacity-60">
              <div className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                {loading ? (
                  renderSkeleton()
                ) : (
                  <Fragment>
                    {certifications.map((certification, index) => (
                      <CertItem
                        key={index}
                        year={`${certification.year}`}
                        name={certification.name}
                        body={certification.body}
                        link={certification.link ? certification.link : null}
                      />
                    ))}
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

CertItem.propTypes = {
  year: PropTypes.node,
  name: PropTypes.node,
  body: PropTypes.node,
  link: PropTypes.string,
};

Certification.propTypes = {
  certifications: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Certification;
