import axios from "axios";
import { Fragment, useCallback, useEffect, useState } from "react";
import HeadTagEditor from "./head-tag-editor";
import ErrorPage from "./error-page";
import ThemeChanger from "./theme-changer";
import AvatarCard from "./avatar-card";
import Details from "./details";
import Skill from "./skill";
import Experience from "./experience";
import Certification from "./certification";
import Education from "./education";
import Project from "./project";
import Blog from "./blog";
import Footer from "./footer";
import Technology from "./tech";
import {
  genericError,
  getInitialTheme,
  noConfigError,
  notFoundError,
  setupHotjar,
  tooManyRequestError,
  sanitizeConfig,
} from "../helpers/utils";
import { HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";
import "../assets/index.css";
import { formatDistance } from "date-fns";
import ExternalProject from "./external-project";
import RecentActivity from "./recent-activity";
import Testimonials from "./testimonials";
import FreelanceServices from "./freelanceServices";

const bgColor = "bg-base-300";

const GitProfile = ({ config }) => {
  const [error, setError] = useState(typeof config === "undefined" && !config ? noConfigError : null);
  const [sanitizedConfig] = useState(typeof config === "undefined" && !config ? null : sanitizeConfig(config));
  const [theme, setTheme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [repo, setRepo] = useState(null);
  const [recentActivity, setRecentActivity] = useState(null);

  useEffect(() => {
    if (sanitizedConfig) {
      setTheme(getInitialTheme(sanitizedConfig.themeConfig));
      setupHotjar(sanitizedConfig.hotjar);
      loadData();
    }
  }, [sanitizedConfig]);

  useEffect(() => {
    theme && document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const loadData = useCallback(() => {
    axios
      .get(`https://api.github.com/users/${sanitizedConfig.github.username}`)
      .then((response) => {
        let data = response.data;

        let profileData = {
          avatar: data.avatar_url,
          name: data.name ? data.name : "",
          bio: data.bio ? data.bio : "",
          location: data.location ? data.location : "",
          company: data.company ? data.company : "",
        };

        setProfile(profileData);
        return data;
      })
      .then((userData) => {
        let excludeRepo = ``;
        if (userData.public_repos === 0) {
          setRepo([]);
          return;
        }

        sanitizedConfig.github.exclude.projects.forEach((project) => {
          excludeRepo += `+-repo:${sanitizedConfig.github.username}/${project}`;
        });

        let query = `user:${sanitizedConfig.github.username}+fork:${!sanitizedConfig.github.exclude
          .forks}${excludeRepo}`;

        let url = `https://api.github.com/search/repositories?q=${query}&sort=${sanitizedConfig.github.sortBy}&per_page=${sanitizedConfig.github.limit}&type=Repositories`;

        axios
          .get(url, {
            headers: {
              "Content-Type": "application/vnd.github.v3+json",
            },
          })
          .then((response) => {
            let data = response.data;
            setRepo(data.items);
          })
          .catch((error) => {
            handleError(error);
          });
      })
      .catch((error) => {
        handleError(error);
      })
      .then(() => {
        let url = `https://api.github.com/users/${sanitizedConfig.github.username}/events?per_page=15`;
        axios
          .get(url, {
            headers: {
              "Content-Type": "application/vnd.github.v3+json",
            },
          })
          .then((response) => {
            let data = response.data;
            let filtered = data.filter(
              (event) => sanitizedConfig.github.exclude.projects.indexOf(event.repo.name.split("/")[1]) === -1,
            );
            setRecentActivity(filtered.slice(0, 5));
          })
          .catch((error) => {
            handleError(error);
          });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setLoading]);

  const handleError = (error) => {
    console.error("Error:", error);
    try {
      let reset = formatDistance(new Date(error.response.headers["x-ratelimit-reset"] * 1000), new Date(), {
        addSuffix: true,
      });

      if (error.response.status === 403) {
        setError(tooManyRequestError(reset));
      } else if (error.response.status === 404) {
        setError(notFoundError);
      } else {
        setError(genericError);
      }
    } catch (error2) {
      setError(genericError);
    }
  };

  return (
    <HelmetProvider>
      {sanitizedConfig && (
        <HeadTagEditor
          profile={profile}
          theme={theme}
          googleAnalytics={sanitizedConfig.googleAnalytics}
          social={sanitizedConfig.social}
        />
      )}
      <div className="fade-in h-screen">
        {error ? (
          <ErrorPage status={`${error.status}`} title={error.title} subTitle={error.subTitle} />
        ) : (
          sanitizedConfig && (
            <Fragment>
              <div className={`p-4 lg:p-10 min-h-full ${bgColor}`}>
                <div className="grid grid-cols-1  gap-6 rounded-box">
                  <div className="col-span-1 grid grid-cols-1 mb-6 gap-6">
                    <AvatarCard
                      profile={profile}
                      loading={loading}
                      avatarRing={!sanitizedConfig.themeConfig.hideAvatarRing}
                      resume={sanitizedConfig.resume}
                      degree={sanitizedConfig.degree}
                    />
                    {!sanitizedConfig.themeConfig.disableSwitch && (
                      <ThemeChanger
                        theme={theme}
                        setTheme={setTheme}
                        loading={loading}
                        themeConfig={sanitizedConfig.themeConfig}
                      />
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
                  <div className="col-span-1">
                    <div className="grid grid-cols-1 gap-6">
                      <Details
                        profile={profile}
                        loading={loading}
                        github={sanitizedConfig.github}
                        social={sanitizedConfig.social}
                      />
                      <Technology loading={loading} technology={sanitizedConfig.technology}></Technology>
                      <Skill loading={loading} skills={sanitizedConfig.skills} />
                      <Experience loading={loading} experiences={sanitizedConfig.experiences} />
                      <Education loading={loading} education={sanitizedConfig.education} />
                      <Certification loading={loading} certifications={sanitizedConfig.certifications} />
                    </div>
                  </div>
                  <div className="lg:col-span-2 col-span-1">
                    <div className="grid grid-cols-1 gap-6">
                      <FreelanceServices data={sanitizedConfig.freelanceServices} loading={loading}></FreelanceServices>
                      <Testimonials
                        data={sanitizedConfig.testimonials}
                        loading={loading}
                        googleAnalytics={sanitizedConfig.googleAnalytics}
                      ></Testimonials>
                      <RecentActivity
                        data={recentActivity}
                        loading={loading}
                        github={sanitizedConfig.github}
                        googleAnalytics={sanitizedConfig.googleAnalytics}
                      />
                      <Project
                        repo={repo}
                        loading={loading}
                        github={sanitizedConfig.github}
                        googleAnalytics={sanitizedConfig.googleAnalytics}
                      />
                      <ExternalProject
                        loading={loading}
                        externalProjects={sanitizedConfig.externalProjects}
                        googleAnalytics={sanitizedConfig.googleAnalytics}
                      />
                      <Blog
                        loading={loading}
                        googleAnalytics={sanitizedConfig.googleAnalytics}
                        blog={sanitizedConfig.blog}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <footer className={`p-4 footer ${bgColor} text-base-content footer-center`}>
                <div className="card compact bg-base-100 shadow">
                  <Footer content={sanitizedConfig.footer} loading={loading} />
                </div>
              </footer>
            </Fragment>
          )
        )}
      </div>
    </HelmetProvider>
  );
};

GitProfile.propTypes = {
  config: PropTypes.shape({
    github: PropTypes.shape({
      username: PropTypes.string.isRequired,
      sortBy: PropTypes.oneOf(["stars", "updated"]),
      limit: PropTypes.number,
      exclude: PropTypes.shape({
        forks: PropTypes.bool,
        projects: PropTypes.array,
      }),
    }).isRequired,
    social: PropTypes.shape({
      linkedin: PropTypes.string,
      twitter: PropTypes.string,
      facebook: PropTypes.string,
      instagram: PropTypes.string,
      dribbble: PropTypes.string,
      behance: PropTypes.string,
      medium: PropTypes.string,
      dev: PropTypes.string,
      stackoverflow: PropTypes.string,
      website: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
    }),
    resume: PropTypes.shape({
      fileUrl: PropTypes.string,
    }),
    degree: PropTypes.shape({
      name: PropTypes.string,
      school: PropTypes.string,
      portfolioFileUrl: PropTypes.string,
      degreeFileUrl: PropTypes.string,
    }),
    technology: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
    skills: PropTypes.shape({
      Hard: PropTypes.array,
      Soft: PropTypes.array,
      "Currently Learning": PropTypes.array,
    }),
    externalProjects: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
      }),
    ),
    experiences: PropTypes.arrayOf(
      PropTypes.shape({
        company: PropTypes.string,
        position: PropTypes.string,
        from: PropTypes.string,
        to: PropTypes.string,
      }),
    ),
    certifications: PropTypes.arrayOf(
      PropTypes.shape({
        body: PropTypes.string,
        name: PropTypes.string,
        year: PropTypes.string,
        link: PropTypes.string,
      }),
    ),
    education: PropTypes.arrayOf(
      PropTypes.shape({
        institution: PropTypes.string,
        degree: PropTypes.string,
        from: PropTypes.string,
        to: PropTypes.string,
        gpa: PropTypes.string,
      }),
    ),
    blog: PropTypes.shape({
      source: PropTypes.string,
      username: PropTypes.string,
      limit: PropTypes.number,
    }),
    googleAnalytics: PropTypes.shape({
      id: PropTypes.string,
    }),
    hotjar: PropTypes.shape({
      id: PropTypes.string,
      snippetVersion: PropTypes.number,
    }),
    themeConfig: PropTypes.shape({
      defaultTheme: PropTypes.string,
      disableSwitch: PropTypes.bool,
      respectPrefersColorScheme: PropTypes.bool,
      hideAvatarRing: PropTypes.bool,
      themes: PropTypes.array,
      customTheme: PropTypes.shape({
        primary: PropTypes.string,
        secondary: PropTypes.string,
        accent: PropTypes.string,
        neutral: PropTypes.string,
        "base-100": PropTypes.string,
        "--rounded-box": PropTypes.string,
        "--rounded-btn": PropTypes.string,
      }),
    }),
    footer: PropTypes.string,
  }).isRequired,
};

export default GitProfile;
