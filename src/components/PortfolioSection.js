import React from "react";
import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
import { PortfolioFilter, ProjectCard } from "../components";

export default function PortfolioSection() {
  return (
    <>
      <div className="portfolio__section__header">
        <div className="portfolio__section__left">
          <div className="services__section__right__sub__heading">
            <div className="services__section__right__sub__heading__bar"></div>
            Portfolio
          </div>
          <div
            className="services__section__right__heading"
            style={{ marginBottom: 0 }}
          >
            Some of my distinguished woks
          </div>
        </div>
        <div className="portfolio__section__right">
          <div className="portfolio__filters">
            <PortfolioFilter defaultChecked={true}>All</PortfolioFilter>
            <PortfolioFilter>Web App</PortfolioFilter>
            <PortfolioFilter>Mobile App</PortfolioFilter>
            <PortfolioFilter>UI/UX Design</PortfolioFilter>
          </div>
        </div>
      </div>
      <div className="portfolio__projects">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div
        className="project__section__left__link"
        style={{
          width: "100%",
          maxWidth: "1440px",
          margin: "0em auto",
          padding: "0em 2em",
          marginTop: "1em",
          marginBottom: "6em",
        }}
      >
        <Link
          to="/portfolio"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="project__section__left__link__entry"
          style={{ marginTop: "0em" }}
        >
          View More
          <ArrowRight size={20} color="currentColor" />
        </Link>
      </div>
    </>
  );
}
