import { skeleton } from '../../helpers/utils';
import PropTypes from 'prop-types';
import { FaToolbox } from 'react-icons/fa';

const Technology = ({ loading, technology }) => {
  let stringifyTags = (techItem) => {
    return (
      techItem.tags.join('---').replaceAll(' ', '---').toLowerCase() +
      '---' +
      techItem.name.toLowerCase().replaceAll(' ', '---')
    );
  };

  const TechList = () => {
    return (
      <div className="p-3 flow-root">
        <div className="-m-1 flex flex-wrap">
          {technology.map((t) => (
            <div
              data-tags={stringifyTags(t)}
              className="tech-item m-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 badge-primary bg-opacity-75 rounded-full"
              key={t.name}
            >
              {t.name}
            </div>
          ))}
        </div>
      </div>
    );
  };

  let filterTech = (event) => {
    let inputWordsLowercase = event.target.value.toLowerCase().split(' ');

    document.querySelectorAll('div.tech-item').forEach((techItem) => {
      if (
        inputWordsLowercase.some((inputWord) =>
          techItem.dataset.tags.includes(inputWord)
        )
      ) {
        techItem.classList.add('inline-flex');
        techItem.classList.remove('hidden');
      } else {
        techItem.classList.add('hidden');
        techItem.classList.remove('inline-flex');
      }
    });
  };

  return (
    <>
      {typeof technology !== 'undefined' && technology.length !== 0 && (
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="pb-0-important mx-4 flex items-center justify-between">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
                ) : (
                  <span className="opacity-70">Tools I Work With</span>
                )}
              </h5>
              <span className="ml-auto">
                <FaToolbox size={'4em'}></FaToolbox>
              </span>
            </div>
            <div>
              <input
                title="filter tools I work with by tags"
                className="whitespace-normal block p-4 w-full text-cente"
                placeholder="filter by tags like 'cloud' or 'automation'"
                id="filter-tech"
                onChange={filterTech}
              ></input>
            </div>
            <TechList></TechList>
          </div>
        </div>
      )}
    </>
  );
};

Technology.propTypes = {
  loading: PropTypes.bool.isRequired,
  technology: PropTypes.array.isRequired,
};

export default Technology;
