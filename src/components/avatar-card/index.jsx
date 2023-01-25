import PropTypes from 'prop-types';
import { fallbackImage, skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';

const AvatarCard = ({ profile, loading, avatarRing, resume, degree }) => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="grid place-items-center py-8">
        {loading || !profile ? (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32">
              {skeleton({
                width: 'w-full',
                height: 'h-full',
                shape: '',
              })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div
              className={`mb-8 rounded-full w-32 h-32 ${
                avatarRing
                  ? 'ring ring-primary ring-offset-base-100 ring-offset-2'
                  : ''
              }`}
            >
              {
                <LazyImage
                  src={profile.avatar ? profile.avatar : fallbackImage}
                  alt={profile.name}
                  placeholder={skeleton({
                    width: 'w-full',
                    height: 'h-full',
                    shape: '',
                  })}
                />
              }
            </div>
          </div>
        )}
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            {loading || !profile ? (
              skeleton({ width: 'w-48', height: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                {profile.name}
              </span>
            )}
          </h5>
          <div className="mt-3 text-base-content text-opacity-60 font-mono">
            {loading || !profile
              ? skeleton({ width: 'w-48', height: 'h-5' })
              : profile.bio}
          </div>
        </div>
        <div className="text-center">
          {resume?.fileUrl &&
            (loading ? (
              <div className="mt-6">
                {skeleton({ width: 'w-40', height: 'h-8' })}
              </div>
            ) : (
              <a
                href={resume.fileUrl}
                target="_blank"
                className="btn btn-outline btn-sm text-xs mt-6 opacity-70 mx-2  p-2"
                download
                rel="noreferrer"
              >
                Download Resume
              </a>
            ))}

          {degree?.portfolioFileUrl &&
            (loading ? (
              <div className="mt-6">
                {skeleton({ width: 'w-40', height: 'h-8' })}
              </div>
            ) : (
              <a
                href={degree.portfolioFileUrl}
                target="_blank"
                className="btn btn-outline btn-sm text-xs mt-6 opacity-70 mx-2 p-2"
                download
                rel="noreferrer"
              >
                Download {degree.name} Portfolio
              </a>
            ))}

          {degree?.degreeFileUrl &&
            (loading ? (
              <div className="mt-6">
                {skeleton({ width: 'w-40', height: 'h-8' })}
              </div>
            ) : (
              <a
                href={degree.degreeFileUrl}
                target="_blank"
                className="btn btn-outline btn-sm text-xs mt-6 opacity-70 mx-2 p-2"
                download
                rel="noreferrer"
              >
                Download {degree.school} {degree.name} Digital Degree
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

AvatarCard.propTypes = {
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  avatarRing: PropTypes.bool.isRequired,
  resume: PropTypes.shape({
    fileUrl: PropTypes.string,
  }),
  degree: PropTypes.shape({
    name: PropTypes.string,
    school: PropTypes.string,
    portfolioFileUrl: PropTypes.string,
    degreeFileUrl: PropTypes.string,
  }),
};

export default AvatarCard;
