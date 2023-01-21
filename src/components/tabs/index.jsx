import React from 'react';

const Tabs = (props) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {props.options.map((item, index) => {
              return (
                <li
                  key={'key-' + index}
                  className="-mb-px mr-2 last:mr-0 flex-auto text-center"
                >
                  <a
                    className={
                      'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal  text-base-content' +
                      (openTab === index + 1
                        ? ' bg-primary'
                        : ' text-white bg-base-100')
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(index + 1);
                    }}
                    data-toggle="tab"
                    href={'#' + props.name + '-tab-' + index}
                    role="tablist"
                  >
                    {item.title.toString()}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-base-100 w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                {props.options.map((item, index) => {
                  return (
                    <div
                      key={props.name + '-tab-' + index}
                      className={openTab === index + 1 ? 'block' : 'hidden'}
                      id={props.name + '-tab-' + index}
                    >
                      {item.body}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
