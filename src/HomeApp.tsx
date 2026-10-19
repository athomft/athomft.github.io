import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const HomeApp: React.FC = () => {
  return (
    <div className="container">
      <Header showIntro={true} currentPage="home" />
      
      <hr className="divider" />

      {/* Projects Section */}
      <section className="projects">
        <div className="project-grid">
          {/* Card 1: Loan Note */}
          <div className="project-card">
            <a href="https://myloannote.net" className="project-img-link" aria-label="View Loan Note Project">
              <img 
                src="images/loannote.svg" 
                alt="Loan Note - Web app for tracking money you lend or borrow" 
                className="project-card-img" 
                width="495" 
                height="260" 
                loading="lazy" 
              />
            </a>
            <h3>Loan Note</h3>
            <p>
              Loan Note is a web app for tracking money you lend or borrow. Create loans, add amounts and labels, and see totals per loan and overall. Mark items as paid, set your currency, and use optional premium features and in-app contact for support. It works in the browser on any device.
            </p>
          </div>

          {/* Card 2: Fmly3 */}
          <div className="project-card">
            <a href="https://fmly3.athomft.com" className="project-img-link" aria-label="View Fmly3 Project">
              <img 
                src="images/fmly3.svg" 
                alt="Fmly3 - Web app for building and exploring family trees" 
                className="project-card-img" 
                width="495" 
                height="260" 
                loading="lazy" 
              />
            </a>
            <h3>Fmly3</h3>
            <p>
              Fmly3 is a collaborative web app for building and exploring family trees. Add relatives, connect complex relationships, and preserve family memories and milestones together. It features interactive visual tree graphs, timelines, maps, and secure sharing across devices.
            </p>
          </div>

          {/* Card 3: Household Board */}
          <div className="project-card">
            <a href="https://household-todo.athomft.com" className="project-img-link" aria-label="View Household Board Project">
              <img 
                src="images/household-todo.svg" 
                alt="Household Board - Mobile-first shared household to-do coordination" 
                className="project-card-img" 
                width="495" 
                height="260" 
                loading="lazy" 
              />
            </a>
            <h3>Household Board</h3>
            <p>
              Household Board is a mobile-first coordination web app for roommates, families, and shared house chores. Share a single instant link with zero login or sign-up required, organize tasks, and keep everyone on the same page seamlessly.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider divider--align-social" />

      {/* Social Accounts Section */}
      <section className="social-section">
        <div className="social-accounts-inner">
          <h2>Active social accounts</h2>
          <p>
            These are my official social media and contact accounts. I may not be equally active on every platform, 
            but these links represent the channels I use to share updates and connect. Email remains the most reliable 
            way to contact me directly.
          </p>
        </div>

        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com/athomft">
              <span className="other-social-icon" aria-hidden="true">
                <i className="fa-brands fa-facebook-f"></i>
              </span>{' '}
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/athomft">
              <span className="other-social-icon" aria-hidden="true">
                <i className="fa-brands fa-instagram"></i>
              </span>{' '}
              Instagram
            </a>
          </li>
          <li>
            <a href="contact.html">
              <span className="other-social-icon" aria-hidden="true">
                <i className="fa-solid fa-envelope"></i>
              </span>{' '}
              Email
            </a>
          </li>
          <li>
            <a href="https://bsky.app/profile/athomft.bsky.social">
              <span className="other-social-icon" aria-hidden="true">
                <i className="fa-brands fa-bluesky"></i>
              </span>{' '}
              Bluesky
            </a>
          </li>
          <li>
            <a href="https://mastodon.social/@athomft">
              <span className="other-social-icon" aria-hidden="true">
                <i className="fa-brands fa-mastodon"></i>
              </span>{' '}
              Mastodon
            </a>
          </li>
          <li>
            <a href="https://www.threads.com/@athomft">
              <span className="other-social-icon" aria-hidden="true">
                <i className="fa-brands fa-threads"></i>
              </span>{' '}
              Threads
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@athomft">
              <span className="other-social-icon" aria-hidden="true">
                <i className="fa-brands fa-tiktok"></i>
              </span>{' '}
              TikTok
            </a>
          </li>
          <li>
            <a href="https://twitter.com/athomft">
              <span className="other-social-icon" aria-hidden="true">
                <i className="fa-brands fa-x-twitter"></i>
              </span>{' '}
              X (formerly Twitter)
            </a>
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};
