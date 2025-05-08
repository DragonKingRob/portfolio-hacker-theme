import './App.css';

function App() {
  return (
    <>
      <img src="/matrix.gif" alt="matrix" className="background" />
      <div className="content">
        <h1>Robert R.</h1>
        <p>Cybersecurity Engineer • University of North Texas</p>

        <section className="section">
          <h2>&gt; whoami</h2>
          <p>Cybersecurity Engineer – Apple Intern (AirPods Engineering)</p>
        </section>

        <section className="section">
          <h2>&gt; role</h2>
          <p>
            Technical Expert at Apple. Supporting AirPods firmware diagnostics, connectivity analysis, and system-level performance testing in both retail and engineering environments.
          </p>
        </section>

        <section className="section">
          <h2>&gt; about</h2>
          <p>
            I’m a Cybersecurity Engineer specializing in system architecture, full-stack development, and real-world validation.
            I earned my B.S. in Cybersecurity Engineering from the University of North Texas, where I developed an encrypted, peer-to-peer file-sharing platform as part of my senior capstone.
          </p>
          <p>
            I interned with the AirPods Firmware Connectivity Engineering team at Apple in San Diego, where I helped validate and optimize Bluetooth stack performance, collaborated on systems integration tests across iOS/macOS devices, and worked directly with senior engineers to refine real-time diagnostics tools for AirPods firmware. My role demanded both technical fluency and cross-functional communication—especially when presenting findings that informed development priorities.
          </p>
          <p>
            I now work as a Technical Expert at Apple, leading Genius Bar operations while mentoring junior technicians and delivering hands-on device validation and support for hundreds of users weekly. I’ve built a reputation for bridging the gap between hardware, software, and UX—while keeping cool under pressure.
          </p>
          <p>
            I build tools and systems that scale, secure, and solve real-world problems—and I’m just getting started.
          </p>
        </section>

        <section className="section">
          <h2>&gt; projects</h2>
          <p>
            <strong>EZFileShare</strong>: Secure file transfer app with encrypted logging and session-based access.
            <br />
            <a href="https://github.com/DragonKingRob/EZFileShare" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
          </p>
          <p>
            <strong>Vehicle Sensor Integration</strong>: Embedded system for real-time diagnostics and telemetry over CAN.
            <br />
            <a href="#">View on GitHub →</a>
          </p>
        </section>

        <section className="section">
          <h2>&gt; resume</h2>
          <a href="/Robert_Resume_genius_2025.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </section>

        <footer>
          <p>Built with React + Tailwind — © 2025 Robert R.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
