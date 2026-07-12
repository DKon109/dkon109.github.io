import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { experience } from '../data'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <SectionLabel n="04">Experience</SectionLabel>
          <h2 className="section-title">
            An <span className="gradient-text">unconventional</span> path.
          </h2>
          <p className="section-sub">
            Teacher, hospitality professional, and now software developer — every step
            built the communication and problem-solving skills I bring to engineering.
          </p>
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08}>
              <div className="card job" style={{ '--accent': job.accent } as React.CSSProperties}>
                <div className="job-header">
                  <span className="job-company">{job.company}</span>
                  <span className="job-period">{job.period}</span>
                </div>
                <div className="job-role">{job.role}</div>
                <div className="job-location">{job.location}</div>
                <ul className="job-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
